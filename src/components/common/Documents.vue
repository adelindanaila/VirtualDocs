<template>
    <div id="documents_content" class="flex flex-wrap overflow-hidden">
		<Categories :category="category" />
		<div class="w-3/4 overflow-hidden pl-3 flex flex-col justify-between">
			<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div class="border border-gray-100 overflow-hidden sm:rounded-lg">
						<table class="min-w-full divide-y divide-gray-200">
							<thead class="bg-gray-50">
								<tr>
									<th scope="col" class="px-6 h-16 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
										Document
									</th>
									<th scope="col" class="px-6 h-16 text-left text-sm font-medium text-gray-500 uppercase tracking-wider text-center">
										Date
									</th>
									<th v-if="admin"
										scope="col"
										class="relative px-6 h-16"
									>
										<span class="sr-only">Remove</span>
									</th>
								</tr>
							</thead>
							<tbody class="bg-white divide-y divide-gray-200">
								<tr
									v-for="document in documents"
									:key="document._id"
									:class="!this.admin ? 'cursor-pointer hover:text-indigo-400 hover:bg-indigo-100' : null"
									class="animate__animated animate__fadeIn animate__faster"
								>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 h-10 w-10 bg-indigo-50 rounded-full flex items-center justify-center">
												<svg class="w-6 h-6 stroke-current text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
												</svg>
											</div>
											<div class="ml-4">
												<div class="text-sm font-medium text-gray-900">
													{{ document.name }}
												</div>
												<div class="text-sm text-gray-500">
													{{ document.description }}
												</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-center">
										<div class="text-sm text-gray-500">{{ renderDate(document.date) }}</div>
									</td>
									<td
										v-if="admin"
										class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<a href="#" class="text-red-600 hover:text-red-900">Remove</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
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
							<span class="font-medium">1</span>
							to
							<span class="font-medium">10</span>
							of
							<span class="font-medium">97</span>
							results
						</p>
					</div>
					<div>
						<nav class="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
							<a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-100 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
								<span class="sr-only">Previous</span>
								<!-- Heroicon name: chevron-left -->
								<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
							</a>
							<a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-100 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
							1
							</a>
							<a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-100 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
							2
							</a>
							<a href="#" class="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-100 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
							3
							</a>
							<span class="relative inline-flex items-center px-4 py-2 border border-gray-100 bg-white text-sm font-medium text-gray-500">
							...
							</span>
							<a href="#" class="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-100 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
							8
							</a>
							<a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-100 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
							9
							</a>
							<a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-100 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
							10
							</a>
							<a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-100 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
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
		</div>
	</div>
</template>

<script>
import Categories from '@/components/common/Categories'
import axios from 'axios'
import moment from 'moment'

export default {

	props: ['admin'],

	name: 'DocumentsComponent',
	components: {

		Categories

	},

	data: ( ) => ({

		documents: [ ],
		category: '',
		resizeTimeout: undefined

	}),

	async mounted( ) {

		const promise = new Promise(( next, fail ) => {

			const documents_content = document.getElementById('documents_content')

			if( this.admin ) {

				const navbar = document.getElementById('navbar').offsetHeight
				const hero = document.getElementById('hero').offsetHeight
				const height = navbar + hero

				documents_content.style.height = `calc(100vh - ${height}px - 4rem)`

			}

			else {

				const height = document.getElementById('documents_disclaimer').offsetHeight
				documents_content.style.height = `calc(100% - ${height}px)`

			}

			next( )
			fail( )

		})

		promise.then(async ( ) => {

			await this.data( )

		}).catch((error) => console.log(error))

		window.addEventListener('resize', ( ) => {

			clearTimeout( this.resizeTimeout )
			this.resizeTimeout = setTimeout(( ) => this.data( this.category ), 500 )

		})

	},

	methods: {

		async data( category = '' ) {

			this.category = category

			const documents_content = document.getElementById('documents_content').offsetHeight
			const thead = document.querySelector('table thead').offsetHeight
			const pagination_wrapper = document.getElementById('pagination_wrapper').offsetHeight

			const limit = Math.floor( (documents_content - thead - pagination_wrapper) / 73 )

			try {

                const params = new URLSearchParams({ category, limit }).toString()
				const response = await axios.get(`/documents?${params}`)
                
				this.documents = response.data
            
            }
            
            catch ( error ) {
            
                console.log(error)

            }

		},

		renderDate( date ) {

			return moment(date).fromNow( )

		}

	}
	
}
</script>