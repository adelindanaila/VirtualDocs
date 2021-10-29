<template>
    <Hero />
	<div id="admin_wrapper" class="max-w-7xl mx-auto py-8 bg-white">
		
		<div class="flex flex-wrap overflow-hidden h-full">
			<div class="w-1/4 overflow-hidden bg-gray-50 rounded-lg border border-gray-100">
				<Sidebar />
			</div>
			<div class="w-3/4 overflow-hidden pl-3">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			</div>
		</div>

	</div>

</template>

<script>
import Hero from '@/components/common/Hero'
import Sidebar from '@/components/admin/Sidebar'

export default {
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