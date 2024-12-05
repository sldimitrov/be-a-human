<script setup lang="ts">
import 'primeicons/primeicons.css'
</script>

<template>
  <div class="gallery-wrapper">
    <section>
      <img src="@/assets/beAhuman.png" alt="Vue logo"> />
    </section>
    <section class="gallery-text">
      <h3>Изживей живота си с кауза</h3>
      <h2 class><hr/>ТВОЯТА ПОДКРЕПА <span class="severity">Е НАИСТИНА ЗНАЧИМА.</span></h2>
      <p>
        Бъди Човек е благотворителна инициатива, с която целим да внесем надежда на самотните възрастни хора и многодентни семейства в община Айтос,
        дарявайки им не само продукти от първа необходимост, но и блага дума и топла прегръдка.
        Ние вярваме, че доброто все още съществува и че то е заразно!
        Вярваме, че заедно можем да направим разлика в живота на всички нуждаещи се  възрастни и болни хора, които имат нужда от нашата подкрепа и грижа.
        Ако желаете да се присъедините към нашата кауза и да помогнете, не се колебайте да се свържете с нас или посетете нашата страница ‘Как да помогнем’
        за повече информация. Вашата помощ може да промени живота на някого към по-добро. Благодарим Ви за подкрепата!
      </p>
    </section>
  </div>


</template>

<style scoped>
.gallery-wrapper {
  display: flex;
  justify-content: center;
  margin: 3rem;
}

.gallery-text {
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-direction: column;
  height: 350px;
  padding-left: 50px;
}

hr {
  border: none; /* Remove default border */
  height: 2px; /* Set the height of the hr element */
  background-color: gold; /* Set the desired color */
  margin-bottom: 20px;
}

.severity {
  color: gold;
}

h2, h3 {
  color: black;
  margin: 0;
}

h3 {
  font-size: 2rem;
}

h2 {
  font-size: 3.5rem;
  font-weight: bold;
  font-family: "Berlin Sans FB";
}

p {
  font-size: 18px;
  font-family: Arial;
}
</style>
