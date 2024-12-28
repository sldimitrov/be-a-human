<script setup lang="ts">
import {useSidebarStore} from "@/stores/store";

const store = useSidebarStore()
</script>

<template>
  <div class="header">
    <RouterLink to="/">
      <img alt="Vue logo" class="logo" src="../../../../public/favicon.ico" />
    </RouterLink>
    <div class="wrapper">
      <nav>
        <RouterLink class="link" to="/">Начало</RouterLink>
        <RouterLink class="link" to="/cause">Каузата</RouterLink>
        <RouterLink class="link" to="/events">Събития</RouterLink>
        <RouterLink class="link" to="/joinus">Включи се</RouterLink>
        <RouterLink class="link" to="/contacts">Контакти</RouterLink>
      </nav>
    </div>
    <div class="menu">
      <button @click="store.toggleSidebarVisible()">Меню ☰</button>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  width: 100%;
  height: 150px;
  background: #fff;
}

nav {
  display: flex;
  margin-left: 8rem;
  width: 80%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}

.menu {
  display: none;
  justify-content: end;
  align-items: center;
}

.link {
  color: black;
  font-size: 22px;
  list-style: none;
  text-decoration: none;
}

button {
  all: unset; /* Resets all styles to default */
  cursor: not-allowed; /* Shows a "not allowed" cursor */
  background: none; /* Removes the background */
  border: none; /* Removes the border */
  padding: 0; /* Removes padding */
  color: black; /* Inherit the text color */
  width: 120px;
  font-size: 2rem;
}

img {
  max-height: 100%;
}

.wrapper {
  width: 100%;
}

@media (max-width: 1000px) {
  header {
    display: flex;
  }

  .wrapper {
    display: none;
  }

  .menu {
    display: flex;
    width: 100%;
  }

  button {
    margin-right: 120px;
  }
}
</style>
