<script setup lang="ts">
import { Home, TrendingUp, Users, MapPin, ArrowRight } from 'lucide-vue-next'
import LandingPageTemplate from '@/views/LandingPageTemplate.vue'
import FaqSection from '@/components/FaqSection.vue'

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

const neighborhoods = [
  { name: 'Downtown Fayetteville', slug: 'downtown-fayetteville', price: '$300K–$600K', vibe: 'Urban/Arts', color: 'from-primary/20 to-primary/5' },
  { name: 'Gulley Park', slug: 'gulley-park', price: '$350K–$650K', vibe: 'Established Suburban', color: 'from-success/20 to-success/5' },
]

const faqs = [
  { question: 'What is the average home price in Fayetteville?', answer: 'The median home price in Fayetteville is approximately $385,000. Prices vary widely from $200K for starter homes to $1M+ in premium neighborhoods.' },
  { question: 'Is Fayetteville good for investment properties?', answer: 'Yes! The University of Arkansas drives strong rental demand. Student housing, short-term rentals near entertainment, and long-term family rentals all perform well here.' },
  { question: 'What makes Fayetteville unique?', answer: 'Fayetteville has been named one of the best places to live in the US multiple times. Its combination of university culture, arts scene, outdoor recreation, and growing tech sector create a vibrant lifestyle.' },
  { question: 'How are the schools in Fayetteville?', answer: 'Fayetteville Public Schools is one of the largest and most diverse districts in Arkansas. It offers strong academics, magnet programs, and numerous extracurricular activities.' },
]
</script>

<template>
  <div>
    <LandingPageTemplate
      city="Fayetteville"
      tagline="Culture, Community & Razorback Pride"
      description="Fayetteville is the cultural heart of Northwest Arkansas. Home to the University of Arkansas, it offers vibrant nightlife, world-class arts, and a youthful energy that's hard to match."
      hero-image="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80"
      :highlights="highlights"
      :features="features"
      :search-params="{ city: 'Fayetteville', state: 'AR' }"
    />

    <!-- Neighborhood Cards -->
    <section class="py-16 bg-base-200/30">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-display mb-4">Fayetteville Neighborhoods</h2>
          <p class="text-base-content/60 max-w-2xl mx-auto">From the energy of downtown to the charm of established neighborhoods — find your Fayetteville fit.</p>
        </div>

        <div class="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <RouterLink
            v-for="n in neighborhoods"
            :key="n.slug"
            :to="`/fayetteville/neighborhoods/${n.slug}`"
            class="card bg-base-100 hover:shadow-xl transition-all duration-300 group overflow-hidden"
          >
            <div class="card-body p-6">
              <div :class="`w-12 h-12 rounded-xl bg-gradient-to-br ${n.color} flex items-center justify-center mb-4`">
                <MapPin class="w-6 h-6 text-base-content/70" />
              </div>
              <h3 class="font-display text-lg group-hover:text-primary transition-colors">{{ n.name }}</h3>
              <p class="text-sm text-base-content/60 mb-3">{{ n.vibe }}</p>
              <div class="flex items-center justify-between">
                <span class="text-sm font-semibold text-primary">{{ n.price }}</span>
                <ArrowRight class="w-4 h-4 text-base-content/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- FAQs -->
    <section class="py-16">
      <div class="container-custom max-w-3xl">
        <FaqSection :items="faqs" title="Fayetteville FAQs" />
      </div>
    </section>

    <!-- Compare CTA -->
    <section class="py-12 bg-base-200/50">
      <div class="container-custom text-center">
        <h2 class="text-2xl font-display mb-3">Not Sure About Fayetteville?</h2>
        <p class="text-base-content/60 mb-6">See how it compares to other NWA cities</p>
        <div class="flex flex-wrap justify-center gap-3">
          <RouterLink to="/compare/bentonville-vs-fayetteville" class="btn btn-outline btn-sm">Fayetteville vs Bentonville</RouterLink>
          <RouterLink to="/school-districts" class="btn btn-outline btn-sm">School Districts</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
