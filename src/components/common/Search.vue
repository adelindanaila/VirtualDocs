<template>
  <div class="relative text-gray-600 mx-auto w-3/4">
    <input
      @input="search"
      v-model="name"
      id="hero_search_input"
      type="search"
      name="serch"
      placeholder="Search document"
      class="text-base rounded bg-white shadow w-full h-10 px-5 pr-10 text-sm focus:outline-none"
    />
    <span class="absolute right-0 top-0 mt-3 mr-4">
      <svg
        class="h-4 w-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 56.966 56.966"
        style="enable-background: new 0 0 56.966 56.966"
        xml:space="preserve"
        width="512px"
        height="512px"
      >
        <path
          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
        />
      </svg>
    </span>
    <div
      v-if="documents.length"
      id="hero_search_results"
      class="bg-white shadow absolute w-full z-10"
      style="top: calc(40px + 1rem)"
    >
      <div
        v-for="document in documents"
        :key="document._id"
        @click="
          this.$router.push(
            `/document/${encodeURI(document.name.replace(/\s+/g, '-').toLowerCase())}/${
              document._id
            }`
          )
        "
        class="flex items-center cursor-pointer p-5 border-b hover:text-indigo-400 hover:bg-indigo-100 transition animate__animated animate__fadeIn animate__faster"
      >
        <div
          class="flex-shrink-0 h-10 w-10 bg-indigo-50 rounded-full flex items-center justify-center"
        >
          <svg
            class="w-6 h-6 stroke-current text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            ></path>
          </svg>
        </div>
        <div class="text-left ml-4">
          <div class="text-sm font-medium text-gray-90">
            {{ document.name }}
          </div>
          <div class="text-sm text-gray-500">{{ document.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    documents: [],
    name,
  }),

  methods: {
    async search() {
      try {
        const params = new URLSearchParams({
          name: this.name,
          limit: this.search_limit,
        }).toString()
        const response = await axios.get(`/documents/search?${params}`)

        this.documents = response.data
      } catch (error) {
        this.documents = []
      }
    },
  },
}
</script>
