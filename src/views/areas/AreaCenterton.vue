<script setup lang="ts">
import { Home, TrendingUp, Users, MapPin, ArrowRight } from 'lucide-vue-next'
import LandingPageTemplate from '@/views/LandingPageTemplate.vue'
import FaqSection from '@/components/FaqSection.vue'

const highlights = [
  { icon: Home, label: 'Avg Price', value: '$340K' },
  { icon: TrendingUp, label: 'Appreciation', value: '+11%' },
  { icon: Users, label: 'Population', value: '18K' },
]

const features = [
  'One of the fastest-growing cities in Arkansas',
  'Excellent schools in the Bentonville district',
  'Affordable new construction options',
  'Close proximity to Bentonville and Rogers',
  'Growing retail center and dining scene',
  'Family-oriented parks and recreation',
]

const neighborhoods = [
  { name: 'Copperstone', slug: 'copperstone', price: '$300K–$500K', vibe: 'Master-Planned Family', color: 'from-primary/20 to-primary/5' },
  { name: 'Mill Creek', slug: 'mill-creek', price: '$250K–$400K', vibe: 'Starter/Growing Family', color: 'from-success/20 to-success/5' },
]

const faqs = [
  { question: 'What is the average home price in Centerton?', answer: 'The median home price in Centerton is approximately $340,000, making it one of the more affordable options in the Bentonville metro area. New construction ranges from $280K to $500K+ depending on the community.' },
  { question: 'Which schools serve Centerton?', answer: 'Centerton is served by the Bentonville School District, consistently ranked among the best in Arkansas. Students attend Bentonville or Bentonville West High School.' },
  { question: 'What makes Centerton attractive for families?', answer: 'Centerton offers affordable new construction, excellent schools, several parks, and easy access to Bentonville and Rogers. The city has invested heavily in infrastructure and recreation facilities.' },
  { question: 'How far is Centerton from Bentonville?', answer: 'Centerton is approximately 10 minutes from downtown Bentonville, making it a convenient and affordable option for those working in the Bentonville area.' },
]
</script>

<template>
  <div>
    <LandingPageTemplate
      city="Centerton"
      tagline="Fastest-Growing City in NWA"
      description="Centerton offers affordable living in the Bentonville school district with easy access to all that Northwest Arkansas has to offer. New construction, family parks, and a growing downtown."
      hero-image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
      :highlights="highlights"
      :features="features"
      :search-params="{ city: 'Centerton', state: 'AR' }"
    />

    <!-- Neighborhood Cards -->
    <section class="py-16 bg-base-200/30">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-display mb-4">Centerton Neighborhoods</h2>
          <p class="text-base-content/60 max-w-2xl mx-auto">Master-planned communities and affordable new construction — see what Centerton has to offer.</p>
        </div>

        <div class="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <RouterLink
            v-for="n in neighborhoods"
            :key="n.slug"
            :to="`/centerton/neighborhoods/${n.slug}`"
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
        <FaqSection :items="faqs" title="Centerton FAQs" />
      </div>
    </section>

    <!-- Compare CTA -->
    <section class="py-12 bg-base-200/50">
      <div class="container-custom text-center">
        <h2 class="text-2xl font-display mb-3">Not Sure About Centerton?</h2>
        <p class="text-base-content/60 mb-6">See how it compares to other NWA cities</p>
        <div class="flex flex-wrap justify-center gap-3">
          <RouterLink to="/compare/bella-vista-vs-centerton" class="btn btn-outline btn-sm">Centerton vs Bella Vista</RouterLink>
          <RouterLink to="/school-districts" class="btn btn-outline btn-sm">School Districts</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
