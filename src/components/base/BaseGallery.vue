<script setup lang="ts">
import Galleria from 'primevue/galleria'
import carImg from '@/assets/gallery/car.jpg'
import grandmaImg from '@/assets/gallery/grandma.jpg'
import miroImg from '@/assets/gallery/miro.jpg'
import threeImg from '@/assets/gallery/three.jpg'

const images = [
  {
    itemImageSrc: carImg,
    thumbnailImageSrc: carImg,
    alt: 'Image 1 description',
  },
  {
    itemImageSrc: grandmaImg,
    thumbnailImageSrc: grandmaImg,
    alt: 'Image 2 description',
  },
  {
    itemImageSrc: miroImg,
    thumbnailImageSrc: miroImg,
    alt: 'Image 3 description',
  },
  {
    itemImageSrc: threeImg,
    thumbnailImageSrc: threeImg,
    alt: 'Image 3 description',
  },
]

const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '560px',
    numVisible: 0,
    numScroll: 1,
  },
]
</script>

<template>
  <div class="gallery-wrapper">
    <section class="gallery-content">
      <Galleria
        :value="images"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        class="container"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" class="gallery-img" />
        </template>
        <template #thumbnail="slotProps">
          <img
            :src="slotProps.item.thumbnailImageSrc"
            :alt="slotProps.item.alt"
            style="width: 100%; height: 100%; object-fit: cover"
          />
        </template>
      </Galleria>
    </section>
    <section class="gallery-text">
      <h3>
        <hr class="line" />
        &nbsp;Изживей живота си с кауза
      </h3>
      <h2 class>
        <hr />
        ТВОЯТА ПОДКРЕПА <span class="severity">Е НАИСТИНА ЗНАЧИМА.</span>
      </h2>
      <p>
        &nbsp;Бъди Човек е благотворителна инициатива, с която целим да внесем надежда на самотните
        възрастни хора и многодентни семейства в община Айтос, дарявайки им не само продукти от
        първа необходимост, но и блага дума и топла прегръдка.<br />
        Ние вярваме, че доброто все още съществува и че то е заразно!<br />
        Вярваме, че заедно можем да направим разлика в живота на всички нуждаещи се възрастни и
        болни хора, които имат нужда от нашата подкрепа и грижа. Ако желаете да се присъедините към
        нашата кауза и да помогнете, не се колебайте да се свържете с нас или посетете нашата
        страница ‘Как да помогнем’ за повече информация. Вашата помощ може да промени живота на
        някого към по-добро. Благодарим Ви за подкрепата!
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

.container {
  max-width: 400px;
  height: 800px;
}

.gallery-img {
  max-height: 600px;
}

.gallery-text {
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-direction: column;
  height: 350px;
  padding-left: 50px;
  margin-top: 1rem;
}

.severity {
  color: #f4b03e;
}

hr {
  border: none; /* Remove default border */
  height: 2px; /* Set the height of the hr element */
  background-color: #f4b03e; /* Set the desired color */
  margin-bottom: 20px;
}

h2,
h3 {
  color: black;
  margin: 0;
}

h3 {
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-style: italic;
}

h2 {
  font-size: 5rem;
  font-weight: bold;
  font-family: 'Berlin Sans FB', serif;
}

p {
  font-size: 22px;
  font-family: Arial, serif;
  line-height: 1.6;
  padding-right: 3rem;
}

.line {
  width: 30px;
  height: 7px;
}

/* 1200px - 0px */
@media (max-width: 1200px) {
  .gallery-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .gallery-content {
    max-width: 600px;
  }

  .gallery-img {
    max-height: 00px;
  }

  .gallery-text {
    align-items: center;
    margin-top: 1rem;
  }

  h2,
  p {
    text-align: center;
  }
}

/* 1400px - 900px */
@media (max-width: 1400px) {
  .gallery-img {
    max-height: 800px;
  }

  h3 {
    font-size: 2rem;
  }

  h2 {
    font-size: 4rem;
  }

  p {
    font-size: 19px;
  }
}

/* 1400px - 1950px */
@media (min-width: 1400px) {
  .gallery-img {
    max-height: 900px;
  }
}

/* 1950px - % */
@media (min-width: 1950px) {
  .gallery-img {
    max-height: 1050px;
  }
}
</style>
