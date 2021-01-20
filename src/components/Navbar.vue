<template>
    <div id="navbar" class="relative bg-white">
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                    <span class="sr-only">Workflow</span>
                    <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
                    </a>
                </div>
                <div class="-mr-2 -my-2 md:hidden">
                    <button
                        type="button" 
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        @click="mb_open( )"
                    >
                    <span class="sr-only">Open menu</span>
                    <!-- Heroicon name: menu -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
                <nav class="hidden md:flex space-x-10">

                    <router-link to="/" class="text-base font-medium text-gray-500 hover:text-gray-900">
                        Home
                    </router-link>
                    <router-link to="/documents" class="text-base font-medium text-gray-500 hover:text-gray-900">
                        Documents
                    </router-link>
                    <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
                        About us
                    </a>
                    <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
                        Contact
                    </a>
                    <router-link
                        v-if="this.$store.state.user && this.$store.state.admin"
                        to="/admin" 
                        class="text-base font-medium text-gray-500 hover:text-gray-900"
                        :class="this.$router.currentRoute.value.fullPath.includes('/admin') ? 'font-bold text-gray-900' : null"
                    >
                        Admin
                    </router-link>

                </nav>

                <div v-if="this.$store.state.user === null" class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <a 
                        href="javascript:void(0);" 
                        class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                        @click="modal_open('signin')"
                    >
                        Sign in
                    </a>
                    <a
                        href="javascript:void(0);"
                        class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        @click="modal_open('signup')"
                    >
                        Sign up
                    </a>
                </div>

                <div v-if="this.$store.state.user !== null" class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <button class="p-1 rounded-full text-gray-700 hover:text-indigo focus:outline-none focus:ring-2 ring-indigo-400 focus:text-indigo-400  transition">
                        <span class="sr-only">View notifications</span>
                        <!-- Heroicon name: bell -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>

                    <!-- Profile dropdown -->
                    <div class="ml-3 relative">
                        <div>
                            <button
                                class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 ring-indigo-400"
                                id="user-menu"
                                aria-haspopup="true"
                                v-on:focus="umd_toggle(false)"
                                v-on:blur="umd_toggle(true)"
                            >
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                            </button>
                        </div>
                        
                        <div
                            v-show="user_menu_dropdown"
                            id="user_menu_dropdown" 
                            class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-40" 
                            role="menu" 
                            aria-orientation="vertical" 
                            aria-labelledby="user-menu"
                        >
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                <a
                                    href="javascript:void(0);"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                    @click="logout()"
                                >Sign out</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div 
            v-show="mobile_navigation"
            id="mobile_navigation"
            class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
        >
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                <div>
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
                </div>
                <div class="-mr-2">
                    <button
                        type="button" 
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        @click="mb_close( )"
                    >
                    <span class="sr-only">Close menu</span>
                    <!-- Heroicon name: x -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                </div>
                <div class="mt-6">
                <nav class="grid gap-y-8">
                    <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <!-- Heroicon name: chart-bar -->
                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900">
                        Analytics
                    </span>
                    </a>

                    <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <!-- Heroicon name: cursor-click -->
                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900">
                        Engagement
                    </span>
                    </a>

                    <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <!-- Heroicon name: shield-check -->
                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900">
                        Security
                    </span>
                    </a>

                    <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <!-- Heroicon name: view-grid -->
                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900">
                        Integrations
                    </span>
                    </a>

                    <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <!-- Heroicon name: refresh -->
                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900">
                        Automations
                    </span>
                    </a>
                </nav>
                </div>
            </div>
            <div class="py-6 px-5 space-y-6">
                <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                    Pricing
                </a>

                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                    Docs
                </a>

                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                    Enterprise
                </a>

                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                    Blog
                </a>

                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                    Help Center
                </a>

                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                    Guides
                </a>

                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                    Security
                </a>

                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                    Events
                </a>
                </div>
                <div>
                <a
                    href="javascript:void(0);"
                    class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    @click="modal_open('signup')"
                >
                    Sign up
                </a>
                <p class="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a 
                        href="javascript:void(0);"
                        class="text-indigo-600 hover:text-indigo-500"
                        @click="modal_open('signin')"
                    >
                        Sign in
                    </a>
                </p>
                </div>
            </div>
            </div>
        </div>
    </div>

    <SignInModal v-if="signin_modal" />
    <SignUpModal v-if="signup_modal" />
</template>

<script>
import SignInModal from '@/components/user/signin/Modal'
import SignUpModal from '@/components/user/signup/Modal'

export default {

    name: 'Navbar',
	components: {
        SignInModal,
        SignUpModal
	},

    data: ( ) => ({

        mobile_navigation: false,
        user_menu_dropdown: false,
        signin_modal: false,
        signup_modal: false

    }),

    methods: {

        // mobile navigation

        mb_open( ) {

            this.mobile_navigation = true
            const element = document.getElementById('mobile_navigation')

            element.classList.add('duration-200', 'ease-out', 'opacity-0', 'scale-95')

            setTimeout(( ) => {

                element.classList.remove('opacity-0', 'scale-95')
                element.classList.add('opacity-100', 'scale-100')

            }, 200)

        },

        mb_close( ) {

            const element = document.getElementById('mobile_navigation')

            element.classList.remove('duration-200', 'ease-out')
            element.classList.add('duration-100', 'ease-in')
            element.classList.remove('opacity-100', 'scale-100')
            element.classList.add('opacity-0', 'scale-95')

            setTimeout(( ) => {

                element.classList.remove('duration-100', 'ease-in')
                element.classList.add('duration-200', 'ease-out')

                this.mobile_navigation = false

            }, 100)

        },

        umd_toggle( state ) {

            if( state ) {

                const element = document.getElementById('user_menu_dropdown')

                element.classList.remove('ease-out', 'duration-100')
                element.classList.add('ease-in', 'duration-75')

                element.classList.remove('opacity-100', 'scale-100')
                element.classList.add('opacity-0', 'scale-95')

                setTimeout(( ) => this.user_menu_dropdown = false, 75)

            }

            else {

                this.user_menu_dropdown = true
                const element = document.getElementById('user_menu_dropdown')

                element.classList.add('transition', 'ease-out', 'duration-100', 'transform', 'opacity-0', 'scale-95')

                setTimeout(( ) => {

                    element.classList.remove('opacity-0', 'scale-95')
                    element.classList.add('transform', 'opacity-100', 'scale-100')

                }, 100)

            }

        },

        modal_open( component ) {

            if( component === 'signin' )
                this.signin_modal = true
            else if( component === 'signup' )
                this.signup_modal = true

            document.body.style.overflowY = 'hidden'

        },

        modal_close( component ) {

            let element_id = null

            if( component === 'signin' )
                element_id = 'signin_modal'

            else if( component === 'signup' )
                element_id = 'signup_modal'

            const element = document.getElementById(element_id)
            element.classList.remove('animate__fadeIn')
            element.classList.add('animate__fadeOut')

            setTimeout(( ) => {
                
                if( component === 'signin' )
                    this.signin_modal = false

                else if( component === 'signup' )
                    this.signup_modal = false

                document.body.style.overflowY = ''
                
            }, 500)

        },

        logout( ) {

            this.$store.dispatch('token', null)
            this.$store.dispatch('user', null)
            this.$store.dispatch('admin', false)
            
            this.$router.push('/')
            localStorage.removeItem('token')

        }
        
    }
}
</script>