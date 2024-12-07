<script setup lang="ts">
import Carousel from "primevue/carousel";

const products = [
  {
    image: "https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/440981091_747492197577799_8646004885718395676_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eHALgWHPkjAQ7kNvgEBnRUp&_nc_zt=23&_nc_ht=scontent-sof1-1.xx&_nc_gid=AqE54Us67WrqDPWZbExaFje&oh=00_AYDkwZxJjNcr0ppaHXweHUaEVi83bRY3s6W_UqTfHXZ_iQ&oe=67577239",
    title: "Мисия и дейност",
    description: "- За нас"
  },
  {
    image: "https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/440980516_747491537577865_6077673971683506232_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8GdsSbSgcY0Q7kNvgEHTN41&_nc_zt=23&_nc_ht=scontent-sof1-1.xx&_nc_gid=A9KQkH0IaXPxtH89FJupd7T&oh=00_AYA55bouhL88qtjabeV_mwYOPBHM9KsSPGnlbO165VDYag&oe=675793D7",
    title: "Дарения и парньорство",
    description: "- Как да помогнете"
  },
  {
    image: "https://scontent-sof1-2.xx.fbcdn.net/v/t39.30808-6/438895044_741896671470685_7240449433516507971_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NOfBScAVAYgQ7kNvgGVRj7z&_nc_zt=23&_nc_ht=scontent-sof1-2.xx&_nc_gid=A0y_bGpbcY_qHG9-tNzfTs-&oh=00_AYDb3c2EcUrIi1eyEwS0MDL_j0SVloH_SE9ot9bqc6ZdBQ&oe=675799A9",
    title: "Стани доброволец",
    description: "- Как да помогнете"
  },
  {
    image: "https://scontent-sof1-2.xx.fbcdn.net/v/t39.30808-6/440777441_747491637577855_7961571551442918387_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9NeWUQsp1OMQ7kNvgGWS4Rf&_nc_zt=23&_nc_ht=scontent-sof1-2.xx&_nc_gid=A6Roxr4t23I_zOsd9iijYAe&oh=00_AYBTR0lCg8426HGfxRxgZbeWEXHMUeUqGpi42CEpQmZhrA&oe=6757938B",
    title: "Предстоящи събития",
    description: "- Събития"
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
