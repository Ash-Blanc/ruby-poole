<script setup lang="ts">
import { TrendingUp, Home, DollarSign, Award, ShieldCheck, Users } from 'lucide-vue-next'

const stats = [
  { value: '11', label: 'Years Experience', icon: Award, description: 'Trusted expertise' },
  { value: '160', label: 'Sales This Year', icon: Home, description: 'In the last 12 months' },
  { value: '1,274+', label: 'Total Homes Sold', icon: TrendingUp, description: 'Career achievements' },
  { value: '$432K', label: 'Average Price', icon: DollarSign, description: 'Median sale value' },
]
</script>

<template>
  <section class="bg-neutral text-neutral-content">
    <div class="container-custom">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="text-center lg:text-left group"
        >
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 text-primary mb-5 group-hover:scale-110 transition-transform">
            <component :is="stat.icon" class="w-7 h-7" :stroke-width="1.75" />
          </div>
          <div class="font-display text-4xl lg:text-5xl mb-2">{{ stat.value }}</div>
          <div class="text-lg font-medium mb-1">{{ stat.label }}</div>
          <div class="text-sm text-neutral-content/60">{{ stat.description }}</div>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-16 pt-10 border-t border-neutral-content/10">
        <div class="flex items-center gap-2 text-sm text-neutral-content/70">
          <ShieldCheck class="w-5 h-5 text-success" />
          <span>Licensed & Insured</span>
        </div>
        <div class="flex items-center gap-2 text-sm text-neutral-content/70">
          <Award class="w-5 h-5 text-warning" />
          <span>Top Producer Award</span>
        </div>
        <div class="flex items-center gap-2 text-sm text-neutral-content/70">
          <Users class="w-5 h-5 text-info" />
          <span>9-Member Expert Team</span>
        </div>
      </div>
    </div>
  </section>
</template>
