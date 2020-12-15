<template>
	<div v-if="!this.$store.state.loading" class="animate__animated animate__fadeIn animate__faster">
		<Navbar />
		<router-view/>
		<Footer />
	</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {

	name: 'App',
	components: {

		Navbar,
		Footer

	}

}
</script>
