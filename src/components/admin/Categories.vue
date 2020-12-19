<template>
    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div id="manage_categories_modal_wrapper" class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 animate__animated animate__fadeIn animate__faster">
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div id="manage_categories_modal_content" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full animate__animated animate__pulse animate__faster" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div v-if="loading" class="w-full h-full absolute top-0 left-0 z-10 flex items-center justify-center bg-gray-100 bg-opacity-75 animate__animated animate__fadeIn animate__faster" style="height: calc(100% - 62px);">
                        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                    <div id="modal_content" class="bg-white px-4 pt-5 pb-5 sm:p-6 sm:pb-6 relative custom-scrollbar">

                        <ul
                            v-if="categories.length"
                            class="border border-gray-200 rounded-md divide-y divide-gray-200"
                        >
                            <li
                                v-for="( category, index ) in categories"
                                :key="category._id"
                                :data-index="index"
                                style="height: 47px;"
                                class="pl-3 pr-4 py-3 flex items-center justify-between text-sm animate__animated animate__fadeIn animate__faster"
                            >
                                <div class="w-0 flex-1 flex items-center">
                                    <svg class="flex-shrink-0 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                                    <input
                                        v-if="category.edit" 
                                        :value="category.name"
                                        @change="error_checker"
                                        type="text" 
                                        class="focus:ring-indigo-500 focus:border-indigo-500 block w-full border sm:text-sm border-gray-300 rounded-md px-2 py-1 mx-2 transition" 
                                        placeholder="Type here.."
                                    />
                                    <span v-else class="ml-2 flex-1 w-0 truncate">{{ category.name }}</span>
                                </div>
                                <div>
                                    <div v-if="!category.delete"
                                        class="flex items-center">
                                        <svg
                                            v-if="category.edit" 
                                            @click="edit( category._id, index )"
                                            class="w-5 h-5 cursor-pointer stroke-current transition hover:text-indigo-400 select-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <svg
                                            v-else
                                            @click="categories[ index ].edit = true"
                                            class="w-5 h-5 cursor-pointer stroke-current transition hover:text-indigo-400 select-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                        <svg
                                            v-if="category.edit" 
                                            @click="categories[ index ].edit = false"
                                            class="w-5 h-5 cursor-pointer stroke-current transition hover:text-indigo-400 select-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <svg
                                            v-else
                                            @click="categories[ index ].delete = true"
                                            class="w-5 h-5 cursor-pointer stroke-current transition hover:text-indigo-400 select-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </div>
                                    <div
                                        v-else
                                        class="animate__animated animate__fadeIn animate__faster"
                                    >
                                        <a
                                            @click="remove( category._id, index )"
                                            href="javascript:void(0);"
                                            class="font-medium text-red-600 transition hover:text-red-500"
                                        >Yes, remove</a>
                                        <span class="mx-1">or</span>
                                        <a
                                            @click="categories[ index ].delete = false"
                                            href="javascript:void(0);"
                                            class="font-medium transition hover:text-indigo-500"
                                        >Cancel</a>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            @click="close( )"
                            type="button"
                            :class="this.loading ? 'bg-opacity-80 pointer-events-none' : null"
                            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Close
                        </button>
                    </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'

export default {

    data: ( ) => ({

        categories: [ ],
        loading: false

    }),

    async mounted( ) {

        document.body.style.overflowY = 'hidden'

        await this.get_categories ( )
        
    },
    
    methods: {

        close( ) {

            const wrapper = document.getElementById('manage_categories_modal_wrapper')
            const content = document.getElementById('manage_categories_modal_content')
            
            wrapper.classList.remove('animate__fadeIn')
            wrapper.classList.add('animate__fadeOut')
            content.classList.add('animate__pulse')

            setTimeout(( ) => this.$parent.manage_categories_close( ), 500)

        },

        async get_categories( ) {

            try {
                
				const response = await axios.get('/categories')
                
                this.categories = response.data
            
            }
            
            catch ( error ) {
            
                console.log(error)

            }

        },

        async edit( id, index ) {

            const input = document.querySelector(`#modal_content li[data-index="${index}"] input`)

            if( !input.value.length )
                this.error_add_classes( input )

            else {

                try {

                    if( this.categories[ index ].name !== input.value ) {

                        await axios.post('/category/edit', {

                            category: id,
                            name: input.value

                        })

                    }
                        
                    this.categories[ index ].name = input.value
                    this.categories[ index ].edit = false 

                }

                catch ( error ) {
            
                    console.log(error)

                }

            }

        },

        async remove( id, index ) {

            try {

                const element = document.querySelector(`#modal_content li[data-index="${index}"]`)

                await axios.post('/category/remove', {

                    category: id

                })

                element.classList.remove('animate__fadeIn', 'animate__faster')
                element.classList.add('animate__fadeOut', 'animate__faster2x')

                setTimeout(( ) => this.categories.splice(index, 1), 250)  

            }

            catch( error ) {

                console.log( error )

            }

        },

        // remove input error classes
        error_checker( event ) {

            const input = event.target

            if( input.classList.contains( 'border-red-700' ) )
                this.error_remove_classes( input )

            else {

                if( !input.value.length )
                    this.error_add_classes( input )

            }

        },

        error_add_classes( input ) {

            input.classList.remove('border-gray-300')
            input.classList.add('border-red-700', 'placeholder-red-700', 'placeholder-opacity-90')

        },

        error_remove_classes( input ) {

            input.classList.remove('border-red-700', 'placeholder-red-700', 'placeholder-opacity-90')
            input.classList.add('border-gray-300')

        }

    }

}
</script>