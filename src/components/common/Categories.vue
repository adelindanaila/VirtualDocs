<template>
    <div class="w-1/4 overflow-hidden bg-gray-50 rounded-lg border border-gray-100">
        <div class="w-full max-w-screen-xl">
            <div class="flex justify-center">
                <div class="w-full max-w-md">
                    <div class="flex items-center border-b border-gray-200" style="height: calc(4rem + 0.5px);">
                    <div class="flex items-center bg-white rounded-md relative w-full mx-3">
                        <input
                            type="search"
                            name="serch"
                            placeholder="Search category"
                            class="text-base bg-white shadow w-full rounded-md h-10 px-5 pr-10 text-sm focus:outline-none"
                            v-model="search_value"
                            @input="search"
                        >
                        <span class="absolute right-0 top-0 mt-3 mr-4">
                            <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                            </svg>
                        </span>
                    </div>
                    </div>
                    <div class="text-sm px-3 mt-2">
                        <div
                            v-for="category in categories"
                            :key="category._id" 
                            class="flex justify-start items-center cursor-pointer text-gray-700 hover:text-indigo-400 hover:bg-indigo-100 rounded-md py-2 my-1"
                        >
                            <span class="bg-indigo-400 h-2 w-2 rounded-full ml-2"></span>
                            <div class="flex-grow font-medium px-2">{{ category.name }}</div>
                        </div>
                    </div>
                    
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
        search_value: ''

    }),

    async mounted( ) {

        await this.data( )

    },
    

    methods: {

        async data( search = '' ) {

            try {

                const params = new URLSearchParams({ search }).toString()
				const response = await axios.get(`/categories?${params}`)
                
                this.categories = response.data
            
            }
            
            catch ( error ) {
            
                console.log(error)

            }

        },

        async search( ) {

            await this.data( this.search_value ? this.search_value : '' )

        }

    }

}
</script>