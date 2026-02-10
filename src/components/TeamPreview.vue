<script setup lang="ts">
import { Award, TrendingUp, Users, ArrowRight, MapPin } from 'lucide-vue-next'

const stats = [
  { value: '11+', label: 'Years Experience', icon: Award },
  { value: '1,274+', label: 'Homes Sold', icon: TrendingUp },
  { value: '7', label: 'Team Members', icon: Users },
]
</script>

<template>
  <section class="py-16">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div>
          <div class="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
            <MapPin class="w-4 h-4" />
            <span>Northwest Arkansas</span>
          </div>
          
          <h2 class="text-3xl md:text-4xl font-display mb-4">
            Real Estate Services by
            <span class="text-primary">The Ruby Poole Team</span>
          </h2>
          
          <p class="text-base-content/70 mb-6 leading-relaxed">
            NWA Neighborhoods is powered by The Ruby Poole Team at Collier &amp; Associates — your trusted real estate experts in Northwest Arkansas. 
            With deep roots in the community and 11+ years of local expertise, we help families find their perfect neighborhood in NWA.
          </p>
          
          <p class="text-base-content/60 mb-8 text-sm leading-relaxed">
            Whether you're relocating to NWA, upgrading your home, or looking for land and lake properties — 
            our team provides full-service, personalized guidance from search to close.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 mb-8">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                <component :is="stat.icon" class="w-6 h-6 text-primary" />
              </div>
              <div class="text-2xl font-display text-base-content">{{ stat.value }}</div>
              <div class="text-xs text-base-content/60 mt-1">{{ stat.label }}</div>
            </div>
          </div>

          <RouterLink to="/team" class="btn btn-outline gap-2">
            Meet the Full Team
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </div>

        <!-- Image/Visual -->
        <div class="relative">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
              alt="The Ruby Poole Team"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <!-- Decorative badge -->
          <div class="absolute -bottom-4 -left-4 bg-primary text-primary-content rounded-xl p-4 shadow-lg">
            <div class="text-2xl font-display">5.0</div>
            <div class="text-xs">★★★★★</div>
            <div class="text-xs opacity-80 mt-0.5">35 Reviews</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
