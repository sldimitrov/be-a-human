<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
<footer>
  <section>
    <h2>
      Заедно за по-светло утре:<br/>
      <span class="important">Бъди човек - община Айтос</span>
    </h2>
    <nav class="links">
      <RouterLink class="link" to="/">Начало</RouterLink>
      <RouterLink class="link" to="/cause">Каузата</RouterLink>
      <RouterLink class="link" to="/events">Събития</RouterLink>
      <RouterLink class="link" to="/joinus">Включи се</RouterLink>
      <RouterLink class="link" to="/contacts">Контакти</RouterLink>
    </nav>
  </section>
  <section>
    <h3>
      Oт сърце към сърце
    </h3>
  </section>
</footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  height: 50%;
  padding: 20px;
  background-color: #151515;
}

.links {
  display: flex;
  flex-direction: column;
}

.link {
  color: white;
  font-size: 22px;
  list-style: none;
  text-decoration: underline;
  margin-bottom: 30px
}

.link:hover {
  color: red
}

.important {
  color: #f4b03e;
}
</style>
