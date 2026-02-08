<script setup lang="ts">
import { Home, TrendingUp, Users } from 'lucide-vue-next'
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

const faqs = [
  { question: 'What is the average home price in Bentonville?', answer: 'The median home price in Bentonville is around $425,000, though prices vary by neighborhood. Downtown and newer developments tend to be higher, while established neighborhoods offer more affordable options.' },
  { question: 'Which schools serve Bentonville?', answer: 'Bentonville School District is consistently ranked among the best in Arkansas, with a graduation rate above 95%. Notable schools include Bentonville High School, Bentonville West High School, and numerous award-winning elementary and middle schools.' },
  { question: 'What are the best neighborhoods in Bentonville?', answer: 'Popular neighborhoods include Downtown (walkable to amenities), Sugar Creek (family-friendly), Bella Vista Highlands (gated community), and Park Springs (newer development). Each offers different price points and lifestyles.' },
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

    <!-- FAQs -->
    <section class="py-16 bg-base-200/30">
      <div class="container-custom max-w-3xl">
        <FaqSection :items="faqs" title="Bentonville FAQs" />
      </div>
    </section>

    <!-- Neighborhoods CTA -->
    <section class="py-12">
      <div class="container-custom text-center">
        <h2 class="text-2xl font-display mb-4">Explore Bentonville Neighborhoods</h2>
        <p class="text-base-content/60 mb-6">From Downtown to Sugar Creek, find the perfect fit for your lifestyle.</p>
        <div class="flex flex-wrap justify-center gap-3">
          <RouterLink to="/areas/bentonville/neighborhoods/downtown" class="btn btn-outline">Downtown</RouterLink>
          <RouterLink to="/areas/bentonville/neighborhoods/sugar-creek" class="btn btn-outline">Sugar Creek</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
