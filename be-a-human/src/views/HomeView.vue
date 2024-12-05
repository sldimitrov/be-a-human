<script setup lang="ts">
import Carousel from 'primevue/carousel';

const products = [
  {
    image: "https://budichovek.com/wp-content/uploads/2024/10/fb-cover-my-fav-1536x864.png",
    name: "Инициативата",
    price: "датира от 1990"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Aytos_from_Hisarya.jpg/1200px-Aytos_from_Hisarya.jpg",
    name: " Айтос- градът ни",
    price: "Още текст"
  },
  {
    image: "https://static.bnr.bg/gallery/e0/e016e71bf6f6338d9652159e69d0845e.jpeg",
    name: "Центъра",
    price: "се вижда"
  }
];

const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1,
  },
];
</script>

<template>
  <Carousel
    :value="products"
    :numVisible="1"
    :numScroll="1"
    :responsiveOptions="responsiveOptions"
    circular
    :autoplayInterval="3000"
    class="custom-carousel"
  >
    <template #item="slotProps">
      <div class="poster">
        <div class="poster-text">
          <h2 class="mb-4 font-medium">{{ slotProps.data.name }}</h2>
          <h2 class="font-semibold text-xl">{{ slotProps.data.price }}</h2>
        </div>
        <div class="carousel-item-container poster-image">
          <img :src="slotProps.data.image" :alt="slotProps.data.name" class="carousel-image" />
        </div>
      </div>


    </template>
  </Carousel>
</template>

<style scoped>
.custom-carousel {
  min-height: 450px;
}

.carousel-item-container {
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100%;
}

.carousel-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.poster {
  position: relative;
  display: flex;
  justify-content: center;
}

.poster-text {
  font-family: "Arial Rounded MT Bold",serif;
  font-size: 1.5rem;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
