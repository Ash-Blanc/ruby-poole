<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Home, X } from 'lucide-vue-next'

const isVisible = ref(false)
const isDismissed = ref(false)

const handleScroll = () => {
  if (isDismissed.value) return
  // Show after scrolling 300px
  isVisible.value = window.scrollY > 300
}

const dismiss = () => {
  isDismissed.value = true
  isVisible.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div 
      v-if="isVisible" 
      class="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-3 bg-gradient-to-t from-base-100 via-base-100 to-transparent pointer-events-none"
    >
      <div class="flex gap-2 pointer-events-auto">
        <a 
          href="#listings" 
          class="btn btn-primary flex-1 gap-2 shadow-lg"
        >
          <Home class="w-5 h-5" />
          Find Your Home
        </a>
        <button 
          @click="dismiss"
          class="btn btn-ghost btn-square"
          aria-label="Dismiss"
        >
          <X class="w-5 h-5" />
        </button>
      </div>
    </div>
  </Transition>
</template>
