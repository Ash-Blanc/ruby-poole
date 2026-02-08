<script setup lang="ts">
import { ref, watch } from 'vue'
import { X, Bell, MapPin } from 'lucide-vue-next'
import LeadForm from '@/components/LeadForm.vue'

interface Props {
  modelValue: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const isOpen = ref(props.modelValue)

watch(() => props.modelValue, (val) => {
  isOpen.value = val
})

const close = () => {
  emit('update:modelValue', false)
}

const handleBackdropClick = (e: MouseEvent) => {
  if (e.target === e.currentTarget) close()
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="modelValue" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        @click="handleBackdropClick"
      >
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div 
            v-if="modelValue"
            class="bg-base-100 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <!-- Header -->
            <div class="relative p-6 pb-4 border-b border-base-200">
              <button 
                @click="close"
                class="absolute top-4 right-4 btn btn-ghost btn-sm btn-circle"
                aria-label="Close"
              >
                <X class="w-5 h-5" />
              </button>
              
              <div class="flex items-center gap-3 mb-2">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Bell class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 class="text-xl font-display">Get Home Alerts</h3>
                  <p class="text-sm text-base-content/60">Be first to know about new listings</p>
                </div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="p-6">
              <div class="flex items-center gap-2 text-sm text-base-content/70 mb-4 p-3 bg-base-200/50 rounded-lg">
                <MapPin class="w-4 h-4 text-primary flex-shrink-0" />
                <span>Northwest Arkansas & Surrounding Areas</span>
              </div>
              
              <LeadForm 
                source="home-alerts-modal"
                submit-label="Start My Alerts"
                :success-redirect="false"
              />
            </div>
            
            <!-- Benefits -->
            <div class="px-6 pb-6">
              <div class="grid grid-cols-2 gap-3 text-xs text-base-content/60">
                <div class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-success"></span>
                  Instant new listing alerts
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-success"></span>
                  Price drop notifications
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-success"></span>
                  Saved search criteria
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-success"></span>
                  Unsubscribe anytime
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
