<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import 'primeicons/primeicons.css'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo-badi-chovек.jpg" />

    <div class="wrapper">
      <nav>
        <RouterLink class="link" to="/">Начало</RouterLink>
        <RouterLink class="link" to="/cause">Каузата</RouterLink>
        <RouterLink class="link" to="/events">Събития</RouterLink>
        <RouterLink class="link" to="/joinus">Включи се</RouterLink>
        <RouterLink class="link" to="/contacts">Контакти</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  width: 100%;
  height: 150px;
  background: #fff;
}

img {
  max-height: 100%;
}

.wrapper {
  width: 100%;
}

nav {
  display: flex;
  margin-left: 8rem;
  width: 80%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}

.link {
  color: black;
  font-size: 22px;
  list-style: none;
  text-decoration: none;
}

section {
  display: flex;
  justify-content: center;
  margin-top: 5rem;
}
</style>
