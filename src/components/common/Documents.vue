<template>
  <div id="documents_content" class="flex flex-wrap overflow-hidden">
    <Categories :category="category" />
    <div class="w-3/4 overflow-hidden pl-3 flex flex-col justify-between">
      <div class="sm:-mx-6 lg:-mx-8">
        <div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="border border-gray-100 overflow-hidden sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    :style="admin ? 'width: 50%;' : 'width: 75%;'"
                    scope="col"
                    class="px-6 h-16 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Document
                  </th>
                  <th
                    style="width: 25%"
                    scope="col"
                    class="px-6 h-16 text-left text-sm font-medium text-gray-500 uppercase tracking-wider text-center"
                  >
                    Date
                  </th>
                  <th v-if="admin" style="width: 25%" scope="col" class="relative px-6 h-16">
                    <span class="sr-only">Remove</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr
                  v-for="document in documents.docs"
                  :key="document._id"
                  @click="
                    this.$router.push(
                      `/document/${encodeURI(document.name.replace(/\s+/g, '-').toLowerCase())}/${
                        document._id
                      }`
                    )
                  "
                  :class="
                    !this.admin ? 'cursor-pointer hover:text-indigo-400 hover:bg-indigo-100' : null
                  "
                  class="animate__animated animate__fadeIn animate__faster transition"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
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
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ document.name }}
                        </div>
                        <div class="text-sm text-gray-500">
                          {{
                            document.description.length > (this.admin ? 50 : 95)
                              ? document.description.substring(0, this.admin ? 50 : 95) + '..'
                              : document.description
                          }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm text-gray-500">
                      {{ renderDate(document.date) }}
                    </div>
                  </td>
                  <td
                    v-if="admin"
                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                  >
                    <a href="#" class="text-red-600 hover:text-red-900">Remove</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination :data="documents" />
    </div>
  </div>
</template>

<script>
import Categories from '@/components/common/Categories'
import Pagination from '@/components/common/Pagination'
import axios from 'axios'
import moment from 'moment'

export default {
  props: ['admin'],

  name: 'DocumentsComponent',
  components: {
    Categories,
    Pagination,
  },

  data: () => ({
    documents: [],
    page: 1,
    category: '',
    resizeTimeout: undefined,
  }),

  async mounted() {
    const promise = new Promise((next, fail) => {
      const documents_content = document.getElementById('documents_content')

      if (this.admin) {
        const navbar = document.getElementById('navbar').offsetHeight
        const hero = document.getElementById('hero').offsetHeight
        const height = navbar + hero

        documents_content.style.height = `calc(100vh - ${height}px - 4rem)`
      } else {
        const height = document.getElementById('documents_disclaimer').offsetHeight
        documents_content.style.height = `calc(100% - ${height}px)`
      }

      next()
      fail()
    })

    promise
      .then(async () => {
        await this.data()
      })
      .catch(error => console.log(error))

    window.addEventListener('resize', () => {
      clearTimeout(this.resizeTimeout)
      this.resizeTimeout = setTimeout(() => this.data(this.category, this.page), 500)
    })
  },

  methods: {
    async data(category = '', page = 1) {
      this.category = category
      this.page = page

      const documents_content = document.getElementById('documents_content').offsetHeight
      const thead = document.querySelector('table thead').offsetHeight
      // const pagination_wrapper = document.getElementById('pagination_wrapper').offsetHeight

      const limit = Math.floor((documents_content - thead - 38) / 73)

      try {
        const params = new URLSearchParams({
          category,
          limit,
          page,
        }).toString()
        const response = await axios.get(`/documents?${params}`)

        this.documents = response.data
      } catch (error) {
        console.log(error)
      }
    },

    async pagination(page) {
      await this.data(this.category, page)
    },

    renderDate(date) {
      return moment(date).fromNow()
    },
  },
}
</script>
