<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/layout/Header.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Sidebar />
</template>

<style scoped>
</style>
