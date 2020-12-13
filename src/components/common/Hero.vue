<template>
    <main id="hero" class="bg-gray-50 border-t-2 border-b-2 border-gray-100">
        <div class="py-5 mx-auto max-w-7xl px-4 sm:py-4 sm:px-6 md:py-10 lg:py-7 lg:px-8 xl:py-8">
            <Search />
        </div>
    </main>
</template>

<script>
import Search from '@/components/common/Search'

export default {
	name: 'Hero',
	components: {
		Search
	}
}
</script>
