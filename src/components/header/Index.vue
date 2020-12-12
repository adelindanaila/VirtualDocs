<template>

    <Navbar />
    <Hero />

</template>

<script>
import Navbar from '@/components/header/Navbar.vue'
import Hero from '@/components/header/Hero.vue'

export default {
    name: 'Header',
    components: {
        Navbar,
        Hero
    }
}
</script>
