<template>
    <div class="bg-gray-50 h-full flex flex-col justify-between">

        <div>
            <div class="h-16 border-b border-gray-200 flex items-center justify-center">
                <span class="text-lg font-bold text-gray-500">Admin Panel</span>
            </div>

            <div class="text-sm px-3 my-2">
                <div>
                <router-link
                    to="/admin" 
                    class="flex justify-start items-center cursor-pointer text-gray-700 hover:text-indigo-400 hover:bg-indigo-100 rounded-md py-2 my-1 transition"
                    :class="this.$router.currentRoute.value.fullPath === '/admin' ? 'text-indigo-400 bg-indigo-100' : null"
                >
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    <div class="flex-grow font-medium px-2">Home</div>
                </router-link>
                <router-link
                    to="/admin/documents"
                    class="flex justify-start items-center cursor-pointer text-gray-700 hover:text-indigo-400 hover:bg-indigo-100 rounded-md py-2 my-1 transition"
                    :class="this.$router.currentRoute.value.fullPath === '/admin/documents' ? 'text-indigo-400 bg-indigo-100' : null"
                >
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    <div class="flex-grow font-medium px-2">Documents</div>
                </router-link>
                <router-link
                    to="/admin/users" 
                    class="flex justify-start items-center cursor-pointer text-gray-700 hover:text-indigo-400 hover:bg-indigo-100 rounded-md py-2 my-1 transition"
                    :class="this.$router.currentRoute.value.fullPath === '/admin/users' ? 'text-indigo-400 bg-indigo-100' : null"
                >
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    <div class="flex-grow font-medium px-2">Users</div>
                </router-link>
                </div>
            </div>
        </div>

        <div class="text-sm px-3 my-2">
            <router-link
                to="/admin/add/document" 
                class="flex justify-start items-center cursor-pointer text-gray-700 hover:text-indigo-400 hover:bg-indigo-100 rounded-md py-2 my-1 transition"
            >
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <div class="flex-grow font-medium px-2">Add document</div>
            </router-link>
        </div>

    </div>
</template>