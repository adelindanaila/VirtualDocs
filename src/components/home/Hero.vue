<template>
    <main class="bg-gray-50 border-t-2 border-b-2 border-gray-100">
        <div class="py-10 mx-auto max-w-7xl px-4 sm:py-8 sm:px-6 md:py-10 lg:py-12 lg:px-8 xl:py-16">
            <div class="sm:text-center">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl transition-all">
                    <span class="block">Looking for a</span>
                    <span class="block text-indigo-600">specific document?</span>
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-md sm:mx-auto md:mt-5 md:text-xl">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <Search />
            </div>
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
