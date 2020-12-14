<template>
    <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div id="signin_form_wrapper" class="max-w-md w-full space-y-8 animate__animated animate__faster animate__fadeIn">
            <div>
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                or
                <a
                    href="javascript:void(0);"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                    @click="this.$parent.change('signin_form_wrapper', 'signup')"
                >
                    register your account for free
                </a>
            </p>
            </div>
            <form id="signin_form" class="mt-8" @submit="submit">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label for="email-address" class="sr-only">Email address</label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        v-model="email"
                    />
                    </div>
                    <div>
                    <label for="password" class="sr-only">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        required
                        minlength="6"
                        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        v-model="password"
                    />
                    </div>
                </div>

                <div class="text-sm float-right my-4">
                    <a
                        href="javascript:void(0);"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                        @click="this.$parent.change('signin_form_wrapper', 'forgotpassword')"
                    >
                        Forgot your password?
                    </a>
                </div>

                <div>
                    <button 
                        type="submit" 
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
                        :class="loading ? 'bg-opacity-80 pointer-events-none' : null"
                    >
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <!-- Heroicon name: lock-closed -->
                            <svg
                                class="h-5 w-5 text-white-500 group-hover:text-indigo-400 transition"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import validator from 'validator'

export default {

    data: ( ) => ({

        email: null,
        password: null,
        loading: false

    }),

    methods: {

        async submit( e ) {

            e.preventDefault( )

            if( this.email === null || !validator.isEmail(this.email) ) return false
            if( this.password === null || this.password.length < 6 ) return false

            this.loading = true

            try {

                const response = await axios.post('/user/signin', {

                    email: this.email,
                    password: this.password

                })

                this.loading = false
                localStorage.setItem('token', response.data.token)

            }

            catch ( error ) {

                this.loading = false
                const errors = error.response.data.errors

                if( errors.email === 'email_missing' )
                    alert('email_missing')

                if( errors.email === 'email_invalid' )
                    alert('email_invalid')

                if( errors.email === 'email_incorrect' )
                    alert('email_incorrect')

                if( errors.password === 'password_missing' )
                    alert('password_missing')

                if( errors.password === 'password_length' )
                    alert('password_length')

                if( errors.password === 'password_incorrect' )
                    alert('password_incorrect')

            }

        }

    }

}
</script>