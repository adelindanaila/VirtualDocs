<template>
	<Hero />
	<div id="documents_wrapper" class="max-w-7xl mx-auto pb-8 bg-white">
		<div id="documents_disclaimer" class="flex items-center justify-between py-8">
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
		<div id="documents_content" class="flex flex-wrap overflow-hidden">
			<div class="w-1/4 overflow-hidden bg-gray-50 rounded-lg border border-gray-100">
				<div class="w-full max-w-screen-xl">
					<div class="flex justify-center">
						<div class="w-full max-w-md">
							<div class="flex items-center border-b border-gray-200" style="height: calc(4rem + 0.5px);">
							<div class="flex items-center bg-white rounded-md relative w-full mx-3">
								<input type="search" name="serch" placeholder="Search category" class="text-base bg-white shadow w-full rounded-md h-10 px-5 pr-10 text-sm focus:outline-none">
								<span class="absolute right-0 top-0 mt-3 mr-4">
									<svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
										<path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
									</svg>
								</span>
							</div>
							</div>
							<div class="text-sm px-3 mt-2">
								<div class="flex justify-start items-center cursor-pointer text-gray-700 hover:text-indigo-400 hover:bg-indigo-100 rounded-md py-2 my-1">
									<span class="bg-indigo-400 h-2 w-2 rounded-full ml-2"></span>
									<div class="flex-grow font-medium px-2">Leasing</div>
								</div>
								<div class="flex justify-start items-center cursor-pointer text-gray-700 hover:text-indigo-400 hover:bg-indigo-100 rounded-md py-2 my-1">
									<span class="bg-indigo-400 h-2 w-2 rounded-full ml-2"></span>
									<div class="flex-grow font-medium px-2">Insurance</div>
								</div>
								<div class="flex justify-start items-center cursor-pointer text-gray-700 hover:text-indigo-400 hover:bg-indigo-100 rounded-md py-2 my-1">
									<span class="bg-indigo-400 h-2 w-2 rounded-full ml-2"></span>
									<div class="flex-grow font-medium px-2">Vehicles</div>
								</div>
								<div class="flex justify-start items-center cursor-pointer text-gray-700 hover:text-indigo-400 hover:bg-indigo-100 rounded-md py-2 my-1">
									<span class="bg-indigo-400 h-2 w-2 rounded-full ml-2"></span>
									<div class="flex-grow font-medium px-2">Loans</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
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
									</tr>
								</thead>
								<tbody class="bg-white divide-y divide-gray-200">
									<tr class="cursor-pointer hover:text-indigo-400 hover:bg-indigo-100">
										<td class="px-6 py-4 whitespace-nowrap">
											<div class="flex items-center">
												<div class="flex-shrink-0 h-10 w-10 bg-indigo-50 rounded-full flex items-center justify-center">
													<svg class="w-6 h-6 stroke-current text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
													</svg>
												</div>
												<div class="ml-4">
													<div class="text-sm font-medium text-gray-900">
														Tax recovery request
													</div>
													<div class="text-sm text-gray-500">
														Tax collection from abroad
													</div>
												</div>
											</div>
										</td>
										<td class="px-6 py-4 whitespace-nowrap text-center">
											<div class="text-sm text-gray-500">12 days ago</div>
										</td>
									</tr>
									<tr class="cursor-pointer hover:text-indigo-400 hover:bg-indigo-100">
										<td class="px-6 py-4 whitespace-nowrap">
											<div class="flex items-center">
												<div class="flex-shrink-0 h-10 w-10 bg-indigo-50 rounded-full flex items-center justify-center">
													<svg class="w-6 h-6 stroke-current text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
													</svg>
												</div>
												<div class="ml-4">
													<div class="text-sm font-medium text-gray-900">
														Tax recovery request
													</div>
													<div class="text-sm text-gray-500">
														Tax collection from abroad
													</div>
												</div>
											</div>
										</td>
										<td class="px-6 py-4 whitespace-nowrap text-center">
											<div class="text-sm text-gray-500">12 days ago</div>
										</td>
									</tr>
									<tr class="cursor-pointer hover:text-indigo-400 hover:bg-indigo-100">
										<td class="px-6 py-4 whitespace-nowrap">
											<div class="flex items-center">
												<div class="flex-shrink-0 h-10 w-10 bg-indigo-50 rounded-full flex items-center justify-center">
													<svg class="w-6 h-6 stroke-current text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
													</svg>
												</div>
												<div class="ml-4">
													<div class="text-sm font-medium text-gray-900">
														Tax recovery request
													</div>
													<div class="text-sm text-gray-500">
														Tax collection from abroad
													</div>
												</div>
											</div>
										</td>
										<td class="px-6 py-4 whitespace-nowrap text-center">
											<div class="text-sm text-gray-500">12 days ago</div>
										</td>
									</tr>
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

export default {
	name: 'Documents',
	components: {
		Hero
	},

	mounted( ) {

		const navbar = document.getElementById('navbar').offsetHeight
		const hero = document.getElementById('hero').offsetHeight
		const documents_disclaimer = document.getElementById('documents_disclaimer').offsetHeight
		
		document.getElementById('documents_wrapper').style.height = `calc(100vh - ${navbar + hero}px)`
		document.getElementById('documents_content').style.height = `calc(100% - ${documents_disclaimer}px)`

	}
}
</script>
