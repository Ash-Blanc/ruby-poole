<script setup lang="ts">
import { Waves, Fish, Sailboat, Home, TrendingUp, MapPin, Check } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'
import IdxEmbed from '@/components/IdxEmbed.vue'

const highlights = [
  { icon: Waves, label: 'Lakes', value: '10+' },
  { icon: Home, label: 'Avg Price', value: '$550K' },
  { icon: TrendingUp, label: 'Appreciation', value: '+12%' },
]

const lakes = [
  { name: 'Beaver Lake', description: '28,000 acres of crystal-clear water, perfect for boating and fishing.' },
  { name: 'Table Rock Lake', description: 'Just across the state line, famous for bass fishing.' },
  { name: 'Bella Vista Lakes', description: 'Seven private lakes with golf and country club amenities.' },
  { name: 'Lake Wedington', description: 'Secluded mountain lake near Fayetteville.' },
]

const features = [
  'Waterfront and lake-view properties',
  'Private dock access available',
  'Year-round fishing and water sports',
  'Scenic mountain and water views',
  'Investment potential with vacation rentals',
  'Peaceful retreat lifestyle',
]
</script>

<template>
  <SeoHead
    title="Lake Homes for Sale in Northwest Arkansas"
    description="Discover lakefront properties and lake-view homes near Beaver Lake, Table Rock, and Bella Vista. Find your waterfront dream home with the Ruby Poole Team."
    canonical="/homes/lake-homes"
  />

  <main>
    <!-- Hero -->
    <section class="relative min-h-[60vh] flex items-center overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80" 
          alt="Lake home in Northwest Arkansas"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-neutral/90 via-neutral/70 to-transparent"></div>
      </div>

      <div class="container-custom relative z-10 py-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-neutral-content">
            <div class="flex items-center gap-2 mb-4">
              <Waves class="w-5 h-5 text-primary" />
              <span class="text-sm font-medium">Waterfront Living</span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-display mb-4">
              Lake Homes
              <span class="block text-primary">in NWA</span>
            </h1>
            
            <p class="text-lg text-neutral-content/80 mb-8 max-w-lg">
              Wake up to stunning water views. From Beaver Lake estates to Bella Vista lakefront cottages, find your waterfront paradise.
            </p>

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
                View Lake Homes
              </a>
              <a href="#contact" class="btn btn-outline btn-neutral">
                Talk to an Expert
              </a>
            </div>
          </div>

          <div class="hidden lg:block">
            <div class="bg-base-100 rounded-2xl p-8 shadow-2xl max-w-md ml-auto">
              <h3 class="text-xl font-display mb-2">Lake Home Alerts</h3>
              <p class="text-sm text-base-content/60 mb-6">Be first to know about new waterfront listings</p>
              <LeadForm 
                source="lake-homes"
                submit-label="Start My Alerts"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lakes Overview -->
    <section class="py-16 bg-base-200/50">
      <div class="container-custom">
        <h2 class="text-3xl font-display text-center mb-12">Popular Lakes in NWA</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="lake in lakes" 
            :key="lake.name"
            class="p-6 bg-base-100 rounded-xl shadow-sm"
          >
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Fish class="w-6 h-6 text-primary" />
            </div>
            <h3 class="font-display text-lg mb-2">{{ lake.name }}</h3>
            <p class="text-sm text-base-content/60">{{ lake.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-display mb-6">Lake Living Benefits</h2>
            <div class="grid sm:grid-cols-2 gap-4">
              <div 
                v-for="(feature, idx) in features" 
                :key="idx"
                class="flex items-start gap-3"
              >
                <Check class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span class="text-base-content/80">{{ feature }}</span>
              </div>
            </div>
          </div>
          <div class="relative aspect-video rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80"
              alt="Lake home view"
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
          <h2 class="text-3xl font-display mb-4">Lake Properties for Sale</h2>
          <p class="text-base-content/60">Browse waterfront and lake-view homes</p>
        </div>
        <IdxEmbed 
          type="search"
          :search-params="{ waterfront: 'true', type: 'lake' }"
          height="600px"
        />
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="py-16 bg-primary text-primary-content">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-display mb-4">
              Find Your Lake Home
            </h2>
            <p class="text-primary-content/80 mb-6">
              Lake properties move fast. Let us help you find and secure your waterfront dream home.
            </p>
          </div>
          <div class="bg-base-100 text-base-content rounded-2xl p-8 shadow-2xl">
            <LeadForm 
              source="lake-homes-cta"
              submit-label="Connect with Lake Expert"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
