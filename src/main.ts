import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import AnimateOnScroll from 'primevue/animateonscroll'
import vClickOutside from 'click-outside-vue3'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(vClickOutside)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.directive('animateonscroll', AnimateOnScroll)

app.mount('#app')
