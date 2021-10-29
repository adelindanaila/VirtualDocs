<template>
    <Hero />

	<div id="admin_wrapper" class="max-w-7xl mx-auto py-8 bg-white">
		
		<div class="flex flex-wrap overflow-hidden h-full">
			<div class="w-1/4 overflow-hidden bg-gray-50 rounded-lg border border-gray-100">
				<Sidebar />
			</div>
			<div class="w-3/4 overflow-hidden pl-3 flex flex-col justify-between">
				<DocumentsComponent :admin="true" />
			</div>
		</div>

	</div>

</template>

<script>
import Hero from '@/components/common/Hero'
import Sidebar from '@/components/admin/Sidebar'
import DocumentsComponent from '@/components/common/Documents'

export default {

	components: {

        Hero,
		Sidebar,
		DocumentsComponent

	},

	mounted( ) {

		const navbar = document.getElementById('navbar').offsetHeight
		const hero = document.getElementById('hero').offsetHeight

		document.getElementById('admin_wrapper').style.height = `calc(100vh - ${navbar + hero}px)`

	}
}
</script>