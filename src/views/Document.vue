<template>
    <Hero />
    <div class="max-w-7xl mx-auto py-8 bg-white">
        <div class="flex items-center justify-between">
			<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
				<span class="block">You didn't find what you needed?</span>
				<span class="block text-indigo-600">Contact us.</span>
			</h2>
			<div class="mt-8 lex lg:mt-0 lg:flex-shrink-0">
				<div class="ml-3 inline-flex rounded-md shadow">
					<a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
					Contact
					</a>
				</div>
			</div>
		</div>
        <div class="flex items-center justify-center">
            <canvas id="document" />
        </div>
    </div>
</template>

<script>
import Hero from '@/components/common/Hero'
import axios from 'axios'

const pdfjs = window.pdfjsLib

export default {
    
    name: 'Document',
	components: {

		Hero
		
    },

    data: ( ) => ({

        pdf: null,
        page: 1,
        page_rendering: false,
        page_pending: null,
        scale: 1.5,
        canvas: null,
        ctx: null

    }),
    
    async mounted( ) {

        this.canvas = document.getElementById('document'),
        this.ctx = this.canvas.getContext('2d')

        try {

            const params = new URLSearchParams({ document: this.$route.params.id }).toString( )
            const document_data = await axios.get(`/document?${params}`)

            const task = pdfjs.getDocument(`${this.api_url}/${this.upload_folder}/${document_data.data.file}.pdf`)
            task.promise.then(async ( pdf ) => {

                // console.log(pdf)

                this.pdf = pdf
                await this.render_page( 1 )

            })

        }

        catch( error ) {

            console.log( error )

        }

    },

    methods: {

        async render_page( page ) {

            this.page_rendering = true   

            const content = await this.pdf.getPage( page )
            const viewport = content.getViewport( { scale: this.scale } )

            this.canvas.height = viewport.height
            this.canvas.width = viewport.width

            // render pdf page into canvnas context
            const render_context = {

                canvasContext: this.ctx,
                viewport

            }

            const render_task = content.render( render_context )

            // wait for rendering to finish
            render_task.promise.then(( ) => {

                this.page_rendering = false

                if( this.page_pending !== null ) {

                    this.render_page( this.page_pending )
                    this.page_pending = null

                }

            })

            this.page = page

        },

        queue_render_page( page ) {

            if( this.page_rendering )
                this.page_pending = page
            else
                this.render_page( page )

        },

        previous_page( ) {

            if( this.page <= 1 ) return

            this.page--
            this.queue_render_page( this.page )

        },

        next_page( ) {

            if( this.page >= this.pdf.numPages ) return

            this.page++
            this.queue_render_page( this.page )

        }

    }
    
}
</script>