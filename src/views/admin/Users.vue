<template>
    <Hero />
	<div id="admin_wrapper" class="max-w-7xl mx-auto py-8 bg-white">
		
		<div id="content_wrapper" class="flex flex-wrap overflow-hidden h-full">
			<div class="w-1/4 overflow-hidden bg-gray-50 rounded-lg border border-gray-100">
				<Sidebar />
			</div>
			<div class="w-3/4 overflow-hidden pl-3 flex flex-col justify-between">
				<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div class="border border-gray-100 overflow-hidden sm:rounded-lg">
							<table id="table" class="min-w-full divide-y divide-gray-200">
								<thead class="bg-gray-50">
									<tr>
									<th scope="col" class="px-6 h-16 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Name
									</th>
									<th scope="col" class="px-6 h-16 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Title
									</th>
									<th scope="col" class="px-6 h-16 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Status
									</th>
									<th scope="col" class="px-6 h-16 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Role
									</th>
									<th scope="col" class="relative px-6 h-16">
										<span class="sr-only">Edit</span>
									</th>
									</tr>
								</thead>
								<tbody class="bg-white divide-y divide-gray-200">
									<tr
										v-for="user in users.docs" 
										:key="user._id" 
										class="animate__animated animate__fadeIn animate__faster"
									>
										<td class="px-6 py-4 whitespace-nowrap">
											<div class="flex items-center">
											<div class="flex-shrink-0 h-10 w-10">
												<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
											</div>
											<div class="ml-4">
												<div class="text-sm font-medium text-gray-900">
												Jane Cooper
												</div>
												<div class="text-sm text-gray-500">
												{{ user.email }}
												</div>
											</div>
											</div>
										</td>
										<td class="px-6 py-4 whitespace-nowrap">
											<div class="text-sm text-gray-900">Regional Paradigm Technician</div>
											<div class="text-sm text-gray-500">Optimization</div>
										</td>
										<td class="px-6 py-4 whitespace-nowrap">
											<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
											Active
											</span>
										</td>
										<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
											Admin
										</td>
										<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<Pagination :data="users" />
			</div>
		</div>

	</div>

</template>

<script>
import Hero from '@/components/common/Hero'
import Pagination from '@/components/common/Pagination'
import Sidebar from '@/components/admin/Sidebar'

import axios from 'axios'

export default {

	name: 'Users',
	components: {

		Hero,
		Pagination,
		Sidebar
		
	},

	data: ( ) => ({

		users: [ ],
		page: 1,
		resizeTimeout: undefined

    }),

	async mounted( ) {

		await this.data( )

		window.addEventListener('resize', ( ) => {

			clearTimeout( this.resizeTimeout )
			this.resizeTimeout = setTimeout(( ) => this.data(this.page), 500 )

		})

	},

	methods: {

		async data( page = 1 ) {

			this.page = page

			const navbar = document.getElementById('navbar').offsetHeight
			const hero = document.getElementById('hero').offsetHeight

			document.getElementById('admin_wrapper').style.height = `calc(100vh - ${navbar + hero}px)`

			const content_wrapper = document.getElementById('content_wrapper').offsetHeight
			const thead = document.querySelector('table thead').offsetHeight
			const pagination_wrapper = document.getElementById('pagination_wrapper').offsetHeight

			const limit = Math.floor( (content_wrapper - thead - pagination_wrapper) / 73 )

			try {

				const params = new URLSearchParams({ limit, page }).toString()
				const response = await axios.get(`/users?${params}`)

				this.users = response.data
			
			}
			
			catch ( error ) {
			
				console.log(error)

			}

		}

	}
}
</script>