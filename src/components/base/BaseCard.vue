<script setup lang="ts">
import Card from "primevue/card";

const props = defineProps<{
  img: string
  title: string
  content: string
}>()
</script>

<template>
  <Card style="width: 25rem;">
    <template #header>
      <div class="card-header">
        <img alt="user header" :src="props.img" class="header-image" />
      </div>
    </template>
    <template #title>{{props.title}}</template>
    <template #subtitle></template>
    <template #content>
      <p class="m-0">
        {{props.content}}
      </p>
    </template>

  </Card>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: center;
}

p {
  color: white
}
</style>
