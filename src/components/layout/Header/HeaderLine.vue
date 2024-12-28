<script setup lang="ts">

</script>

<template>
  <div class="header-line">
    <div>
      <p>Сайт на Сдружение Бъди <i class="pi pi-heart-fill" style="color: red; font-size: 1rem"></i>  човек - община Айтос</p>
    </div>
    <div class="center">
      <p>Email: budichovekaytos@gmail.com</p>
      <p>Phone: (+359) 876533802</p>
    </div>
    <div class="social">
      <RouterLink class="link" to="/">FAQ's</RouterLink>
      <a href="https://www.facebook.com/profile.php?id=100069510759142" target="_blank" rel="noopener noreferrer">
        <i class="pi pi-facebook" style="color: deepskyblue; font-size: 1.3rem"></i>
      </a>
      <a href="https://www.instagram.com/budichovek_aytos/" target="_blank" rel="noopener noreferrer">
        <i class="pi pi-instagram" style="color: orangered; font-size: 1.3rem"></i>
      </a>
    </div>
  </div>
</template>

<style scoped>
.header-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #000;
  padding-left: 50px;
  padding-right: 50px;
}

.center {
  display: flex;
  justify-content: space-between;
  margin-right: 10rem;
  gap: 1rem;
}

.social {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.link {
  color: white;
  font-size: 22px;
  list-style: none;
  text-decoration: none;
}

.link {
  color: white;
  font-size: 22px;
  list-style: none;
  text-decoration: none;
}

p {
  color: white;
  font-size: 18px;
  font-family: Bahnschrift, sans-serif;
}
</style>
