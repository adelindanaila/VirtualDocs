<template>
    <Hero />
    <div v-if="!loading" class="bg-white shadow-sm animate__animated animate__fadeIn animate__faster py-8">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <h2 class="font-extrabold tracking-tight text-gray-900">
                <span class="block text-3xl sm:text-4xl text-indigo-600">{{ document.name }}</span>
                <span class="block text-xl">{{ document.description }}</span>
            </h2>
            <div class="mt-8 lex lg:mt-0 lg:flex-shrink-0">
                <div class="ml-3 inline-flex rounded-md shadow">
                    <a
                        @click="print( )"
                        href="javascript:void(0);"
                        class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                    >
                    Print
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div id="document_content" class="max-w-7xl mx-auto">
        <div v-if="loading" id="loader_wrapper" class="w-full flex items-center justify-center animate__animated animate__fadeIn animate__faster">
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
        <div v-show="!loading" class="animate__animated animate__fadeIn animate__faster py-16">
            <div class="flex items-center justify-center">
                <div id="document" />
            </div>
        </div>
    </div>
</template>

<script>
import Hero from '@/components/common/Hero'
import axios from 'axios'
import printJS from 'print-js'

import 'pdfjs-dist/web/pdf_viewer.css'
import * as pdfjsLib from 'pdfjs-dist/build/pdf.js'
import * as pdfjsViewer from 'pdfjs-dist/web/pdf_viewer.js'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry.js'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

export default {
    
	components: {

		Hero
		
    },

    data: ( ) => ({

        document: null,
        loading: true

    }),
    
    async mounted( ) {

        const navbar = document.getElementById('navbar').offsetHeight
		const hero = document.getElementById('hero').offsetHeight

        document.getElementById('loader_wrapper').style.height = `calc(100vh - ${navbar + hero}px)`
        document.getElementById('app').classList.add('bg-gray-200', 'bg-opacity-75')

        try {

            const params = new URLSearchParams({ document: this.$route.params.id }).toString( )
            const response = await axios.get(`/document?${params}`)
            
            this.document = response.data

            const task = pdfjsLib.getDocument(`${this.api_url}/${this.upload_folder}/${response.data.file}.pdf`)
            task.promise.then(( pdf ) => {
                
                const _this = this
                let promise = Promise.resolve( )

                for( let i = 1; i <= pdf.numPages; i++ ) {
                    promise = promise.then(
                        function(pageNum) {
                            return pdf.getPage(pageNum).then(function(pdfPage) {

                                const pdfPageView = new pdfjsViewer.PDFPageView({
                                    container: document.getElementById('document'),
                                    id: pageNum,
                                    scale: parseFloat(_this.document_viewport_scale),
                                    defaultViewport: pdfPage.getViewport({
                                        scale: parseFloat(_this.document_viewport_scale)
                                    }),
                                    eventBus: new pdfjsViewer.EventBus( ),
                                    annotationLayerFactory: new pdfjsViewer.DefaultAnnotationLayerFactory( ),
                                    renderInteractiveForms: true
                                })

                                pdfPageView.setPdfPage(pdfPage)
                                _this.loading = false
                                return pdfPageView.draw()
                            })
                        }.bind(null, i)
                    );
                }

            })

        }

        catch( error ) {

            console.log( error )
            this.$router.push('/404')

        }

    },

    unmounted( ) {

        document.getElementById('app').classList.remove('bg-gray-200', 'bg-opacity-75')

    },

    methods: {

        async print( ) {

            let fields = { }
            const inputs = document.querySelectorAll('.annotationLayer input')

            inputs.forEach(( node ) => {

                fields[node.name] = node.value

            })
            
            const response = await axios.post('/document/fill', {

                file: this.document.file,
                fields: JSON.stringify(fields)

            }, {

                responseType: 'arraybuffer'

            })

            const blob = new Blob([ response.data ], {

                type: 'application/pdf'

            })

            let url = URL.createObjectURL(blob)
            printJS( url )
            url = URL.revokeObjectURL(blob)

        }

    }
    
}
</script>