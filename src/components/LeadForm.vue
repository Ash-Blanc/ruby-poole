<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Send, CheckCircle2 } from 'lucide-vue-next'

interface Props {
  source?: string
  variant?: 'default' | 'compact' | 'hero'
  showPhone?: boolean
  submitLabel?: string
  successRedirect?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  source: 'website',
  variant: 'default',
  showPhone: true,
  submitLabel: 'Get Started',
  successRedirect: true,
})

const router = useRouter()

const form = ref({
  name: '',
  email: '',
  phone: '',
  timeline: '',
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

const timelineOptions = [
  { value: 'immediately', label: 'Ready Now' },
  { value: '1-3-months', label: '1-3 Months' },
  { value: '3-6-months', label: '3-6 Months' },
  { value: 'just-browsing', label: 'Just Browsing' },
]

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // TODO: Replace with actual form submission endpoint
    // Options: Formspree, Netlify Forms, Zapier webhook, or custom API
    const formData = {
      ...form.value,
      source: props.source,
      timestamp: new Date().toISOString(),
    }
    
    console.log('Lead form submission:', formData)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    isSuccess.value = true
    
    if (props.successRedirect) {
      setTimeout(() => {
        router.push('/thank-you')
      }, 500)
    }
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Something went wrong. Please try again or call us directly.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form 
    @submit.prevent="handleSubmit" 
    :class="[
      'lead-form',
      variant === 'compact' ? 'space-y-3' : 'space-y-4',
      variant === 'hero' ? 'hero-form' : ''
    ]"
  >
    <!-- Success State -->
    <div v-if="isSuccess" class="text-center py-6">
      <CheckCircle2 class="w-12 h-12 text-success mx-auto mb-3" />
      <p class="text-lg font-medium">Thank you!</p>
      <p class="text-base-content/60">We'll be in touch soon.</p>
    </div>
    
    <!-- Form Fields -->
    <template v-else>
      <div class="form-control">
        <input
          v-model="form.name"
          type="text"
          placeholder="Your Name"
          class="input input-bordered w-full"
          :class="{ 'input-sm': variant === 'compact' }"
          required
        />
      </div>
      
      <div :class="showPhone ? 'grid sm:grid-cols-2 gap-3' : ''">
        <div class="form-control">
          <input
            v-model="form.email"
            type="email"
            placeholder="Email Address"
            class="input input-bordered w-full"
            :class="{ 'input-sm': variant === 'compact' }"
            required
          />
        </div>
        
        <div v-if="showPhone" class="form-control">
          <input
            v-model="form.phone"
            type="tel"
            placeholder="Phone (optional)"
            class="input input-bordered w-full"
            :class="{ 'input-sm': variant === 'compact' }"
          />
        </div>
      </div>
      
      <div class="form-control">
        <select
          v-model="form.timeline"
          class="select select-bordered w-full"
          :class="{ 'select-sm': variant === 'compact' }"
          required
        >
          <option value="" disabled>When are you looking to move?</option>
          <option 
            v-for="option in timelineOptions" 
            :key="option.value" 
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
      
      <button
        type="submit"
        class="btn btn-primary w-full gap-2"
        :class="{ 
          'btn-sm': variant === 'compact',
          'btn-lg': variant === 'hero',
          'loading': isSubmitting 
        }"
        :disabled="isSubmitting"
      >
        <Send v-if="!isSubmitting" class="w-4 h-4" />
        {{ isSubmitting ? 'Sending...' : submitLabel }}
      </button>
      
      <p class="text-xs text-center text-base-content/50">
        By submitting, you agree to our 
        <RouterLink to="/privacy" class="underline hover:text-primary">Privacy Policy</RouterLink>
      </p>
    </template>
  </form>
</template>

<style scoped>
.hero-form {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
</style>
