<script setup lang="ts">
import {RouterLink} from "vue-router";
import CustomGallery from "@/components/base/CustomGallery.vue";
</script>

<template>
<footer>
  <section class="left-side">
    <h2>
      Заедно за по-светло утре:<br/>
      <span class="important">Бъди човек - община Айтос</span>
    </h2>
    <div class="information">
      <nav class="links">
        <RouterLink class="link" to="/">Начало</RouterLink>
        <RouterLink class="link" to="/cause">Каузата</RouterLink>
        <RouterLink class="link" to="/events">Събития</RouterLink>
        <RouterLink class="link" to="/joinus">Включи се</RouterLink>
        <RouterLink class="link" to="/contacts">Контакти</RouterLink>
      </nav>
      <div class="mission">
        <p>
          Вярваме, че заедно можем да направим разлика в живота на възрастните хора,
          които имат нужда от нашата подкрепа и грижа. Ако желаете да се присъедините към нашата кауза и да помогнете, не се колебайте да се свържете с нас или посетете нашата страница 'Как да помогнем' за повече информация.
        </p><br/>
        <p class="thin">
          Вашата помощ може да промени живота на някого към по-добро. Благодарим Ви за подкрепата!
        </p><br/>
        <div class="contact">
          <i class="pi pi-envelope" style="color: #b52301; font-size: 1.3rem"></i><span>budichovekaytos@gmail.com</span>
        </div>
        <div class="contact">
          <i class="pi pi-address-book" style="color: #b52301; font-size: 1.3rem"></i><span>(+359) 0894259104</span>
        </div>
      </div>
    </div>
  </section>
  <section class="overview">
    <h3>
      Oт сърце към сърце
    </h3>
    <CustomGallery />
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

i {
  display: flex;
  align-items: center;
}

span {
  font-family: Bahnschrift, serif;
}

.left-side {
  width: 50%;
}

.overview {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 10px;
  justify-content: start;
  width: 50%;
}

h2 {
  font-size: 40px;
}

h3 {
  font-size: 25px;
}

p {
  color: #dad8d8;
  font-size: 18px;
}

.information {
  display: flex;
  justify-content: start;
  margin-top: 20px;
}


.mission {
  width: 40%;
}

.links {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.link {
  width: 180px;
  color: white;
  font-size: 22px;
  list-style: none;
  text-decoration: underline;
  margin-bottom: 50px;
  transition: color 0.2s ease, transform 0.2s ease;
}

.link:hover {
  color: #ef3838;
  transform: scale(0.9);
}

.important {
  color: #f4b03e;
}

.contact {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 20px;
}

@media (max-width: 1024px) {
  footer {
    flex-direction: column;
  }

  .left-side {
    width: 100%;
  }

  .mission {
    width: 100%;
  }
}
</style>
