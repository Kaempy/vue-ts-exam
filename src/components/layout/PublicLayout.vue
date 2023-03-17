<template>
  <NavBar />
  <router-view />
  <FooterView />
</template>
<script setup lang="ts">
import NavBar from "./NavBar.vue";
import FooterView from "./Footer.vue";
</script>
