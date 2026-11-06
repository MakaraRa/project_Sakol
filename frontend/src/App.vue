
<script setup lang="ts">
import { useRoute } from 'vue-router'
import AppNavbar from './components/layout/AppNavbar.vue'

const route = useRoute()
</script>

<template>
  <div class="app">
    <AppNavbar v-if="route.name !== 'find-my-major'" />

    <RouterView />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Inter, Arial, sans-serif;
  background: #f8fafc;
  color: #0f172a;
}

button,
input {
  font: inherit;
}
</style>
