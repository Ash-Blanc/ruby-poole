<script setup lang="ts">
import { Home, TrendingUp, Users } from 'lucide-vue-next'
import LandingPageTemplate from '@/views/LandingPageTemplate.vue'

const highlights = [
  { icon: Home, label: 'Avg Price', value: '$295K' },
  { icon: TrendingUp, label: 'Appreciation', value: '+7%' },
  { icon: Users, label: 'Population', value: '87K' },
]

const features = [
  'Most affordable city in Northwest Arkansas',
  'Tyson Foods world headquarters',
  'Arvest Ballpark minor league baseball',
  'Diverse community with authentic cuisine',
  'Growing arts and entertainment scene',
  'Easy access to I-49 corridor',
]
</script>

<template>
  <LandingPageTemplate
    city="Springdale"
    tagline="Affordable Living with Big Opportunities"
    description="Springdale offers the best value in Northwest Arkansas. Home to Tyson Foods and a diverse, welcoming community, it's the perfect place for families and first-time buyers."
    hero-image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80"
    :highlights="highlights"
    :features="features"
    :search-params="{ city: 'Springdale', state: 'AR' }"
  />
</template>
