<template>
  <header class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-16 mx-auto">
      <div class="items-center lg:flex">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1
              class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"
            >
              Best place to choose <br />
              your <span class="text-purple-500">online products.</span>
            </h1>

            <p class="mt-3 text-gray-600 dark:text-gray-400">
              With online store like our your shopping experience is
              personalized to your styleand sense of fashion.
              <br />
              We got you covered all the way. We're here to meet your need for
              whatever intests you in buying.
            </p>
            <router-link to="shop">
              <button
                class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-purple-600 rounded-lg lg:w-auto hover:bg-purple-500 focus:outline-none focus:bg-purple-500"
              >
                Shop Now
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
        >
          <img
            class="w-full h-full lg:max-w-3xl"
            :src="require('public/shopping.svg')"
            alt="shopping"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
  setup() {
    const isOpen = ref<boolean>(false);

    return { isOpen };
  },
});
</script>
