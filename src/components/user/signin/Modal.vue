<template>
  <div
    id="signin_modal"
    class="absolute top-0 bg-gray-50 w-full h-screen z-50 animate__animated animate__fadeIn animate__faster"
  >
    <svg
      class="w-10 h-10 cursor-pointer absolute top-5 right-5 stroke-current text-indigo-600 hover:text-indigo-700 transition"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      @click="this.$parent.modal_close('signin')"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>

    <SignInForm v-if="component === 'signin'" />
    <SignUpForm v-if="component === 'signup'" />
    <ForgotPasswordForm v-if="component === 'forgotpassword'" />
  </div>
</template>

<script>
import SignInForm from '@/components/user/signin/Form'
import SignUpForm from '@/components/user/signup/Form'
import ForgotPasswordForm from '@/components/user/ForgotPassword'

export default {
  name: 'SignInModal',
  components: {
    SignInForm,
    SignUpForm,
    ForgotPasswordForm,
  },

  data: () => ({
    component: 'signin',
  }),

  methods: {
    change(element_id, component) {
      const element = document.getElementById(element_id)
      element.classList.remove('animate__fadeIn')
      element.classList.add('animate__fadeOut')

      setTimeout(() => (this.component = component), 500)
    },

    close_modal() {
      this.$parent.modal_close('signin')
    },
  },
}
</script>
