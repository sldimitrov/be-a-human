<script setup lang="ts">
import volunteerPortrait from "@/assets/aside-portait.png";
import {RouterLink} from "vue-router";
import {useSidebarStore} from "@/stores/store";

const store = useSidebarStore()

function handleClickOutside() {
  if (store.isSidebarVisible) {
    store.toggleSidebarVisible()
  }
}
</script>

<template>
  <aside
    v-click-outside="handleClickOutside"
    :class="`${store.isSidebarVisible ? 'visible' : ''}`"
  >
    <div class="aside-img">
      <img :src="volunteerPortrait" class="portrait" alt="Volunteer portrait" />
    </div>
    <div class="aside-text">

      <div class="aside-links">
        <RouterLink @click="store.toggleSidebarVisible" class="home aside-link" to="/">Начало</RouterLink>
        <RouterLink @click="store.toggleSidebarVisible" class="aside-link" to="/cause">Каузата</RouterLink>
        <RouterLink @click="store.toggleSidebarVisible" class="aside-link" to="/events">Събития</RouterLink>
        <RouterLink @click="store.toggleSidebarVisible" class="aside-link" to="/joinus">Включи се</RouterLink>
        <RouterLink @click="store.toggleSidebarVisible" class="aside-link" to="/contacts">Контакти</RouterLink>
      </div>
      <div class="aside-exit">
        <button @click="store.toggleSidebarVisible"><i class="pi pi-times" style="font-size: 1.5rem"/></button>
      </div>
    </div>
  </aside>
</template>

<style scoped>
button {
  background: none;
  border: none;
  color: black;
  padding: 10px;
  cursor: pointer;
}

/* SIDEBAR CSS */
aside {
  display: flex;
  position: fixed;
  height: 100%;
  width: 400px;
  justify-content: start;
  align-items: start;
  background: white;
  z-index: 99;
  top: 0;
  right: -420px;
  border-radius: 25px;
  padding: 15px;
  transition: 0.3s ease-out;
  overflow: hidden;
  visibility: hidden;
}

.aside-img {
  display: flex;
  height: 100%;
}

.aside-text {
  display: flex;
  height: 100%;
}

.aside-exit {
  width: 2rem;
}

.visible {
  right: 0;
  visibility: visible;
}

.portrait {
  width: 100%; /* Full width of the container */
  border-radius: 25px;
  aspect-ratio: 1 / 1; /* Maintains a square aspect ratio */
  object-fit: cover; /* Ensures the image fills the container without distortion */
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

.aside-link:hover {
  color: #f4b03e;
}

.home {
  color: #f4b03e;
}
</style>
