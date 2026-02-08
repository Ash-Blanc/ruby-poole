<script setup lang="ts">
import { Hammer, Sparkles, Shield, Home, TrendingUp, Calendar, Check } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'
import IdxEmbed from '@/components/IdxEmbed.vue'

const highlights = [
  { icon: Hammer, label: 'Builders', value: '50+' },
  { icon: Home, label: 'Avg Price', value: '$420K' },
  { icon: TrendingUp, label: 'Growth', value: '+15%' },
]

const benefits = [
  { icon: Sparkles, title: 'Modern Design', description: 'Open floor plans, smart home features, and energy efficiency.' },
  { icon: Shield, title: 'Builder Warranty', description: 'Peace of mind with structural and systems warranties.' },
  { icon: Calendar, title: 'Customization', description: 'Choose finishes, upgrades, and personalize your home.' },
  { icon: Home, title: 'Move-In Ready', description: 'No renovation needed—just unpack and enjoy.' },
]

const builders = [
  'Rausch Coleman Homes',
  'Buffington Homes',
  'David Weekley Homes',
  'Riverwood Homes',
  'Homes by Taber',
  'Cobblestone Homes',
]

const features = [
  'Energy-efficient construction',
  'Latest smart home technology',
  'Modern open floor plans',
  'Builder incentives available',
  'New community amenities',
  'Flexible lot selection',
]
</script>

<template>
  <SeoHead
    title="New Construction Homes in Northwest Arkansas"
    description="Browse new build homes in NWA. Find builder communities in Bentonville, Rogers, and surrounding areas. Get alerts on new construction opportunities."
    canonical="/homes/new-construction"
  />

  <main>
    <!-- Hero -->
    <section class="relative min-h-[60vh] flex items-center overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80" 
          alt="New construction home in Arkansas"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-neutral/90 via-neutral/70 to-transparent"></div>
      </div>

      <div class="container-custom relative z-10 py-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-neutral-content">
            <div class="flex items-center gap-2 mb-4">
              <Hammer class="w-5 h-5 text-primary" />
              <span class="text-sm font-medium">New Build Homes</span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-display mb-4">
              New Construction
              <span class="block text-primary">in NWA</span>
            </h1>
            
            <p class="text-lg text-neutral-content/80 mb-8 max-w-lg">
              Be the first to call it home. Explore new builder communities and modern homes throughout Northwest Arkansas.
            </p>

            <div class="grid grid-cols-3 gap-4 mb-8">
              <div v-for="stat in highlights" :key="stat.label" class="text-center p-4 bg-neutral-content/10 rounded-xl backdrop-blur-sm">
                <component :is="stat.icon" class="w-5 h-5 mx-auto mb-2 text-primary" />
                <div class="text-xl font-display">{{ stat.value }}</div>
                <div class="text-xs text-neutral-content/60">{{ stat.label }}</div>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <a href="#listings" class="btn btn-primary">View New Homes</a>
              <a href="#contact" class="btn btn-outline btn-neutral">Talk to an Expert</a>
            </div>
          </div>

          <div class="hidden lg:block">
            <div class="bg-base-100 rounded-2xl p-8 shadow-2xl max-w-md ml-auto">
              <h3 class="text-xl font-display mb-2">New Build Alerts</h3>
              <p class="text-sm text-base-content/60 mb-6">Get notified of new communities and inventory</p>
              <LeadForm source="new-construction" submit-label="Start My Alerts" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-16 bg-base-200/50">
      <div class="container-custom">
        <h2 class="text-3xl font-display text-center mb-12">Why Buy New?</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="benefit in benefits" :key="benefit.title" class="p-6 bg-base-100 rounded-xl">
            <component :is="benefit.icon" class="w-8 h-8 text-primary mb-4" />
            <h3 class="font-display text-lg mb-2">{{ benefit.title }}</h3>
            <p class="text-sm text-base-content/60">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Builders -->
    <section class="py-16">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-display mb-6">Featured Builders</h2>
            <p class="text-base-content/60 mb-6">We work with the top builders in Northwest Arkansas to help you find or build your dream home.</p>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="builder in builders" :key="builder" class="flex items-center gap-2 p-3 bg-base-200/50 rounded-lg">
                <Hammer class="w-4 h-4 text-primary" />
                <span class="text-sm">{{ builder }}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 class="font-display text-xl mb-4">New Construction Benefits</h3>
            <div class="space-y-3">
              <div v-for="(feature, idx) in features" :key="idx" class="flex items-start gap-3">
                <Check class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span class="text-base-content/80">{{ feature }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Listings -->
    <section id="listings" class="py-16 bg-base-200/50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-display mb-4">New Construction Listings</h2>
          <p class="text-base-content/60">Browse available new build homes</p>
        </div>
        <IdxEmbed type="search" :search-params="{ type: 'new-construction' }" height="600px" />
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="py-16 bg-primary text-primary-content">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-display mb-4">Ready to Build Your Dream?</h2>
            <p class="text-primary-content/80">We'll help you navigate builders, lots, and the new construction process.</p>
          </div>
          <div class="bg-base-100 text-base-content rounded-2xl p-8 shadow-2xl">
            <LeadForm source="new-construction-cta" submit-label="Connect with Expert" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
