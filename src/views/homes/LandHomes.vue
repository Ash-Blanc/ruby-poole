<script setup lang="ts">
import { TreePine, Mountain, Tractor, Home, TrendingUp, Ruler, Check } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'
import IdxEmbed from '@/components/IdxEmbed.vue'

const highlights = [
  { icon: Ruler, label: 'Lot Size', value: '5+ Acres' },
  { icon: Home, label: 'Avg Price', value: '$485K' },
  { icon: TrendingUp, label: 'Demand', value: 'High' },
]

const propertyTypes = [
  { icon: TreePine, title: 'Wooded Acreage', description: 'Private, tree-covered properties with natural beauty.' },
  { icon: Mountain, title: 'Mountain Views', description: 'Ozark hilltop homes with panoramic vistas.' },
  { icon: Tractor, title: 'Farm & Ranch', description: 'Working farms, horse properties, and hobby farms.' },
  { icon: Home, title: 'Estate Properties', description: 'Luxury homes on large, private lots.' },
]

const features = [
  'Properties from 2 to 100+ acres',
  'Perfect for horses, farming, or privacy',
  'Room for workshops and outbuildings',
  'Space for gardens and orchards',
  'Hunting and recreational land',
  'Future subdivision potential',
]
</script>

<template>
  <SeoHead
    title="Homes with Land for Sale in Northwest Arkansas"
    description="Find homes with acreage in NWA. Browse farms, ranches, and properties with land in Bentonville, Rogers, and surrounding areas."
    canonical="/homes/land"
  />

  <main>
    <!-- Hero -->
    <section class="relative min-h-[60vh] flex items-center overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80" 
          alt="Home with acreage in Arkansas"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-neutral/90 via-neutral/70 to-transparent"></div>
      </div>

      <div class="container-custom relative z-10 py-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-neutral-content">
            <div class="flex items-center gap-2 mb-4">
              <TreePine class="w-5 h-5 text-primary" />
              <span class="text-sm font-medium">Acreage Properties</span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-display mb-4">
              Homes with Land
              <span class="block text-primary">in NWA</span>
            </h1>
            
            <p class="text-lg text-neutral-content/80 mb-8 max-w-lg">
              Space to breathe, room to grow. Find your perfect property with acreage in the beautiful Ozarks.
            </p>

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
              <a href="#listings" class="btn btn-primary">View Properties</a>
              <a href="#contact" class="btn btn-outline btn-neutral">Talk to an Expert</a>
            </div>
          </div>

          <div class="hidden lg:block">
            <div class="bg-base-100 rounded-2xl p-8 shadow-2xl max-w-md ml-auto">
              <h3 class="text-xl font-display mb-2">Land Property Alerts</h3>
              <p class="text-sm text-base-content/60 mb-6">Get notified of new acreage listings</p>
              <LeadForm source="land-homes" submit-label="Start My Alerts" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Property Types -->
    <section class="py-16 bg-base-200/50">
      <div class="container-custom">
        <h2 class="text-3xl font-display text-center mb-12">Types of Land Properties</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="type in propertyTypes" :key="type.title" class="p-6 bg-base-100 rounded-xl">
            <component :is="type.icon" class="w-8 h-8 text-primary mb-4" />
            <h3 class="font-display text-lg mb-2">{{ type.title }}</h3>
            <p class="text-sm text-base-content/60">{{ type.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="relative aspect-video rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" alt="Land property" class="w-full h-full object-cover" />
          </div>
          <div>
            <h2 class="text-3xl font-display mb-6">Why Buy Land in NWA?</h2>
            <div class="grid sm:grid-cols-2 gap-4">
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
          <h2 class="text-3xl font-display mb-4">Properties with Acreage</h2>
          <p class="text-base-content/60">Browse homes with land for sale</p>
        </div>
        <IdxEmbed type="search" :search-params="{ lotSize: '2acres', type: 'land' }" height="600px" />
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="py-16 bg-primary text-primary-content">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-display mb-4">Find Your Perfect Acreage</h2>
            <p class="text-primary-content/80">Land properties are unique. Let us help you find one that fits your vision.</p>
          </div>
          <div class="bg-base-100 text-base-content rounded-2xl p-8 shadow-2xl">
            <LeadForm source="land-homes-cta" submit-label="Connect with Land Expert" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
