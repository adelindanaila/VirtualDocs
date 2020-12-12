<template>
  <Header />
  <router-view/>
</template>

<script>
import Header from '@/components/header/Index.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
