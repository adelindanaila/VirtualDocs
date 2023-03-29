<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div
      id="add_documents_modal_wrapper"
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 animate__animated animate__fadeIn animate__faster"
    >
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
        >&#8203;</span
      >

      <div
        id="add_documents_modal_content"
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full animate__animated animate__pulse animate__faster"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div
          v-if="loading"
          class="w-full h-full absolute top-0 left-0 z-10 flex items-center justify-center bg-gray-100 bg-opacity-75 animate__animated animate__fadeIn animate__faster"
          style="height: calc(100% - 62px)"
        >
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div
          id="modal_content"
          class="bg-white px-4 pt-5 pb-5 sm:p-6 sm:pb-6 relative custom-scrollbar"
        >
          <div id="dropzone_wrapper" class="flex flex-col">
            <ul
              v-if="this.files.length || this.rejected_files.length"
              class="border border-gray-200 rounded-md divide-y divide-gray-200 w-full mb-4"
            >
              <li
                v-for="(file, index) in this.rejected_files"
                :key="file.upload.uuid"
                :data-index="this.files.length + index"
                class="bg-red-500 bg-opacity-20 pl-3 pr-4 py-3 text-sm animate__animated animate__fadeIn animate__faster"
              >
                <div class="flex items-center justify-between">
                  <div class="w-0 flex-1 flex items-center">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-gray-400"
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
                    <span class="ml-2 flex-1 w-0 truncate">
                      {{ file.name }}
                    </span>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a
                      @click="remove(index, this.rejected_files, this.files.length + index)"
                      href="javascript:void(0);"
                      class="font-medium text-red-600 transition hover:text-red-500"
                    >
                      Remove
                    </a>
                  </div>
                </div>
                <div class="mt-2">{{ file.error }}</div>
              </li>

              <li
                v-for="(file, index) in this.files"
                :key="file.upload.uuid"
                :data-index="index"
                class="pl-3 pr-4 py-3 text-sm animate__animated animate__fadeIn animate__faster"
              >
                <div class="flex items-center justify-between">
                  <div class="w-0 flex-1 flex items-center">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-gray-400"
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
                    <span class="ml-2 flex-1 w-0 truncate">
                      {{ file.name }}
                    </span>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a
                      @click="remove(index, this.files)"
                      href="javascript:void(0);"
                      class="font-medium text-red-600 transition hover:text-red-500"
                    >
                      Remove
                    </a>
                  </div>
                </div>
                <div class="grid grid-cols-6 gap-x-6 gap-y-2 mt-2">
                  <div class="col-span-6 sm:col-span-3 input-wrapper">
                    <label
                      :for="`name-${index}`"
                      class="block text-xs font-medium text-gray-700 transition"
                      >Name</label
                    >
                    <input
                      :name="`name-${index}`"
                      :id="`name-${index}`"
                      @change="error_checker"
                      type="text"
                      placeholder="Type here.."
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border sm:text-sm border-gray-300 rounded-md px-2 py-1 transition"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3 input-wrapper">
                    <label
                      :for="`category-${index}`"
                      class="block text-xs font-medium text-gray-700 transition"
                    >
                      Category</label
                    >
                    <select
                      :name="`category-${index}`"
                      :id="`category-${index}`"
                      @change="error_checker"
                      class="mt-1 block w-full px-2 py-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition"
                    >
                      <option value="" disabled selected>Click to select</option>
                      <option value="uncategorized">Uncategorized</option>
                      <option
                        v-for="category in categories"
                        :key="category._id"
                        :value="category._id"
                      >
                        {{ category.name }}
                      </option>
                    </select>
                  </div>

                  <div class="col-span-12 sm:col-span-6 input-wrapper">
                    <label
                      :for="`description-${index}`"
                      class="block text-xs font-medium text-gray-700 transition"
                    >
                      Description
                    </label>
                    <input
                      :name="`description-${index}`"
                      :id="`description-${index}`"
                      @change="error_checker"
                      type="text"
                      placeholder="Type here.."
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border sm:text-sm border-gray-300 rounded-md px-2 py-1 transition"
                    />
                  </div>
                </div>
              </li>
            </ul>

            <div
              v-if="this.files.length < Number(this.document_max_files)"
              id="dropzone"
              class="flex justify-center w-full py-8 border-2 border-gray-300 border-dashed rounded-md cursor-pointer transition hover:border-indigo-400"
            >
              <div
                @click="dropzone.hiddenFileInput.click()"
                class="space-y-1 text-center select-none"
              >
                <svg
                  class="mx-auto h-12 w-12 text-gray-400 transition"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                <span class="font-medium text-sm text-gray-600 transition"
                  >Upload a file or drag and drop</span
                >
                <p class="text-xs text-gray-500">PDF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            id="submit_button"
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            :class="!this.files.length || this.loading ? 'bg-opacity-80 pointer-events-none' : null"
          >
            Add document
          </button>
          <button
            @click="close()"
            type="button"
            :class="this.loading ? 'bg-opacity-80 pointer-events-none' : null"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropzone from 'dropzone'
