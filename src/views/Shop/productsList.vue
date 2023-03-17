<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <div class="text-center">
        <h1
          class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"
        >
          From the blog
        </h1>

        <p class="max-w-lg mx-auto mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          veritatis sint autem nesciunt, laudantium quia tempore delect
        </p>
      </div>

      <ul class="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="product in products"
          :key="product.id"
          class="flex flex-col items-center hover:scale-105 transition-all justify-center w-full max-w-sm mx-auto"
        >
          <div
            class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            :style="{
              'background-image': ' url(' + product.thumbnail + ')',
            }"
          ></div>

          <div
            class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800"
          >
            <h3
              class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
            >
              {{ product.title }}
            </h3>

            <div
              class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700"
            >
              <span class="font-bold text-gray-800 dark:text-gray-200"
                >${{ product.price }}</span
              >

              <router-link
                :to="'/shop/' + product.id"
                class="px-2 py-1 text-xs font-semibold text-white transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
              >
                View Product
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, computed, onMounted, ComputedRef } from "vue";
import { ProductProps } from "@src/store/types";
export default defineComponent({
  name: "ShopPage",
  setup() {
    const store = useStore();

    onMounted(async () => {
      if (store.state.products.fetchedProducts.products.length === 0) {
        await store.dispatch("products/fetchProducts");
      }
    });

    const products: ComputedRef<ProductProps[]> = computed(
      () => store.state.products.fetchedProducts.products
    );

    return {
      products,
    };
  },
});
</script>
