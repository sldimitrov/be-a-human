<script setup lang="ts">
import BaseCard from "@/components/base/BaseCard.vue";
import baseImg from '@/assets/logo-badi-chovек.jpg'
</script>

<template>
  <section>
    <BaseCard class="card-body" title="Бъди човек" content="Определяне на дати за кампанията, стартиране на дарителската акция, в която всеки който желае може да подпомогне кампанията с хранителни продукти или парични средства. Набиране на нужния брой доброволци, които да разнесат пакетите на нуждаещите се хора. Определяне и на списъка с нуждаещи се в координация с кметовете на населените места." :img="baseImg"  />
    <BaseCard class="card-body" title="Бъди човек" content="Определяне на дати за кампанията, стартиране на дарителската акция, в която всеки който желае може да подпомогне кампанията с хранителни продукти или парични средства. Набиране на нужния брой доброволци, които да разнесат пакетите на нуждаещите се хора. Определяне и на списъка с нуждаещи се в координация с кметовете на населените места." :img="baseImg"  />
    <BaseCard class="card-body" title="Бъди човек" content="Определяне на дати за кампанията, стартиране на дарителската акция, в която всеки който желае може да подпомогне кампанията с хранителни продукти или парични средства. Набиране на нужния брой доброволци, които да разнесат пакетите на нуждаещите се хора. Определяне и на списъка с нуждаещи се в координация с кметовете на населените места." :img="baseImg"  />
  </section>
</template>

<style scoped>
section {
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: start;
}

.card-body {
  width: 270px;
  padding: 10px;
  margin: 10px;
}


@media (max-width: 1200px) {
  section {
    margin-top: 50rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 1024px) {
  section {
    margin-top: 53rem;
  }
}

@media (max-width: 900px) {
  section {
    margin-top: 70rem;
  }
}
</style>
