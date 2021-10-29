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
		<DocumentsComponent :admin="false" />
	</div>
</template>

<script>
import Hero from '@/components/common/Hero'
import DocumentsComponent from '@/components/common/Documents'

export default {

	components: {

		Hero,
		DocumentsComponent

	},

	mounted( ) {

		const navbar = document.getElementById('navbar').offsetHeight
		const hero = document.getElementById('hero').offsetHeight
		
		document.getElementById('documents_wrapper').style.height = `calc(100vh - ${navbar + hero}px)`
	
	}
}
</script>
