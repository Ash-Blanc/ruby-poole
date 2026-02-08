<script setup lang="ts">
import { computed } from 'vue'
import { MapPin, Home, TrendingUp, Users, ArrowRight, Check } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'
import IdxEmbed from '@/components/IdxEmbed.vue'

interface Props {
  city: string
  tagline: string
  description: string
  heroImage?: string
  highlights: { icon: any; label: string; value: string }[]
  features: string[]
  searchParams?: Record<string, string>
}

const props = withDefaults(defineProps<Props>(), {
  heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
})

const pageTitle = computed(() => `${props.city} Homes for Sale`)
const pageDescription = computed(() => 
  `Find your dream home in ${props.city}, Arkansas. Browse listings, get home alerts, and work with the Ruby Poole Team.`
)
</script>

<template>
  <SeoHead
    :title="pageTitle"
    :description="pageDescription"
    :canonical="`/areas/${city.toLowerCase().replace(/\s+/g, '-')}`"
  />

  <main>
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] flex items-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          :src="heroImage" 
          :alt="`${city}, Arkansas`"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-neutral/90 via-neutral/70 to-transparent"></div>
      </div>

      <div class="container-custom relative z-10 py-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="text-neutral-content">
            <div class="flex items-center gap-2 mb-4">
              <MapPin class="w-5 h-5 text-primary" />
              <span class="text-sm font-medium text-neutral-content/80">Northwest Arkansas</span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-display mb-4">
              {{ city }} Homes
              <span class="block text-primary">for Sale</span>
            </h1>
            
            <p class="text-lg text-neutral-content/80 mb-6">{{ tagline }}</p>
            
            <p class="text-neutral-content/70 mb-8 max-w-lg">{{ description }}</p>

            <!-- Quick Stats -->
            <div class="grid grid-cols-3 gap-4 mb-8">
              <div 
                v-for="stat in highlights" 
                :key="stat.label"
                class="text-center p-4 bg-neutral-content/10 rounded-xl backdrop-blur-sm"
              >
                <component :is="stat.icon" class="w-5 h-5 mx-auto mb-2 text-primary" />
                <div class="text-xl font-display">{{ stat.value }}</div>
                <div class="text-xs text-neutral-content/60">{{ stat.label }}</div>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <a href="#listings" class="btn btn-primary gap-2">
                <Home class="w-4 h-4" />
                View Listings
              </a>
              <a href="#contact" class="btn btn-outline btn-neutral gap-2">
                Talk to an Expert
              </a>
            </div>
          </div>

          <!-- Lead Form -->
          <div class="hidden lg:block">
            <div class="bg-base-100 rounded-2xl p-8 shadow-2xl max-w-md ml-auto">
              <h3 class="text-xl font-display mb-2">Get {{ city }} Home Alerts</h3>
              <p class="text-sm text-base-content/60 mb-6">Be the first to know about new listings</p>
              <LeadForm 
                :source="`area-${city.toLowerCase()}`"
                submit-label="Start My Alerts"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-base-200/50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-display mb-4">Why {{ city }}?</h2>
          <p class="text-base-content/60 max-w-2xl mx-auto">
            Discover what makes {{ city }} one of the most desirable places to live in Northwest Arkansas.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(feature, idx) in features" 
            :key="idx"
            class="flex items-start gap-4 p-6 bg-base-100 rounded-xl"
          >
            <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Check class="w-4 h-4 text-primary" />
            </div>
            <span class="text-base-content/80">{{ feature }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Listings Section -->
    <section id="listings" class="py-16">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-display mb-4">{{ city }} Listings</h2>
          <p class="text-base-content/60">Browse available homes in {{ city }}</p>
        </div>

        <IdxEmbed 
          type="search"
          :search-params="searchParams"
          height="600px"
        />
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="py-16 bg-primary text-primary-content">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-display mb-4">
              Ready to Find Your {{ city }} Home?
            </h2>
            <p class="text-primary-content/80 mb-6">
              Work with the Ruby Poole Team - local experts with 11+ years of experience and 1,274+ homes sold in Northwest Arkansas.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-3">
                <Check class="w-5 h-5" />
                <span>Local market expertise</span>
              </li>
              <li class="flex items-center gap-3">
                <Check class="w-5 h-5" />
                <span>Personalized home search</span>
              </li>
              <li class="flex items-center gap-3">
                <Check class="w-5 h-5" />
                <span>Full-service support from search to close</span>
              </li>
            </ul>
          </div>

          <div class="bg-base-100 text-base-content rounded-2xl p-8 shadow-2xl">
            <h3 class="text-xl font-display mb-2">Contact Us Today</h3>
            <p class="text-sm text-base-content/60 mb-6">Tell us about your home search goals</p>
            <LeadForm 
              :source="`area-${city.toLowerCase()}-cta`"
              submit-label="Get Started"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
