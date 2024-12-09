import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const isSidebarVisible = ref(false)
  function toggleSidebarVisible() {
    isSidebarVisible.value = !isSidebarVisible.value
  }

  return { isSidebarVisible, toggleSidebarVisible }
})
