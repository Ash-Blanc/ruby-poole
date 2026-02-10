<script setup lang="ts">
import { Crown, Home, TrendingUp, Shield, Gem, Check } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'
import IdxEmbed from '@/components/IdxEmbed.vue'

const highlights = [
  { icon: Crown, label: 'Luxury', value: '$750K+' },
  { icon: Home, label: 'Estates', value: '200+' },
  { icon: TrendingUp, label: 'Appreciation', value: '+10%' },
]

const features = [
  'Gated communities and private estates',
  'Custom-built homes with premium finishes',
  'Resort-style pools and outdoor living',
  'Smart home technology and energy efficiency',
  'Panoramic Ozark views and acreage',
  'Private wine cellars, theaters, and gyms',
]

const communities = [
  'Pinnacle Hills (Rogers)',
  'The Highlands (Bentonville)',
  'Chapel Creek (Bentonville)',
  'Stonebridge Meadows (Fayetteville)',
  'Osage Creek (Bentonville)',
  'Shadow Valley (Rogers)',
]
</script>

<template>
  <SeoHead
    title="Luxury Homes for Sale in Northwest Arkansas"
    description="Browse luxury properties, estates, and custom-built homes in NWA. Gated communities, premium finishes, and panoramic Ozark views. The Ruby Poole Team."
    canonical="/homes/luxury"
  />

  <main>
    <!-- Hero -->
    <section class="relative min-h-[60vh] flex items-center overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" 
          alt="Luxury home in Northwest Arkansas"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-neutral/90 via-neutral/70 to-transparent"></div>
      </div>

      <div class="container-custom relative z-10 py-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-neutral-content">
            <div class="flex items-center gap-2 mb-4">
              <Crown class="w-5 h-5 text-primary" />
              <span class="text-sm font-medium">Premium Properties</span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-display mb-4">
              Luxury Homes
              <span class="block text-primary">in NWA</span>
            </h1>
            
            <p class="text-lg text-neutral-content/80 mb-8 max-w-lg">
              Discover premier estates and luxury properties in Northwest Arkansas. From custom-built masterpieces to gated community living.
            </p>

            <div class="grid grid-cols-3 gap-4 mb-8">
              <div v-for="stat in highlights" :key="stat.label" class="text-center p-4 bg-neutral-content/10 rounded-xl backdrop-blur-sm">
                <component :is="stat.icon" class="w-5 h-5 mx-auto mb-2 text-primary" />
                <div class="text-xl font-display">{{ stat.value }}</div>
                <div class="text-xs text-neutral-content/60">{{ stat.label }}</div>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <a href="#listings" class="btn btn-primary gap-2">View Luxury Homes</a>
              <a href="#contact" class="btn btn-outline btn-neutral">Talk to an Expert</a>
            </div>
          </div>

          <div class="hidden lg:block">
            <div class="bg-base-100 rounded-2xl p-8 shadow-2xl max-w-md ml-auto">
              <h3 class="text-xl font-display mb-2">Luxury Home Alerts</h3>
              <p class="text-sm text-base-content/60 mb-6">Be first to see new luxury listings</p>
              <LeadForm source="luxury-homes" submit-label="Start My Alerts" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16 bg-base-200/50">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-display mb-6">Luxury Living in the Ozarks</h2>
            <p class="text-base-content/60 mb-8">
              Northwest Arkansas offers an exceptional luxury real estate market — combining world-class amenities with the natural beauty of the Ozark Mountains.
            </p>
            <div class="grid sm:grid-cols-2 gap-4">
              <div v-for="(feature, idx) in features" :key="idx" class="flex items-start gap-3">
                <Check class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span class="text-base-content/80">{{ feature }}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 class="font-display text-xl mb-4">Premier Communities</h3>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="community in communities" :key="community" class="flex items-center gap-2 p-3 bg-base-100 rounded-lg">
                <Gem class="w-4 h-4 text-primary" />
                <span class="text-sm">{{ community }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Listings -->
    <section id="listings" class="py-16">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-display mb-4">Luxury Properties for Sale</h2>
          <p class="text-base-content/60">Browse homes $750,000+</p>
        </div>
        <IdxEmbed type="search" :search-params="{ minPrice: '750000', type: 'luxury' }" height="600px" />
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="py-16 bg-primary text-primary-content">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-display mb-4">Find Your Luxury Home</h2>
            <p class="text-primary-content/80">Our team specializes in premium properties throughout Northwest Arkansas.</p>
          </div>
          <div class="bg-base-100 text-base-content rounded-2xl p-8 shadow-2xl">
            <LeadForm source="luxury-homes-cta" submit-label="Connect with Luxury Expert" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
