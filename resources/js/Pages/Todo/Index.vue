<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, router } from '@inertiajs/vue3';
import { reactive, ref } from "vue";

const todo = reactive({
    title: null,
    note: null
});

const todoNote = ref(null)

defineProps(['todos'])

const status = (status) => {
    if (status === 'Canceled') {
        return 'bg-red-100 text-red-700'
    }

    if (status === 'Pending') {
        return 'bg-blue-100 text-blue-700'
    }

    if (status === 'Inprogress') {
        return 'bg-yellow-100 text-yellow-700'
    }

    if (status === 'Done') {
        return 'bg-green-100 text-green -700'
    }
}

const submit = () => {
    router.post('/todos', todo)
    todo.title = null
}

const update = (item) => {
    console.log(todo.note);
}

</script>

<template>
    <Head title="Todo list" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Todo list</h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">

                <div class="flow-root mt-8">
                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div class="relative">
                                <div class="p-5 bg-white rounded">
                                    <div>
                                        <div class="text-center">
                                            <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor"
                                                viewBox="0 0 48 48" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                            <h2 class="mt-2 text-base font-semibold leading-6 text-gray-900">Todos</h2>
                                        </div>
                                        <form class="mt-6 sm:flex sm:items-center" @submit.prevent="submit">
                                            <label for="title" class="sr-only">Title</label>
                                            <div class="grid grid-cols-1 sm:flex-auto">
                                                <input v-model="todo.title" type="text" name="title" id="title"
                                                    class="peer relative col-start-1 row-start-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Enter todo title">
                                                <div class="col-start-1 col-end-3 row-start-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 peer-focus:ring-2 peer-focus:ring-indigo-600"
                                                    aria-hidden="true"></div>
                                                <div class="flex items-center col-start-2 row-start-1">
                                                    <span class="flex-none w-px h-4 bg-gray-200" aria-hidden="true"></span>
                                                    <label for="role" class="sr-only">Role</label>
                                                    <select id="role" name="role"
                                                        class="rounded-md border-0 bg-transparent py-1.5 pl-4 pr-7 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                        <option>Can edit</option>
                                                        <option>Can view</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="mt-3 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                                                <button type="submit"
                                                    class="block w-full px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
                                                    todo</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="mt-10">
                                        <h3 class="text-sm font-medium text-gray-500">Recommended team members</h3>
                                        <ul role="list" class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
                                            <li v-for="(todo, index) in todos" :key="index">
                                                <button type="button"
                                                    class="flex items-center justify-between w-full p-2 space-x-3 text-left border border-gray-300 rounded shadow-sm group hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                    <span class="flex items-center flex-1 min-w-0 space-x-3">
                                                        <span class="flex-1 block min-w-0">
                                                            <span contenteditable
                                                                class="block text-sm font-medium text-gray-900 truncate">{{
                                                                    todo.title }}</span>
                                                            <span
                                                                class="block p-1 my-2 text-sm font-medium text-gray-900 border rounded "> {{ todo.note }} </span>
                                                            <span :class="status(todo.status)"
                                                                class="block px-3 text-sm font-medium truncate rounded">{{
                                                                    todo.status }}</span>
                                                        </span>
                                                    </span>
                                                    <span
                                                        class="inline-flex items-center justify-center flex-shrink-0 w-10 h-10">
                                                        <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                                                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path
                                                                d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
