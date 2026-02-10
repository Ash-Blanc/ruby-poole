<script setup lang="ts">
import { Home, TrendingUp, Users, MapPin, ArrowRight } from 'lucide-vue-next'
import LandingPageTemplate from '@/views/LandingPageTemplate.vue'
import FaqSection from '@/components/FaqSection.vue'

const highlights = [
  { icon: Home, label: 'Avg Price', value: '$425K' },
  { icon: TrendingUp, label: 'Appreciation', value: '+8%' },
  { icon: Users, label: 'Population', value: '58K' },
]

const features = [
  'Home to Walmart HQ and a thriving business community',
  'Top-rated public and private schools',
  'Crystal Bridges Museum of American Art',
  'Extensive trail system and outdoor recreation',
  'Vibrant downtown with shops and restaurants',
  'Low cost of living with big-city amenities',
]

const neighborhoods = [
  { name: 'Downtown', slug: 'downtown', price: '$400K–$800K', vibe: 'Urban/Walkable', color: 'from-primary/20 to-primary/5' },
  { name: 'Sugar Creek', slug: 'sugar-creek', price: '$350K–$600K', vibe: 'Family-Friendly', color: 'from-success/20 to-success/5' },
  { name: 'Park Springs', slug: 'park-springs', price: '$375K–$650K', vibe: 'Modern Suburban', color: 'from-info/20 to-info/5' },
  { name: 'Bella Vista Highlands', slug: 'bella-vista-highlands', price: '$450K–$750K', vibe: 'Upscale/Gated', color: 'from-warning/20 to-warning/5' },
]

const faqs = [
  { question: 'What is the average home price in Bentonville?', answer: 'The median home price in Bentonville is around $425,000, though prices vary by neighborhood. Downtown and newer developments tend to be higher, while established neighborhoods offer more affordable options.' },
  { question: 'Which schools serve Bentonville?', answer: 'Bentonville School District is consistently ranked among the best in Arkansas, with a graduation rate above 95%. Notable schools include Bentonville High School, Bentonville West High School, and numerous award-winning elementary and middle schools.' },
  { question: 'What are the best neighborhoods in Bentonville?', answer: 'Popular neighborhoods include Downtown (walkable to amenities), Sugar Creek (family-friendly), Park Springs (modern/trails), and Bella Vista Highlands (upscale gated). Each offers different price points and lifestyles.' },
  { question: 'How is the job market in Bentonville?', answer: 'Bentonville has an exceptionally strong job market anchored by Walmart\'s global headquarters. The area also attracts professionals in retail, tech, supply chain, and marketing, with numerous Fortune 500 companies having offices here.' },
]
</script>

<template>
  <div>
    <LandingPageTemplate
      city="Bentonville"
      tagline="The Heart of Northwest Arkansas"
      description="Bentonville combines small-town charm with world-class amenities. Home to Walmart headquarters, Crystal Bridges Museum, and an incredible trail system, it's one of the fastest-growing cities in America."
      hero-image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80"
      :highlights="highlights"
      :features="features"
      :search-params="{ city: 'Bentonville', state: 'AR' }"
    />

    <!-- Neighborhood Cards -->
    <section class="py-16 bg-base-200/30">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-display mb-4">Bentonville Neighborhoods</h2>
          <p class="text-base-content/60 max-w-2xl mx-auto">From walkable downtown living to quiet gated communities — find the neighborhood that fits your lifestyle.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <RouterLink
            v-for="n in neighborhoods"
            :key="n.slug"
            :to="`/bentonville/neighborhoods/${n.slug}`"
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
        <FaqSection :items="faqs" title="Bentonville FAQs" />
      </div>
    </section>

    <!-- Compare CTA -->
    <section class="py-12 bg-base-200/50">
      <div class="container-custom text-center">
        <h2 class="text-2xl font-display mb-3">Not Sure About Bentonville?</h2>
        <p class="text-base-content/60 mb-6">See how it compares to other NWA cities</p>
        <div class="flex flex-wrap justify-center gap-3">
          <RouterLink to="/compare/bentonville-vs-rogers" class="btn btn-outline btn-sm">Bentonville vs Rogers</RouterLink>
          <RouterLink to="/compare/bentonville-vs-fayetteville" class="btn btn-outline btn-sm">Bentonville vs Fayetteville</RouterLink>
          <RouterLink to="/school-districts" class="btn btn-outline btn-sm">School Districts</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
