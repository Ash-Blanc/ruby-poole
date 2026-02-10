<script setup lang="ts">
import { Home, TrendingUp, Users, MapPin, ArrowRight } from 'lucide-vue-next'
import LandingPageTemplate from '@/views/LandingPageTemplate.vue'
import FaqSection from '@/components/FaqSection.vue'

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

const neighborhoods = [
  { name: 'Har-Ber Meadows', slug: 'har-ber-meadows', price: '$350K–$600K', vibe: 'Upscale Suburban', color: 'from-primary/20 to-primary/5' },
  { name: 'Elm Springs', slug: 'elm-springs', price: '$220K–$380K', vibe: 'Small Town/Affordable', color: 'from-success/20 to-success/5' },
]

const faqs = [
  { question: 'What is the average home price in Springdale?', answer: 'The median home price in Springdale is approximately $295,000, making it the most affordable major city in NWA. Prices range from under $200K for older homes to $600K+ in Har-Ber Meadows.' },
  { question: 'How are the schools in Springdale?', answer: 'Springdale Public Schools is the largest district in Arkansas and offers solid academic programs. Har-Ber High School is particularly well-regarded for academics and athletics.' },
  { question: 'What is the job market like in Springdale?', answer: 'Springdale is home to Tyson Foods headquarters and numerous other employers in the food processing, manufacturing, and logistics sectors. The job market is strong and diverse.' },
  { question: 'Is Springdale good for first-time buyers?', answer: 'Yes! Springdale offers the best value in NWA with a range of affordable homes, new construction options, and strong rental demand for investment properties.' },
]
</script>

<template>
  <div>
    <LandingPageTemplate
      city="Springdale"
      tagline="Affordable Living with Big Opportunities"
      description="Springdale offers the best value in Northwest Arkansas. Home to Tyson Foods and a diverse, welcoming community, it's the perfect place for families and first-time buyers."
      hero-image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80"
      :highlights="highlights"
      :features="features"
      :search-params="{ city: 'Springdale', state: 'AR' }"
    />

    <!-- Neighborhood Cards -->
    <section class="py-16 bg-base-200/30">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-display mb-4">Springdale Neighborhoods</h2>
          <p class="text-base-content/60 max-w-2xl mx-auto">From upscale Har-Ber to affordable Elm Springs — find your perfect Springdale neighborhood.</p>
        </div>

        <div class="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <RouterLink
            v-for="n in neighborhoods"
            :key="n.slug"
            :to="`/springdale/neighborhoods/${n.slug}`"
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
        <FaqSection :items="faqs" title="Springdale FAQs" />
      </div>
    </section>

    <!-- Compare CTA -->
    <section class="py-12 bg-base-200/50">
      <div class="container-custom text-center">
        <h2 class="text-2xl font-display mb-3">Not Sure About Springdale?</h2>
        <p class="text-base-content/60 mb-6">Compare cities and find the best fit</p>
        <div class="flex flex-wrap justify-center gap-3">
          <RouterLink to="/school-districts" class="btn btn-outline btn-sm">School Districts</RouterLink>
          <RouterLink to="/moving-to-nwa" class="btn btn-outline btn-sm">Moving to NWA Guide</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
