<script setup lang="ts">
import { ref } from 'vue'
import { 
  Phone, Mail, MapPin, Clock, Send, 
  Facebook, Linkedin, X 
} from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const isSubmitting = ref(false)

const handleSubmit = () => {
  isSubmitting.value = true
  // Simulate form submission
  setTimeout(() => {
    isSubmitting.value = false
    form.value = { name: '', email: '', phone: '', message: '' }
    alert('Thank you! We\'ll be in touch soon.')
  }, 1000)
}

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(479) 555-0123', href: 'tel:+14795550123' },
  { icon: Mail, label: 'Email', value: 'hello@rubypoole.com', href: 'mailto:hello@rubypoole.com' },
  { icon: MapPin, label: 'Office', value: '123 Main St, Rogers, AR 72756', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon-Sat: 9AM-6PM', href: null },
]

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/ruby.n.poole', label: 'Facebook' },
  { icon: X, href: 'https://twitter.com/RubyNWA', label: 'X (Twitter)' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ruby-poole-90296699', label: 'LinkedIn' },
]
</script>

<template>
  <section id="contact" class="bg-gradient-to-br from-neutral via-neutral to-neutral/95 text-neutral-content">
    <div class="container-custom">
      <div class="section-header">
        <h2 class="text-neutral-content">Let's Connect</h2>
        <p class="text-neutral-content/70">Ready to start your real estate journey? Get in touch today.</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <!-- Contact Form -->
        <div class="bg-base-100 text-base-content rounded-2xl p-8 lg:p-10 shadow-xl">
          <h3 class="text-2xl font-display mb-6">Send a Message</h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div class="form-control">
              <label class="label pb-1">
                <span class="label-text font-medium">Full Name</span>
              </label>
              <input
                v-model="form.name"
                type="text"
                placeholder="John Smith"
                class="input input-bordered w-full"
                required
              />
            </div>

            <div class="grid sm:grid-cols-2 gap-5">
              <div class="form-control">
                <label class="label pb-1">
                  <span class="label-text font-medium">Email</span>
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="john@example.com"
                  class="input input-bordered w-full"
                  required
                />
              </div>
              <div class="form-control">
                <label class="label pb-1">
                  <span class="label-text font-medium">Phone</span>
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  class="input input-bordered w-full"
                />
              </div>
            </div>

            <div class="form-control">
              <label class="label pb-1">
                <span class="label-text font-medium">Message</span>
              </label>
              <textarea
                v-model="form.message"
                placeholder="Tell us about your real estate needs..."
                class="textarea textarea-bordered w-full h-32"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn btn-primary w-full gap-2"
              :class="{ loading: isSubmitting }"
              :disabled="isSubmitting"
            >
              <Send class="w-4 h-4" />
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="flex flex-col justify-center">
          <div class="space-y-6 mb-10">
            <div
              v-for="info in contactInfo"
              :key="info.label"
              class="flex items-start gap-4"
            >
              <div class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <component :is="info.icon" class="w-5 h-5 text-primary" />
              </div>
              <div>
                <div class="text-sm text-neutral-content/60 mb-0.5">{{ info.label }}</div>
                <a
                  v-if="info.href"
                  :href="info.href"
                  class="text-lg hover:text-primary transition-colors"
                >
                  {{ info.value }}
                </a>
                <span v-else class="text-lg">{{ info.value }}</span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div>
            <div class="text-sm text-neutral-content/60 mb-4">Follow Us</div>
            <div class="flex gap-3">
              <a
                v-for="social in socials"
                :key="social.label"
                :href="social.href"
                :aria-label="social.label"
                class="w-11 h-11 rounded-xl bg-neutral-content/10 hover:bg-primary hover:text-primary-content flex items-center justify-center transition-colors"
              >
                <component :is="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
