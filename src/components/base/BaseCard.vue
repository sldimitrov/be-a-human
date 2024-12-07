<script setup lang="ts">
import Card from "primevue/card";

const props = defineProps<{
  icon: string
  title: string
  content: string
}>()
</script>

<template>
  <Card class="card-body" style="width: 25rem;">
    <template #header>
      <div class="card-header">
        <i :class="props.icon" style="font-size: 6rem"></i>
      </div>
    </template>
    <template class="card-title" #title>
      <p class="card-title">
        {{props.title}}
      </p>
    </template>
    <template class="card-content" #content>
      <p class="card-content">
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

.card-body {
  background: #FEF7EC;
  border: 2px solid #f4b03e;
}

.card-header {
  display: flex;
  justify-content: start;
  padding-left: 20px;
  color: #f4b03e;
}

.card-content {
  color: black;
  font-size: 19px;
}

.card-body:hover {
  background: #f4b03e;
}

.card-body:hover .card-title {
  color: white;
}

.card-body:hover .card-content {
  color: white;
}

.card-body:hover .card-header {
  color: white;
}

.card-title {
  font-size: 1.5rem;
  margin: 0;
  font-weight: bold;
  color: #f4b03e;
}

</style>
