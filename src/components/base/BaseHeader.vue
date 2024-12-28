<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
<div class="header">
  <h1>Каузата</h1>
</div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  width: 100%;
  background: #61CE70;
}
</style>
