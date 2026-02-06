<script setup lang="ts">
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-vue-next'

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
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]
</script>

<template>
  <footer class="bg-base-300">
    <div class="container-custom py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <a href="#home" class="flex items-center gap-3 mb-5">
            <div class="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
              <span class="text-primary-content font-display text-xl font-semibold">RP</span>
            </div>
            <div>
              <span class="font-display text-xl block leading-tight">Ruby Poole</span>
              <span class="text-xs text-base-content/60">Real Estate Team</span>
            </div>
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
            <a href="#" class="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
