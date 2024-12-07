<script setup lang="ts">
import {RouterLink} from "vue-router";
import volunteerPortrait from '@/assets/aside-portait.png'
import {ref} from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  console.log(isMenuOpen.value);
}
</script>

<template>
  <div class="app">
    <header>
      <RouterLink to="/">
        <img alt="Vue logo" class="logo" src="../../../public/favicon.ico"  />
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
        <button @click="toggleMenu">Меню ☰</button>
      </div>
    </header>
    <aside>
      <div class="aside-img">
        <img :src="volunteerPortrait" class="portrait" alt="Volunteer portrait" />
      </div>
      <div class="aside-links">

        <RouterLink class="home aside-link" to="/">Начало</RouterLink>
        <RouterLink class="aside-link" to="/cause">Каузата</RouterLink>
        <RouterLink class="aside-link" to="/events">Събития</RouterLink>
        <RouterLink class="aside-link" to="/joinus">Включи се</RouterLink>
        <RouterLink class="aside-link" to="/contacts">Контакти</RouterLink>
      </div>

    </aside>
  </div>
</template>

<style scoped>
.app {
  display: flex;
}

header {
  display: flex;
  width: 100%;
  height: 150px;
  background: #fff;
}


/* SIDEBAR CSS */
aside {
  display: flex;
  position: absolute;
  height: 100%;
  width: 60%;
  justify-content: start;
  align-items: start;
  background: white;
  z-index: 99;
  right: 0;
  border-radius: 25px;
  padding: 20px;
}

.aside-img {
  display: flex;
}

.portrait {
  width: 100%;
  border-radius: 25px
}

.aside-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  padding: 20px;
}

.link, .aside-link {
  color: black;
  font-size: 22px;
  list-style: none;
  text-decoration: none;
}

.aside-link {
  margin-bottom: 40px;
  font-size: 25px;
  font-weight: bold;
}

.row {
  width: 100%;
  margin: 0;
}

.aside-link:hover {
  color: #f4b03e;
}

.home {
  color: #f4b03e;
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
