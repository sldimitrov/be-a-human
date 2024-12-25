<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/layout/Header.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Sidebar />
  <Footer />
</template>

<style scoped></style>
