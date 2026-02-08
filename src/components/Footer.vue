<script setup lang="ts">
import { Phone, Mail, MapPin, Facebook, Linkedin, X } from 'lucide-vue-next'
import Logo from '@/components/Logo.vue'

const currentYear = new Date().getFullYear()

const areaLinks = [
  { name: 'Bentonville', href: '/areas/bentonville' },
  { name: 'Rogers', href: '/areas/rogers' },
  { name: 'Bella Vista', href: '/areas/bella-vista' },
  { name: 'Fayetteville', href: '/areas/fayetteville' },
  { name: 'Springdale', href: '/areas/springdale' },
]

const homeLinks = [
  { name: 'Lake Homes', href: '/homes/lake-homes' },
  { name: 'Homes with Land', href: '/homes/land' },
  { name: 'New Construction', href: '/homes/new-construction' },
  { name: 'Moving to NWA', href: '/moving-to-nwa' },
]

const quickLinks = [
  { name: 'Search Homes', href: '/search' },
  { name: 'Blog', href: '/blog' },
  { name: 'Videos', href: '/videos' },
  { name: 'Meet the Team', href: '/team' },
  { name: 'Contact Us', href: '/#contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
]

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/ruby.n.poole', label: 'Facebook' },
  { icon: X, href: 'https://twitter.com/RubyNWA', label: 'X (Twitter)' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ruby-poole-90296699', label: 'LinkedIn' },
]
</script>

<template>
  <footer class="bg-neutral text-neutral-content">
    <!-- Main Footer -->
    <div class="container-custom py-16">
      <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
        <!-- Brand Column -->
        <div class="sm:col-span-2 lg:col-span-2">
          <RouterLink to="/" class="inline-flex items-center gap-3 mb-4">
            <Logo :size="48" />
          </RouterLink>
          <p class="text-neutral-content/70 mb-6 max-w-sm">
            The Ruby Poole Team at Collier & Associates — your trusted real estate experts in Northwest Arkansas with 11+ years of experience.
          </p>
          
          <!-- Contact Info -->
          <div class="space-y-3">
            <a href="tel:+14795550123" class="flex items-center gap-3 hover:text-primary transition-colors">
              <Phone class="w-4 h-4" />
              <span>(479) 555-0123</span>
            </a>
            <a href="mailto:hello@rubypoole.com" class="flex items-center gap-3 hover:text-primary transition-colors">
              <Mail class="w-4 h-4" />
              <span>hello@rubypoole.com</span>
            </a>
            <div class="flex items-start gap-3">
              <MapPin class="w-4 h-4 mt-1 flex-shrink-0" />
              <span>123 Main Street<br>Rogers, AR 72756</span>
            </div>
          </div>
        </div>

        <!-- Areas Column -->
        <div>
          <h4 class="font-display text-lg mb-4">Areas</h4>
          <ul class="space-y-2">
            <li v-for="link in areaLinks" :key="link.name">
              <RouterLink :to="link.href" class="text-neutral-content/70 hover:text-primary transition-colors">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Homes Column -->
        <div>
          <h4 class="font-display text-lg mb-4">Homes</h4>
          <ul class="space-y-2">
            <li v-for="link in homeLinks" :key="link.name">
              <RouterLink :to="link.href" class="text-neutral-content/70 hover:text-primary transition-colors">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Quick Links Column -->
        <div>
          <h4 class="font-display text-lg mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <RouterLink :to="link.href" class="text-neutral-content/70 hover:text-primary transition-colors">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-neutral-content/10">
      <div class="container-custom py-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-neutral-content/60 text-center sm:text-left">
            &copy; {{ currentYear }} Ruby Poole Team at Collier & Associates. All rights reserved.
          </p>
          
          <!-- Social Links -->
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-10 h-10 rounded-lg bg-neutral-content/10 hover:bg-primary hover:text-primary-content flex items-center justify-center transition-colors"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
