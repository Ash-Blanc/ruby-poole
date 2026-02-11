<script setup lang="ts">
import { Home, TrendingUp, Building, PlaneTakeoff, Check } from 'lucide-vue-next'

const services = [
  {
    icon: Home,
    title: 'Home Buying',
    description: 'Find your perfect home with personalized search and expert guidance through every step.',
    features: ['Personalized home search', 'Market analysis', 'Negotiation support', 'Closing assistance'],
  },
  {
    icon: TrendingUp,
    title: 'Home Selling',
    description: 'Maximize your home\'s value with strategic pricing, professional staging, and targeted marketing.',
    features: ['Free home valuation', 'Professional photography', 'Strategic marketing', 'Quick closings'],
  },
  {
    icon: Building,
    title: 'Investment Properties',
    description: 'Build your portfolio with carefully vetted investment opportunities and ROI projections.',
    features: ['ROI analysis', 'Market trends', 'Property management', 'Portfolio growth'],
  },
  {
    icon: PlaneTakeoff,
    title: 'Relocation Services',
    description: 'Seamless transitions for families and professionals moving to the Rogers area.',
    features: ['Area orientation', 'School information', 'Community matching', 'Remote buying'],
  },
]
</script>

<template>
  <section id="services" class="bg-base-200/50">
    <div class="container-custom">
      <div class="section-header">
        <h2>How We Can Help</h2>
        <p>Comprehensive real estate services tailored to your unique needs</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="card bg-base-100 hover:shadow-xl group"
        >
          <div class="card-body p-8">
            <div class="flex items-start gap-5">
              <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-content transition-colors">
                <component :is="service.icon" class="w-7 h-7" :stroke-width="1.75" />
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-display mb-2">{{ service.title }}</h3>
                <p class="text-base-content/60 mb-5 leading-relaxed">{{ service.description }}</p>
                <ul class="grid grid-cols-2 gap-3">
                  <li
                    v-for="(feature, idx) in service.features"
                    :key="idx"
                    class="flex items-center gap-2 text-sm"
                  >
                    <Check class="w-4 h-4 text-success flex-shrink-0" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
