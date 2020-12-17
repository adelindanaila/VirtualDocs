<template>
    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div id="add_documents_modal_wrapper" class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 animate__animated animate__fadeIn animate__faster">
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div id="add_documents_modal_content" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full animate__animated animate__pulse animate__faster" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div id="modal_content" class="bg-white px-4 pt-5 pb-5 sm:p-6 sm:pb-6 custom-scrollbar">
                        <div id="dropzone_wrapper" class="flex flex-col">
                            <ul
                                v-if="this.files.length"
                                class="border border-gray-200 rounded-md divide-y divide-gray-200 w-full mb-4">

                                <li
                                    v-for="(file, index) in this.files"
                                    :key="file.upload.uuid"
                                    class="pl-3 pr-4 py-3 text-sm animate__animated animate__fadeIn animate__faster"
                                >
                                    <div class="flex items-center justify-between">
                                        <div class="w-0 flex-1 flex items-center">

                                            <svg class="flex-shrink-0 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                                            <span class="ml-2 flex-1 w-0 truncate">
                                            {{ file.name }}
                                            </span>
                                        </div>
                                        <div class="ml-4 flex-shrink-0">
                                            <a
                                                @click="remove(index)"
                                                href="javascript:void(0);"
                                                class="font-medium text-red-600 transition hover:text-red-500"
                                            >
                                            Remove
                                            </a>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6 mt-2">
                                        <div class="col-span-6 sm:col-span-3">
                                            <label :for="`name-${index}`" class="block text-xs font-medium text-gray-700">Name</label>
                                            <input type="text" :name="`name-${index}`" :id="`name-${index}`" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border sm:text-sm border-gray-300 rounded-md">
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label :for="`description-${index}`" class="block text-xs font-medium text-gray-700">Description</label>
                                            <input type="text" :name="`description-${index}`" :id="`description-${index}`" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border sm:text-sm border-gray-300 rounded-md">
                                        </div>
                                    </div>
                                </li>

                            </ul>
                            <div
                                id="dropzone"
                                class="flex justify-center w-full py-8 border-2 border-gray-300 border-dashed rounded-md cursor-pointer transition hover:border-indigo-400"
                            >
                                <div
                                    @click="dropzone.hiddenFileInput.click( )"
                                    class="space-y-1 text-center select-none"
                                >
                                    <svg class="mx-auto h-12 w-12 text-gray-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                    <span class="font-medium text-sm text-gray-600 transition">Upload a file or drag and drop</span>
                                    <p class="text-xs text-gray-500">
                                        PDF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button id="submit_button" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                        Add document
                        </button>
                        <button
                            @click="close( )"
                            type="button"
                            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Cancel
                        </button>
                    </div>
            </div>
        </div>
    </div>

</template>

<script>
import Dropzone from 'dropzone'
import config from '@/config.json'

export default {

    data: ( ) => ({

        dropzone: null,
        files: [ ]

    }),

    mounted( ) {

        document.body.style.overflowY = 'hidden'
        Dropzone.autoDiscover = false
        this.dropzone = new Dropzone('#dropzone', {

            url: `${config.api_url}/document/add`,
            autoProcessQueue: false,
            acceptedFiles: '.pdf',

            init: function( ) {

                const _dropzone = this
                const submit_button = document.getElementById('submit_button')
                
                submit_button.addEventListener('click', function( ) {

                    _dropzone.processQueue( )

                })

                _dropzone.on('complete', function( ) {

                    if( this.getQueuedFiles( ).length === 0 && this.getUploadingFiles( ).length === 0 ) {

                        this.removeAllFiles( )

                    }

                })

            }

        })

        this.dropzone.on('addedfile', ( file ) => {

            this.files = [...this.files, file ]

        })
        
    },

    methods: {

        close( ) {

            const wrapper = document.getElementById('add_documents_modal_wrapper')
            const content = document.getElementById('add_documents_modal_content')
            
            wrapper.classList.remove('animate__fadeIn')
            wrapper.classList.add('animate__fadeOut')
            content.classList.add('animate__pulse')

            setTimeout(( ) => this.$parent.add_documents_close( ), 500)

        },

        remove( index ) {

            console.log(this.files, index)
            this.files.splice(index, 1)

        }

    }

}
</script>