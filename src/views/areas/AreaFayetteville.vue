<script setup lang="ts">
import { Home, TrendingUp, Users } from 'lucide-vue-next'
import LandingPageTemplate from '@/views/LandingPageTemplate.vue'

const highlights = [
  { icon: Home, label: 'Avg Price', value: '$385K' },
  { icon: TrendingUp, label: 'Appreciation', value: '+8%' },
  { icon: Users, label: 'Population', value: '99K' },
]

const features = [
  'Home to University of Arkansas Razorbacks',
  'Vibrant Dickson Street entertainment district',
  'TheatreSquared and Walton Arts Center',
  'Year-round cultural events and festivals',
  'Strong rental market for investors',
  'Progressive, diverse community',
]
</script>

<template>
  <LandingPageTemplate
    city="Fayetteville"
    tagline="Culture, Community & Razorback Pride"
    description="Fayetteville is the cultural heart of Northwest Arkansas. Home to the University of Arkansas, it offers vibrant nightlife, world-class arts, and a youthful energy that's hard to match."
    hero-image="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80"
    :highlights="highlights"
    :features="features"
    :search-params="{ city: 'Fayetteville', state: 'AR' }"
  />
</template>
