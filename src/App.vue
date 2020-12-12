<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
import Header from '@/components/header/Index.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>
