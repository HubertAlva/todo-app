<script setup>
import { Head } from "@inertiajs/vue3";

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <Head title="Todo app" />
    <main class="bg-red-400 dark:bg-blue-500">
        <button class="px-2 py-1 bg-white rounded-md" @click="toggleDark()">
            Is Dark: {{ isDark }}
        </button>

        <h1 class="text-3xl text-primary">Todo app</h1>

        <h2 class="text-3xl text-dark-100">Todo app</h2>
        <h2 class="text-3xl text-dark-200">Todo app</h2>
        <h2 class="text-3xl text-dark-300">Todo app</h2>
        <h2 class="text-3xl text-dark-400">Todo app</h2>
        <h2 class="text-3xl text-dark-500">Todo app</h2>
        <h2 class="text-3xl text-dark-600">Todo app</h2>
        <h2 class="text-3xl text-dark-700">Todo app</h2>

        <h2 class="text-3xl text-light-100">Todo app</h2>
        <h2 class="text-3xl text-light-200">Todo app</h2>
        <h2 class="text-3xl text-light-300">Todo app</h2>
        <h2 class="text-3xl text-light-400">Todo app</h2>
        <h2 class="text-3xl text-light-500">Todo app</h2>

        <div class="rounded-full size-7 bg-check-gradient"></div>
    </main>
</template>
