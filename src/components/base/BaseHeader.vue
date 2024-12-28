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
  align-items: center;
  width: 100%;
  height: 150px;
  background: #c6e1b6;
  margin-bottom: 15px;
}

h1 {
  text-transform: uppercase;
  font-family: "Arial Rounded MT Bold", sans-serif;
}
</style>
