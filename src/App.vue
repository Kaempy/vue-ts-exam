<template>
  <NavBar />
  <main class="component-root">
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <FooterView />
</template>

<script setup lang="ts">
import NavBar from "@components/layout/NavBar.vue";
import FooterView from "@components/layout/Footer.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.component-root {
  display: flex;
  flex-direction: column;
  min-height: 80vh;
}

/* route transition */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active,
.route-leave-active {
  transform: rotateX(-100px);
}
</style>
