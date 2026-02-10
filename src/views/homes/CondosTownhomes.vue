<script setup lang="ts">
import { Building, Home, TrendingUp, MapPin, Check } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'
import IdxEmbed from '@/components/IdxEmbed.vue'

const highlights = [
  { icon: Building, label: 'Available', value: '150+' },
  { icon: Home, label: 'Avg Price', value: '$285K' },
  { icon: TrendingUp, label: 'Appreciation', value: '+7%' },
]

const features = [
  'Low-maintenance living',
  'Walkable to shops and restaurants',
  'HOA amenities included',
  'Modern open floor plans',
  'Ideal for first-time buyers',
  'Investment and rental potential',
]

const locations = [
  { name: 'Downtown Bentonville', desc: 'Walkable to Crystal Bridges & the square' },
  { name: 'Rogers', desc: 'Near Pinnacle Hills and retail' },
  { name: 'Fayetteville', desc: 'Close to U of A and entertainment' },
  { name: 'Bella Vista', desc: 'Lock-and-leave with golf access' },
]
</script>

<template>
  <SeoHead
    title="Condos & Townhomes for Sale in Northwest Arkansas"
    description="Find condos, townhomes, and low-maintenance properties in NWA. Walkable communities, modern floor plans. NWA Neighborhoods by The Ruby Poole Team."
    canonical="/homes/condos-townhomes"
  />

  <main>
    <!-- Hero -->
    <section class="relative min-h-[60vh] flex items-center overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80" 
          alt="Condos and townhomes in Northwest Arkansas"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-neutral/90 via-neutral/70 to-transparent"></div>
      </div>

      <div class="container-custom relative z-10 py-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-neutral-content">
            <div class="flex items-center gap-2 mb-4">
              <Building class="w-5 h-5 text-primary" />
              <span class="text-sm font-medium">Low-Maintenance Living</span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-display mb-4">
              Condos & Townhomes
              <span class="block text-primary">in NWA</span>
            </h1>
            
            <p class="text-lg text-neutral-content/80 mb-8 max-w-lg">
              Enjoy modern, maintenance-free living in walkable communities across Northwest Arkansas.
            </p>

            <div class="grid grid-cols-3 gap-4 mb-8">
              <div v-for="stat in highlights" :key="stat.label" class="text-center p-4 bg-neutral-content/10 rounded-xl backdrop-blur-sm">
                <component :is="stat.icon" class="w-5 h-5 mx-auto mb-2 text-primary" />
                <div class="text-xl font-display">{{ stat.value }}</div>
                <div class="text-xs text-neutral-content/60">{{ stat.label }}</div>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <a href="#listings" class="btn btn-primary">View Condos & Townhomes</a>
              <a href="#contact" class="btn btn-outline btn-neutral">Talk to an Expert</a>
            </div>
          </div>

          <div class="hidden lg:block">
            <div class="bg-base-100 rounded-2xl p-8 shadow-2xl max-w-md ml-auto">
              <h3 class="text-xl font-display mb-2">Condo & Townhome Alerts</h3>
              <p class="text-sm text-base-content/60 mb-6">Get notified of new listings</p>
              <LeadForm source="condos-townhomes" submit-label="Start My Alerts" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Locations -->
    <section class="py-16 bg-base-200/50">
      <div class="container-custom">
        <h2 class="text-3xl font-display text-center mb-12">Popular Condo Communities</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="loc in locations" :key="loc.name" class="p-6 bg-base-100 rounded-xl shadow-sm">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <MapPin class="w-6 h-6 text-primary" />
            </div>
            <h3 class="font-display text-lg mb-2">{{ loc.name }}</h3>
            <p class="text-sm text-base-content/60">{{ loc.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-display mb-6">Benefits of Condo Living</h2>
            <div class="grid sm:grid-cols-2 gap-4">
              <div v-for="(feature, idx) in features" :key="idx" class="flex items-start gap-3">
                <Check class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span class="text-base-content/80">{{ feature }}</span>
              </div>
            </div>
          </div>
          <div class="relative aspect-video rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
              alt="Modern condo interior"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Listings -->
    <section id="listings" class="py-16 bg-base-200/50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-display mb-4">Condos & Townhomes for Sale</h2>
          <p class="text-base-content/60">Browse available properties</p>
        </div>
        <IdxEmbed type="search" :search-params="{ type: 'condo,townhouse' }" height="600px" />
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="py-16 bg-primary text-primary-content">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-display mb-4">Find Your Perfect Place</h2>
            <p class="text-primary-content/80">Let us match you with the ideal low-maintenance home in NWA.</p>
          </div>
          <div class="bg-base-100 text-base-content rounded-2xl p-8 shadow-2xl">
            <LeadForm source="condos-townhomes-cta" submit-label="Get Started" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
