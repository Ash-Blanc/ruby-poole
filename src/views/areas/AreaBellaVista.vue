<script setup lang="ts">
import { Home, TrendingUp, Users } from 'lucide-vue-next'
import LandingPageTemplate from '@/views/LandingPageTemplate.vue'

const highlights = [
  { icon: Home, label: 'Avg Price', value: '$340K' },
  { icon: TrendingUp, label: 'Appreciation', value: '+7%' },
  { icon: Users, label: 'Population', value: '32K' },
]

const features = [
  'Seven beautiful lakes for fishing and recreation',
  'Golf courses including Bella Vista Country Club',
  'Extensive hiking and biking trail network',
  'Active 55+ retirement community options',
  'Lower property taxes and cost of living',
  'Minutes from Bentonville amenities',
]
</script>

<template>
  <LandingPageTemplate
    city="Bella Vista"
    tagline="Lake Living in the Ozarks"
    description="Bella Vista is a nature lover's paradise with seven lakes, miles of trails, and a relaxed lifestyle. Originally a retirement community, it now attracts families and outdoor enthusiasts of all ages."
    hero-image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
    :highlights="highlights"
    :features="features"
    :search-params="{ city: 'Bella Vista', state: 'AR' }"
  />
</template>
