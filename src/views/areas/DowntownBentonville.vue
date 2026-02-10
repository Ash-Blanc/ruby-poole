<script setup lang="ts">
import { MapPin, Home, TrendingUp, Utensils, Palette, Trees, Check } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'
import IdxEmbed from '@/components/IdxEmbed.vue'

const highlights = [
  { icon: Home, label: 'Avg Price', value: '$525K' },
  { icon: TrendingUp, label: 'Growth', value: '+12%' },
  { icon: Utensils, label: 'Restaurants', value: '100+' },
]

const attractions = [
  { icon: Palette, title: 'Crystal Bridges Museum', description: 'World-class art museum set in stunning Ozark architecture, free to the public.' },
  { icon: Utensils, title: 'The Square', description: 'Historic downtown square with local restaurants, shops, and community events.' },
  { icon: Trees, title: 'Trail System', description: 'Miles of paved trails connecting downtown to nature, parks, and neighborhoods.' },
  { icon: MapPin, title: 'Walkability', description: 'Live car-free with walkable access to dining, galleries, and entertainment.' },
]

const features = [
  'Walk to Crystal Bridges Museum of American Art',
  'Historic Bentonville Square dining and shopping',
  'Connected to 40+ miles of paved trails',
  'Growing food scene with James Beard nominees',
  'Vibrant live music and cultural events',
  'Close to top-rated schools',
]
</script>

<template>
  <SeoHead
    title="Downtown Bentonville — Living, Homes & Lifestyle"
    description="Explore downtown Bentonville living. Walk to Crystal Bridges, The Square, and a thriving food scene. Find homes near downtown with NWA Neighborhoods."
    canonical="/bentonville/downtown-bentonville"
  />

  <main>
    <!-- Hero -->
    <section class="relative min-h-[60vh] flex items-center overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1573152143286-0c422b4d2175?w=1200&q=80" 
          alt="Downtown Bentonville, Arkansas"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-neutral/90 via-neutral/70 to-transparent"></div>
      </div>

      <div class="container-custom relative z-10 py-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-neutral-content">
            <div class="flex items-center gap-2 mb-4">
              <MapPin class="w-5 h-5 text-primary" />
              <span class="text-sm font-medium text-neutral-content/80">Northwest Arkansas</span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-display mb-4">
              Downtown
              <span class="block text-primary">Bentonville</span>
            </h1>
            
            <p class="text-lg text-neutral-content/80 mb-8 max-w-lg">
              Where small-town charm meets world-class culture. Downtown Bentonville is the cultural heart of NWA — walkable, vibrant, and growing.
            </p>

            <div class="grid grid-cols-3 gap-4 mb-8">
              <div v-for="stat in highlights" :key="stat.label" class="text-center p-4 bg-neutral-content/10 rounded-xl backdrop-blur-sm">
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
              <a href="#contact" class="btn btn-outline btn-neutral">Talk to an Expert</a>
            </div>
          </div>

          <div class="hidden lg:block">
            <div class="bg-base-100 rounded-2xl p-8 shadow-2xl max-w-md ml-auto">
              <h3 class="text-xl font-display mb-2">Downtown Bentonville Alerts</h3>
              <p class="text-sm text-base-content/60 mb-6">Be the first to know about new listings near downtown</p>
              <LeadForm source="downtown-bentonville" submit-label="Start My Alerts" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Attractions -->
    <section class="py-16 bg-base-200/50">
      <div class="container-custom">
        <h2 class="text-3xl font-display text-center mb-12">What Makes Downtown Special</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="item in attractions" :key="item.title" class="p-6 bg-base-100 rounded-xl shadow-sm">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <component :is="item.icon" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="font-display text-lg mb-2">{{ item.title }}</h3>
            <p class="text-sm text-base-content/60">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-display mb-6">Living in Downtown Bentonville</h2>
            <div class="grid sm:grid-cols-2 gap-4">
              <div v-for="(feature, idx) in features" :key="idx" class="flex items-start gap-3">
                <Check class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span class="text-base-content/80">{{ feature }}</span>
              </div>
            </div>
          </div>
          <div class="relative aspect-video rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1533044309907-0fa3413da946?w=800&q=80"
              alt="Downtown Bentonville Square"
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
          <h2 class="text-3xl font-display mb-4">Downtown Bentonville Listings</h2>
          <p class="text-base-content/60">Browse homes near downtown</p>
        </div>
        <IdxEmbed type="search" :search-params="{ city: 'Bentonville', area: 'downtown' }" height="600px" />
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="py-16 bg-primary text-primary-content">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-display mb-4">Live in Downtown Bentonville</h2>
            <p class="text-primary-content/80">Properties near downtown move fast. Let us help you find the perfect home.</p>
          </div>
          <div class="bg-base-100 text-base-content rounded-2xl p-8 shadow-2xl">
            <LeadForm source="downtown-bentonville-cta" submit-label="Connect with Expert" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
