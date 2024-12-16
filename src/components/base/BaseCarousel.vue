<script setup lang="ts">
import Carousel from 'primevue/carousel'
import teamImg from '@/assets/carousel/team.jpg'
import teamTwoImg from '@/assets/carousel/team2.jpg'
import dancingImg from '@/assets/carousel/tradition.jpg'
import karateImg from '@/assets/carousel/karate.jpg'

const products = [
  {
    image: teamImg,
    title: 'Мисия и дейност',
    description: '- За нас',
  },
  {
    image: dancingImg,
    title: 'Дарения и парньорство',
    description: '- Как да помогнете',
  },
  {
    image: teamTwoImg,
    title: 'Стани доброволец',
    description: '- Как да помогнете',
  },
  {
    image: karateImg,
    title: 'Предстоящи събития',
    description: '- Събития',
  },
]

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
]
</script>

<template>
  <Carousel
    :value="products"
    :numVisible="1"
    :numScroll="1"
    :responsiveOptions="responsiveOptions"
    circular
    :autoplayInterval="4000"
    class="custom-carousel"
  >
    <template #item="slotProps">
      <div class="poster">
        <div class="poster-text">
          <h2 class="description">{{ slotProps.data.description }}</h2>
          <h2 class="title">{{ slotProps.data.title }}</h2>
        </div>
        <div class="carousel-item-container poster-image">
          <img :src="slotProps.data.image" :alt="slotProps.data.title" class="carousel-image" />
        </div>
      </div>
    </template>
  </Carousel>
</template>

<style scoped>
.custom-carousel {
  min-height: 100vh; /* Full viewport height for the carousel */
}

.carousel-item-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.poster {
  position: relative;
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 100vh;
}

.poster-text {
  color: #f4b03e;
  text-transform: uppercase;
  position: absolute;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 5rem;
}

h2 {
  margin: 0;
}

.description {
  font-size: 2rem;
}

.title {
  font-size: 4rem;
  font-weight: bold;
  font-family: Bahnschrift, sans-serif;
}
</style>
