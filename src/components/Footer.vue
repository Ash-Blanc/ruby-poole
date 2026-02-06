<script setup lang="ts">
import { Facebook, Linkedin, X, MapPin, Phone, Mail } from 'lucide-vue-next'
import Logo from '@/components/Logo.vue'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Our Team', href: '#team' },
  { name: 'Listings', href: '#listings' },
  { name: 'Contact', href: '#contact' },
]

const services = [
  'Home Buying',
  'Home Selling',
  'Investment Properties',
  'Relocation Services',
]

const areas = [
  'Rogers',
  'Bentonville',
  'Fayetteville',
  'Springdale',
  'Bella Vista',
  'Centerton',
]

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/ruby.n.poole', label: 'Facebook' },
  { icon: X, href: 'https://twitter.com/RubyNWA', label: 'X (Twitter)' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ruby-poole-90296699', label: 'LinkedIn' },
]
</script>

<template>
  <footer class="bg-base-300">
    <div class="container-custom py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <a href="#home" class="flex items-center gap-3 mb-5">
            <Logo :size="48" />
          </a>
          <p class="text-base-content/60 text-sm leading-relaxed mb-6">
            Your trusted real estate partner in Northwest Arkansas. 11 years of experience helping families find their dream homes.
          </p>
          <div class="flex gap-2">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="w-10 h-10 rounded-lg bg-base-100 hover:bg-primary hover:text-primary-content flex items-center justify-center transition-colors"
            >
              <component :is="social.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-display text-lg mb-5">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a :href="link.href" class="text-base-content/60 hover:text-primary transition-colors text-sm">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-display text-lg mb-5">Services</h4>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service">
              <span class="text-base-content/60 text-sm">{{ service }}</span>
            </li>
          </ul>
        </div>

        <!-- Areas Served -->
        <div>
          <h4 class="font-display text-lg mb-5">Areas We Serve</h4>
          <ul class="grid grid-cols-2 gap-3">
            <li v-for="area in areas" :key="area" class="flex items-center gap-2">
              <MapPin class="w-3.5 h-3.5 text-primary" />
              <span class="text-base-content/60 text-sm">{{ area }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-base-content/10">
      <div class="container-custom py-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/50">
          <p>&copy; {{ new Date().getFullYear() }} Ruby Poole Team. All rights reserved.</p>
          <div class="flex gap-6">
            <RouterLink to="/privacy" class="hover:text-primary transition-colors">Privacy Policy</RouterLink>
            <RouterLink to="/terms" class="hover:text-primary transition-colors">Terms of Service</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
