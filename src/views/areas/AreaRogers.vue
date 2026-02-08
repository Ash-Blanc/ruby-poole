<script setup lang="ts">
import { Home, TrendingUp, Users } from 'lucide-vue-next'
import LandingPageTemplate from '@/views/LandingPageTemplate.vue'

const highlights = [
  { icon: Home, label: 'Avg Price', value: '$350K' },
  { icon: TrendingUp, label: 'Appreciation', value: '+9%' },
  { icon: Users, label: 'Population', value: '72K' },
]

const features = [
  'Excellent Rogers Public Schools district',
  'Beaver Lake access for boating and fishing',
  'Pinnacle Hills shopping and entertainment',
  'War Eagle Mill and historic attractions',
  'Central location in NWA corridor',
  'Strong job market and economic growth',
]
</script>

<template>
  <LandingPageTemplate
    city="Rogers"
    tagline="Where Tradition Meets Progress"
    description="Rogers offers the perfect blend of small-town values and modern conveniences. With excellent schools, Beaver Lake access, and a thriving economy, it's an ideal place to call home."
    hero-image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
    :highlights="highlights"
    :features="features"
    :search-params="{ city: 'Rogers', state: 'AR' }"
  />
</template>
