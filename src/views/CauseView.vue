<script setup>
import WorkCharts from "@/components/cause/WorkCharts.vue";
import BaseHeader from "@/components/base/BaseHeader.vue";
</script>

<template>
  <div class="cause">
    <BaseHeader title="Каузата" />
    <WorkCharts/>
  </div>
</template>

<style scoped>
.cause {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 50px;
}
</style>
