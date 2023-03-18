<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <div class="lg:-mx-6 lg:flex lg:items-center">
        <img
          class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
          :src="`${product?.thumbnail.toString()}`"
          :alt="product?.title"
        />

        <div class="mt-8 lg:w-1/2 text-start lg:px-6 lg:mt-0">
          <p class="text-5xl font-semibold text-purple-500">“</p>

          <h1
            class="text-2xl font-semibold dark:text-white text-purple-600 lg:text-3xl lg:w-96"
          >
            <strong>Name</strong>: {{ product?.title }}
          </h1>

          <p class="max-w-lg mt-6 text-gray-700 dark:text-gray-400">
            <strong>Brand</strong>: {{ product?.brand }}
          </p>

          <p class="max-w-lg mt-6 text-gray-700 dark:text-gray-400">
            <strong>Price</strong>: ${{ product?.price }}.00
          </p>
          <p class="max-w-lg mt-6 text-gray-700 dark:text-gray-400">
            <strong>Discount Rating</strong>: {{ product?.rating }}%
          </p>
          <p class="max-w-lg mt-6 text-gray-700 dark:text-gray-400">
            <strong>Stock</strong>: {{ product?.rating }}
          </p>
          <p class="max-w-lg mt-6 text-gray-700 dark:text-gray-400">
            <strong>Rating</strong>: {{ product?.rating }}⭐
          </p>
          <p class="max-w-lg mt-6 text-gray-700 dark:text-gray-400">
            <strong>Category</strong>: {{ product?.category }}
          </p>
          <h3 class="mt-6 text-lg text-gray-600 font-medium">
            <strong>Description</strong>: {{ product?.description }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, computed, ComputedRef, onMounted } from "vue";
import { useStore } from "vuex";
import { ProductProps } from "@src/store/types";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "ProductPage",
  setup() {
    const store = useStore();
    const route = useRoute();
    const product: ComputedRef<ProductProps | null> = computed(() => {
      return store.state.products.selectedProduct.product;
    });
    onMounted(async () => {
      if (store.state.products.selectedProduct.product === null) {
        await store.dispatch("products/fetchProduct", route.params.productId);
      }
    });

    return { product };
  },
});
</script>
