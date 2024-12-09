<script setup lang="ts">
import Galleria from 'primevue/galleria'

const images = [
  {
    itemImageSrc:
      'https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/413819552_672391888421164_7246973310754745577_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1J2FqvLWKVgQ7kNvgHa4S8D&_nc_zt=23&_nc_ht=scontent-sof1-1.xx&_nc_gid=AjDrWpd3QGy45qM4u9XpoOg&oh=00_AYD2MdDND6jQRl8egVhSDEfQpiAcjgD8t7oOrPHniD655w&oe=6757820C',
    thumbnailImageSrc:
      'https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/413819552_672391888421164_7246973310754745577_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1J2FqvLWKVgQ7kNvgHa4S8D&_nc_zt=23&_nc_ht=scontent-sof1-1.xx&_nc_gid=AjDrWpd3QGy45qM4u9XpoOg&oh=00_AYD2MdDND6jQRl8egVhSDEfQpiAcjgD8t7oOrPHniD655w&oe=6757820C',
    alt: 'Image 1 description',
  },
  {
    itemImageSrc:
      'https://scontent-sof1-2.xx.fbcdn.net/v/t39.30808-6/411798292_672394108420942_1533572544933799859_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=K_1k3jaTVCIQ7kNvgFc-iRk&_nc_zt=23&_nc_ht=scontent-sof1-2.xx&_nc_gid=AOYxdK4Yk6DKlt8wS4VV7QT&oh=00_AYDmF8T7yL5KhwTBQ0SEJKHOsoDM1oglkEB9CQvibv-Z-g&oe=6757A7F8',
    thumbnailImageSrc:
      'https://scontent-sof1-2.xx.fbcdn.net/v/t39.30808-6/411798292_672394108420942_1533572544933799859_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=K_1k3jaTVCIQ7kNvgFc-iRk&_nc_zt=23&_nc_ht=scontent-sof1-2.xx&_nc_gid=AOYxdK4Yk6DKlt8wS4VV7QT&oh=00_AYDmF8T7yL5KhwTBQ0SEJKHOsoDM1oglkEB9CQvibv-Z-g&oe=6757A7F8',
    alt: 'Image 2 description',
  },
  {
    itemImageSrc:
      'https://scontent-sof1-2.xx.fbcdn.net/v/t39.30808-6/411929434_672392071754479_8287516059891585916_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XP8DXaYKQ94Q7kNvgHYSgUB&_nc_zt=23&_nc_ht=scontent-sof1-2.xx&_nc_gid=A8Iukfx_8rWoNrdub-Y6raa&oh=00_AYDla_FnT6NCYyVWX8UrwFkdwhEQ8iUSGxrOlUhATow8wg&oe=67578AC8',
    thumbnailImageSrc:
      'https://scontent-sof1-2.xx.fbcdn.net/v/t39.30808-6/411929434_672392071754479_8287516059891585916_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XP8DXaYKQ94Q7kNvgHYSgUB&_nc_zt=23&_nc_ht=scontent-sof1-2.xx&_nc_gid=A8Iukfx_8rWoNrdub-Y6raa&oh=00_AYDla_FnT6NCYyVWX8UrwFkdwhEQ8iUSGxrOlUhATow8wg&oe=67578AC8',
    alt: 'Image 3 description',
  },
  {
    itemImageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/413806638_672391831754503_5754763545814045168_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4wj9yykwAFQQ7kNvgEIlVll&_nc_zt=23&_nc_ht=scontent-otp1-1.xx&_nc_gid=ArHYfHhDG4PZGrV_cMTEEuB&oh=00_AYDc6zNrXKAdrg9fz2GQvmnvn5d2aK4qMptL5OOZGPetLQ&oe=6757CCAB',
    thumbnailImageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/413806638_672391831754503_5754763545814045168_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4wj9yykwAFQQ7kNvgEIlVll&_nc_zt=23&_nc_ht=scontent-otp1-1.xx&_nc_gid=ArHYfHhDG4PZGrV_cMTEEuB&oh=00_AYDc6zNrXKAdrg9fz2GQvmnvn5d2aK4qMptL5OOZGPetLQ&oe=6757CCAB',
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