import axios from 'axios'
import _ from 'lodash'

export default {
  data: () => ({
    dropzone: null,
    categories: [],
    files: [],
    rejected_files: [],
    values: [],
    index: 0,
    loading: false,
  }),

  async mounted() {
    const _this = this

    await this.get_categories()

    document.body.style.overflowY = 'hidden'
    Dropzone.autoDiscover = false

    this.dropzone = new Dropzone('#dropzone', {
      autoProcessQueue: false,
      parallelUploads: Number(this.document_max_files),
      maxFiles: Number(this.document_max_files),
      acceptedFiles: '.pdf',
      maxFilesize: Number(this.document_max_size),

      url: `${this.api_url}/document/add`,
      headers: {
        Authorization: `Bearer ${this.$store.state.token}`,
      },

      init: function () {
        const _dropzone = this
        const submit_button = document.getElementById('submit_button')

        submit_button.addEventListener('click', function () {
          _this.process(_dropzone)
        })

        _dropzone.on('sending', function (data, xhr, formData) {
          const values = _this.values[_this.index]

          for (const [key, value] of Object.entries(values)) formData.append(key, value)

          _this.index++
        })

        _dropzone.on('error', function (file, response) {
          file.error = response

          _this.files.splice(-1, 1)
          _this.rejected_files = [..._this.rejected_files, file]
        })

        _dropzone.on('complete', function () {
          if (
            _this.loading &&
            this.getQueuedFiles().length === 0 &&
            this.getUploadingFiles().length === 0
          ) {
            this.removeAllFiles()
            _this.close()
          }
        })
      },
    })

    this.dropzone.on('addedfile', file => {
      this.files = [...this.files, file]
    })
  },

  methods: {
    close() {
      const wrapper = document.getElementById('add_documents_modal_wrapper')
      const content = document.getElementById('add_documents_modal_content')

      wrapper.classList.remove('animate__fadeIn')
      wrapper.classList.add('animate__fadeOut')
      content.classList.add('animate__pulse')

      setTimeout(() => this.$parent.add_documents_close(), 500)
    },

    remove(index, files, alternative_index = -1) {
      const element_index = alternative_index > -1 ? alternative_index : index
      const element = document.querySelector(
        `#dropzone_wrapper ul li[data-index="${element_index}"]`
      )

      element.classList.remove('animate__fadeIn', 'animate__faster')
      element.classList.add('animate__fadeOut', 'animate__faster2x')

      setTimeout(() => files.splice(index, 1), 250)
    },

    async get_categories() {
      try {
        const response = await axios.get('/categories')

        this.categories = response.data
      } catch (error) {
        console.error(error)
      }
    },

    process(dropzone) {
      let values = []
      const elements = document.querySelectorAll(`#dropzone_wrapper ul li`)

      elements.forEach(node => {
        let _values = {}
        const inputs = node.children[1].querySelectorAll('.input-wrapper')

        inputs.forEach((snap, index) => {
          const label = snap.querySelector('label')
          let input = snap.querySelector('input')

          let select = false

          if (!input) {
            select = true
            input = snap.querySelector('select')
          }

          if (!input.value.length) this.error_add_classes(label, input, select)
          else _values[`input${index}`] = input.value
        })

        if (!_.isEmpty(_values) && _.size(_values) === inputs.length) values.push(_values)
      })

      if (values.length === this.files.length) {
        this.values = values
        this.loading = true

        dropzone.processQueue()
      }
    },

    // remove input error classes
    error_checker(event) {
      const input = event.target
      const label = input.previousSibling
      const select = input.nodeName === 'SELECT'

      if (input.classList.contains('border-red-700'))
        this.error_remove_classes(label, input, select)
      else {
        if (!input.value.length) this.error_add_classes(label, input, select)
      }
    },

    error_add_classes(label, input, select) {
      label.classList.remove('text-gray-700')
      label.classList.add('text-red-700')

      input.classList.remove('border-gray-300')
      input.classList.add('border-red-700', 'placeholder-red-700', 'placeholder-opacity-90')

      if (select) input.classList.add('text-red-700', 'text-opacity-90')
    },

    error_remove_classes(label, input, select) {
      label.classList.remove('text-red-700')
      label.classList.add('text-gray-700')

      input.classList.remove('border-red-700', 'placeholder-red-700', 'placeholder-opacity-90')
      input.classList.add('border-gray-300')

      if (select) input.classList.remove('text-red-700', 'text-opacity-90')
    },
  },
}
</script>
