<template>
    <div id="pagination_wrapper" class="bg-white flex items-center justify-between">
        <div class="flex-1 flex justify-between sm:hidden">
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
            Previous
            </a>
            <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
            Next
            </a>
        </div>

        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-500">
                    Showing
                    
                    <span class="font-medium">{{ this.renderFirstShowing( ) }}</span>
                    to
                    <span class="font-medium">{{ this.renderSecondShowing( ) }}</span>
                    of
                    <span class="font-medium">{{ this.data.totalDocs }}</span>
                    results
                </p>
            </div>
            <div>
                <nav v-if="this.data.totalPages > 1" class="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                    <a
                        @click="this.$parent.pagination( this.data.prevPage )"
                        :class="this.data.hasPrevPage ? null : 'pointer-events-none'"
                        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-100 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        href="javascript:void(0);"
                    >
                        <span class="sr-only">Previous</span>
                        <!-- Heroicon name: chevron-left -->
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a
                        v-for="page in this.data.totalPages"
                        v-show="Math.abs(page - this.data.page) < 3 || page === this.data.totalPages - 1 || page === 0"
                        :key="`page-${page}`"
                        @click="this.$parent.pagination( page )"
                        :class="this.data.page === page ? 'bg-indigo-100 text-indigo-400 pointer-events-none' : null"
                        class="relative inline-flex items-center px-4 py-2 border border-gray-100 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition"
                        href="javascript:void(0);"
                    >{{ page }}</a>
                    <!-- <span class="relative inline-flex items-center px-4 py-2 border border-gray-100 bg-white text-sm font-medium text-gray-500">
                        ...
                    </span> -->
                    <a
                        @click="this.$parent.pagination( this.data.nextPage )"
                        :class="this.data.hasNextPage ? null : 'pointer-events-none'"
                        class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-100 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        href="javascript:void(0);"
                    >
                        <span class="sr-only">Next</span>
                        <!-- Heroicon name: chevron-right -->
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    props: ['data'],

    methods: {

        renderFirstShowing( ) {

            let amount = (this.data.page - 1) * this.data.limit
            if( !amount ) amount = 1

            return amount

        },

        renderSecondShowing( ) {

            let amount = this.data.limit * this.data.page
            if( amount > this.data.totalDocs ) amount = this.data.totalDocs
            
            return amount

        }

    }

}
</script>