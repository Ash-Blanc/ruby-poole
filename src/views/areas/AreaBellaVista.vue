<script setup lang="ts">
import { Home, TrendingUp, Users, MapPin, ArrowRight } from 'lucide-vue-next'
import LandingPageTemplate from '@/views/LandingPageTemplate.vue'
import FaqSection from '@/components/FaqSection.vue'

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

const neighborhoods = [
  { name: 'Kingswood', slug: 'kingswood', price: '$300K–$550K', vibe: 'Golf/Retirement', color: 'from-success/20 to-success/5' },
  { name: 'Highlands', slug: 'highlands', price: '$280K–$500K', vibe: 'Rural/Private', color: 'from-info/20 to-info/5' },
  { name: 'Branchwood', slug: 'branchwood', price: '$250K–$400K', vibe: 'Active/Family', color: 'from-primary/20 to-primary/5' },
]

const faqs = [
  { question: 'What is the average home price in Bella Vista?', answer: 'The median home price in Bella Vista is approximately $340,000, making it one of the more affordable options in NWA with excellent amenities.' },
  { question: 'Is Bella Vista good for retirees?', answer: 'Absolutely! Bella Vista was originally developed as a retirement community and still offers excellent amenities for active adults including golf courses, lakes, trails, and a strong Property Owners Association.' },
  { question: 'What lakes are in Bella Vista?', answer: 'Bella Vista has seven lakes: Loch Lomond, Ann, Norwood, Windsor, Avalon, Rayburn, and Brittany. Each offers fishing, kayaking, and scenic beauty.' },
  { question: 'Which school district serves Bella Vista?', answer: 'Bella Vista is served by the Bentonville School District, consistently ranked among the best in Arkansas. Students attend Bentonville West High School.' },
]
</script>

<template>
  <div>
    <LandingPageTemplate
      city="Bella Vista"
      tagline="Lake Living in the Ozarks"
      description="Bella Vista is a nature lover's paradise with seven lakes, miles of trails, and a relaxed lifestyle. Originally a retirement community, it now attracts families and outdoor enthusiasts of all ages."
      hero-image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
      :highlights="highlights"
      :features="features"
      :search-params="{ city: 'Bella Vista', state: 'AR' }"
    />

    <!-- Neighborhood Cards -->
    <section class="py-16 bg-base-200/30">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-display mb-4">Bella Vista Neighborhoods</h2>
          <p class="text-base-content/60 max-w-2xl mx-auto">Golf course communities, lakeside living, and trail-side homes — explore Bella Vista's unique neighborhoods.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <RouterLink
            v-for="n in neighborhoods"
            :key="n.slug"
            :to="`/bella-vista/neighborhoods/${n.slug}`"
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
        <FaqSection :items="faqs" title="Bella Vista FAQs" />
      </div>
    </section>

    <!-- Compare CTA -->
    <section class="py-12 bg-base-200/50">
      <div class="container-custom text-center">
        <h2 class="text-2xl font-display mb-3">Not Sure About Bella Vista?</h2>
        <p class="text-base-content/60 mb-6">See how it compares to other NWA cities</p>
        <div class="flex flex-wrap justify-center gap-3">
          <RouterLink to="/compare/bella-vista-vs-centerton" class="btn btn-outline btn-sm">Bella Vista vs Centerton</RouterLink>
          <RouterLink to="/school-districts" class="btn btn-outline btn-sm">School Districts</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
