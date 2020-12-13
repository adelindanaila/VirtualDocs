<template>
    <Hero />
	<div id="admin_wrapper" class="max-w-7xl mx-auto py-8 bg-white">
		
		<div class="flex flex-wrap overflow-hidden h-full">
			<div class="w-1/4 overflow-hidden bg-gray-50 rounded-lg border border-gray-100">
				<Sidebar />
			</div>
			<div class="w-3/4 overflow-hidden pl-3 flex flex-col justify-between">
				<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div class="border border-gray-100 overflow-hidden sm:rounded-lg">
							<table class="min-w-full divide-y divide-gray-200">
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
								<tr>
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
										jane.cooper@example.com
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

								<!-- More rows... -->
							</tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="bg-white flex items-center justify-between">
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

	</div>

</template>

<script>
import Hero from '@/components/common/Hero'
import Sidebar from '@/components/admin/Sidebar'

export default {
	name: 'Users',
	components: {
        Hero,
        Sidebar
	},

	mounted( ) {

		const navbar = document.getElementById('navbar').offsetHeight
		const hero = document.getElementById('hero').offsetHeight
		document.getElementById('admin_wrapper').style.height = `calc(100vh - ${navbar + hero}px)`

	}
}
</script>