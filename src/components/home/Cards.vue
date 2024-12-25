<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue'
import { cardsData } from '@/data/data-json'
</script>

<template>
  <section>
    <header class="cards-header">
      <h3>
        <hr class="line" />
        &nbsp;Изживей живота си с кауза
      </h3>
      <h2>
        НАШАТА МИСИЯ Е ДА ПОМАГАМЕ!<span class="bold">
          ЕТО НАКРАТКО СТЪПКИТЕ ЗА ВСЯКА ЕДНА НАША КАМПАНИЯ!</span
        >
      </h2>
    </header>
    <div class="cards">
      <BaseCard
        v-for="card in cardsData"
        class="card-body"
        :title="card.title"
        :content="card.content"
        :icon="card.icon"
      />
    </div>
  </section>
</template>

<style scoped>
section {
  background: #fef7ec;
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-body {
  width: 270px;
  padding: 10px;
  margin: 10px;
}

.cards-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  padding-left: 20px;
}

.cards {
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
}

h2,
h3 {
  text-align: center;
  color: black;
  margin: 0;
}

h2 {
  font-size: 3rem;
  padding-top: 10px;
}

h3 {
  display: flex;
  align-items: center;
  font-size: 2rem;
}

.bold {
  color: #f4b03e;
}

.line {
  width: 30px;
  height: 4px;
  border: none;
  background-color: #f4b03e;
  margin-top: 5px;
  margin-right: 15px;
}

@media (max-width: 1200px) {
  section {
    height: 1850px;
    margin-top: 15rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .cards {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 1024px) {
  section {
    margin-top: 18rem;
  }
}

@media (max-width: 900px) {
  section {
    margin-top: 25rem;
  }
}

@media (max-width: 900px) {
  section {
    margin-top: 35rem;
  }
}

@media (max-width: 600px) {
  section {
    margin-top: 40rem;
  }
}
</style>
