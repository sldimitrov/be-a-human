<script setup lang="ts">
import Galleria from 'primevue/galleria';
import firstImg from '@/assets/footer/1.jpg'
import secondImg from '@/assets/footer/2.jpg'
import thirdImg from '@/assets/footer/3.jpg'
import { ref } from 'vue';

const activeIndex = ref(0);
const images = ref([
  {
    itemImageSrc: firstImg,
    thumbnailImageSrc: firstImg,
    alt: 'Image 1',
  },
  {
    itemImageSrc: secondImg,
    thumbnailImageSrc: secondImg,
    alt: 'Image 2',
  },
  {
    itemImageSrc: thirdImg,
    thumbnailImageSrc: thirdImg,
    alt: 'Image 3',
  },
]);

const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 0,
  },
  {
    breakpoint: '768px',
    numVisible: 1,
  },
  {
    breakpoint: '560px',
    numVisible: 2,
  },
]);
</script>

<template>
  <Galleria
    class="galleria"
    v-model:activeIndex="activeIndex"
    :value="images"
    :responsiveOptions="responsiveOptions"
    :numVisible="0"
    containerStyle="max-width: 650px"
    :circular="true"
    :showItemNavigators="true"
    :showThumbnails="false"
  >
    <template #item="slotProps">
      <img
        :src="slotProps.item.itemImageSrc"
        :alt="slotProps.item.alt"
        class="galleria-image"
      />
    </template>
  </Galleria>
</template>

<style scoped>
.galleria-image {
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  max-height: 700px; /* Limit max height */
  object-fit: contain; /* Ensure the image is contained within the specified dimensions */
}
</style>
