<script setup lang="ts">
import { Home, TrendingUp, Users, MapPin, ArrowRight } from 'lucide-vue-next'
import LandingPageTemplate from '@/views/LandingPageTemplate.vue'
import FaqSection from '@/components/FaqSection.vue'

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

const neighborhoods = [
  { name: 'Pinnacle Hills', slug: 'pinnacle-hills', price: '$450K–$900K', vibe: 'Upscale Urban', color: 'from-primary/20 to-primary/5' },
  { name: 'Downtown Rogers', slug: 'downtown-rogers', price: '$250K–$450K', vibe: 'Historic/Urban', color: 'from-warning/20 to-warning/5' },
  { name: 'Lake Atalanta', slug: 'lake-atalanta', price: '$300K–$500K', vibe: 'Outdoor/Lakeside', color: 'from-info/20 to-info/5' },
  { name: 'Pleasant Crossing', slug: 'pleasant-crossing', price: '$280K–$450K', vibe: 'Modern Suburban', color: 'from-success/20 to-success/5' },
]

const faqs = [
  { question: 'What is the average home price in Rogers?', answer: 'The median home price in Rogers is around $350,000. Prices range from $250K in established neighborhoods to $900K+ in Pinnacle Hills.' },
  { question: 'How are the schools in Rogers?', answer: 'Rogers Public Schools is a top-rated district with strong academics, competitive athletics, and growing enrollment. Heritage High and Rogers High are the two main high schools.' },
  { question: 'Is Rogers good for families?', answer: 'Yes! Rogers offers excellent schools, abundant parks, Beaver Lake access, and family-friendly neighborhoods. It\'s centrally located for easy access to all NWA amenities.' },
  { question: 'What is there to do in Rogers?', answer: 'Rogers features Pinnacle Hills Promenade for shopping, Beaver Lake for water sports, War Eagle Mill, extensive trail systems, Topgolf, and a growing dining and arts scene.' },
]
</script>

<template>
  <div>
    <LandingPageTemplate
      city="Rogers"
      tagline="Where Tradition Meets Progress"
      description="Rogers offers the perfect blend of small-town values and modern conveniences. With excellent schools, Beaver Lake access, and a thriving economy, it's an ideal place to call home."
      hero-image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
      :highlights="highlights"
      :features="features"
      :search-params="{ city: 'Rogers', state: 'AR' }"
    />

    <!-- Neighborhood Cards -->
    <section class="py-16 bg-base-200/30">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-display mb-4">Rogers Neighborhoods</h2>
          <p class="text-base-content/60 max-w-2xl mx-auto">From upscale Pinnacle Hills to lakeside living — discover the right Rogers neighborhood for you.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <RouterLink
            v-for="n in neighborhoods"
            :key="n.slug"
            :to="`/rogers/neighborhoods/${n.slug}`"
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
        <FaqSection :items="faqs" title="Rogers FAQs" />
      </div>
    </section>

    <!-- Compare CTA -->
    <section class="py-12 bg-base-200/50">
      <div class="container-custom text-center">
        <h2 class="text-2xl font-display mb-3">Not Sure About Rogers?</h2>
        <p class="text-base-content/60 mb-6">See how it compares to other NWA cities</p>
        <div class="flex flex-wrap justify-center gap-3">
          <RouterLink to="/compare/bentonville-vs-rogers" class="btn btn-outline btn-sm">Rogers vs Bentonville</RouterLink>
          <RouterLink to="/school-districts" class="btn btn-outline btn-sm">School Districts</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
