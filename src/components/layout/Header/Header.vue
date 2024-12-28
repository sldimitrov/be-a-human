<script setup lang="ts">
import HeaderLine from "@/components/layout/Header/HeaderLine.vue";
import HeaderBody from "@/components/layout/Header/HeaderBody.vue";
</script>

<template>
  <header>
    <HeaderLine/>
    <HeaderBody/>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
}
</style>
