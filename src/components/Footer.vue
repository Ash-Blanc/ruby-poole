<script setup lang="ts">
import { Phone, Mail, MapPin, Facebook, Linkedin, X, Instagram, Music2 } from 'lucide-vue-next'
import Logo from '@/components/Logo.vue'

const currentYear = new Date().getFullYear()

const areaLinks = [
  { name: 'Downtown Bentonville', href: '/bentonville/downtown-bentonville' },
  { name: 'Bentonville', href: '/bentonville' },
  { name: 'Rogers', href: '/rogers' },
  { name: 'Bella Vista', href: '/bella-vista' },
  { name: 'Centerton', href: '/centerton' },
  { name: 'Fayetteville', href: '/fayetteville' },
  { name: 'Springdale', href: '/springdale' },
]

const homeLinks = [
  { name: 'Lake & Waterfront', href: '/homes/lake-homes' },
  { name: 'New Construction', href: '/homes/new-construction' },
  { name: 'Homes Near Bike Trails', href: '/homes/bike-trails' },
  { name: 'Condos & Townhomes', href: '/homes/condos-townhomes' },
  { name: 'Homes with Land', href: '/homes/land' },
  { name: 'Luxury Homes', href: '/homes/luxury' },
]

const quickLinks = [
  { name: 'Search Homes', href: '/search' },
  { name: 'School Districts', href: '/school-districts' },
  { name: 'Blog', href: '/blog' },
  { name: 'Videos', href: '/videos' },
  { name: 'Meet the Team', href: '/team' },
  { name: 'Moving to NWA', href: '/moving-to-nwa' },
  { name: 'Contact Us', href: '/#contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
]

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/rubypoole_nwa/', label: 'Instagram' },
  { icon: Music2, href: 'https://www.tiktok.com/@rubypoole_nwa', label: 'TikTok' },
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
            <Logo :size="40" variant="full" />
          </RouterLink>
          <p class="text-neutral-content/70 mb-3 max-w-sm text-sm">
            Your neighborhood-first guide to living in Northwest Arkansas. Explore communities, 
            homes, school districts, and local insight.
          </p>
          <p class="text-neutral-content/50 mb-6 max-w-sm text-xs">
            Real estate services provided by The Ruby Poole Team at Collier &amp; Associates.
          </p>
          
          <!-- Contact Info -->
          <div class="space-y-3">
            <a href="tel:+14795550123" class="flex items-center gap-3 hover:text-primary transition-colors">
              <Phone class="w-4 h-4" />
              <span>(479) 555-0123</span>
            </a>
            <a href="mailto:hello@nwaneighborhoods.com" class="flex items-center gap-3 hover:text-primary transition-colors">
              <Mail class="w-4 h-4" />
              <span>hello@nwaneighborhoods.com</span>
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
              <RouterLink :to="link.href" class="text-neutral-content/70 hover:text-primary transition-colors text-sm">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Homes Column -->
        <div>
          <h4 class="font-display text-lg mb-4">Lifestyles</h4>
          <ul class="space-y-2">
            <li v-for="link in homeLinks" :key="link.name">
              <RouterLink :to="link.href" class="text-neutral-content/70 hover:text-primary transition-colors text-sm">
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
              <RouterLink :to="link.href" class="text-neutral-content/70 hover:text-primary transition-colors text-sm">
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
            &copy; {{ currentYear }} NWA Neighborhoods by The Ruby Poole Team. All rights reserved.
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
