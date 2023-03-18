<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12"
    >
      <div class="wf-ull text-left lg:w-1/2">
        <p class="text-sm font-medium text-purple-500 dark:text-purple-400">
          404 error
        </p>
        <h1
          class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"
        >
          Page not found
        </h1>
        <p class="mt-4 text-gray-500 dark:text-gray-400">
          Sorry, the page you are looking for doesn't exist.Here are some
          helpful links:
        </p>

        <router-link :to="{ name: 'HomePage' }">
          <button
            class="w-1/2 px-5 py-2 mt-4 text-sm tracking-wide text-white transition-colors duration-200 bg-purple-500 rounded-lg shrink-0 sm:w-auto hover:bg-purple-600 dark:hover:bg-purple-500 dark:bg-purple-600"
          >
            Take me home
          </button>
        </router-link>
      </div>

      <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
        <img
          class="w-full max-w-lg lg:mx-auto"
          :src="require('public/404-illustrations.svg')"
          alt="Page Not Found"
          title="Page Not Found"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageNotFound",
  components: {},
  setup() {
    return {};
  },
});
</script>
