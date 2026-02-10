<script setup lang="ts">
import { ArrowRight, GraduationCap } from 'lucide-vue-next'

interface HubCard {
  title: string
  subtitle: string
  href: string
  image: string
}

const lifestyleHubs: HubCard[] = [
  {
    title: 'Lake & Waterfront Homes',
    subtitle: 'Beaver Lake, Bella Vista Lakes & waterfront living',
    href: '/homes/lake-homes',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    title: 'New Construction Homes',
    subtitle: 'Modern builds & builder communities',
    href: '/homes/new-construction',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    title: 'Homes Near Bike Trails',
    subtitle: 'NWA trail system & outdoor living',
    href: '/homes/bike-trails',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  },
  {
    title: 'Condos & Townhomes',
    subtitle: 'Low-maintenance living in NWA',
    href: '/homes/condos-townhomes',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  },
  {
    title: 'Downtown Bentonville Living',
    subtitle: 'Walkable, vibrant & culturally rich',
    href: '/bentonville/downtown-bentonville',
    image: 'https://images.unsplash.com/photo-1573152143286-0c422b4d2175?w=800&q=80',
  },
]

const cityHubs: HubCard[] = [
  {
    title: 'Bentonville',
    subtitle: 'Innovation HQ',
    href: '/bentonville',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
  },
  {
    title: 'Bella Vista',
    subtitle: 'Golf & lake living',
    href: '/bella-vista',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
  },
  {
    title: 'Rogers',
    subtitle: 'Lake & family life',
    href: '/rogers',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
  },
  {
    title: 'Springdale',
    subtitle: 'Most affordable',
    href: '/springdale',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
  },
  {
    title: 'Fayetteville',
    subtitle: 'Arts & university',
    href: '/fayetteville',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80',
  },
  {
    title: 'Centerton',
    subtitle: 'Family-friendly growth',
    href: '/centerton',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
]
</script>

<template>
  <section class="py-20 bg-base-100">
    <div class="container-custom">
      <!-- Lifestyle Discovery Hubs -->
      <div class="section-header">
        <h2>Discover NWA Neighborhoods</h2>
        <p>
          Explore Northwest Arkansas by lifestyle, property type, or city —
          find the neighborhood that fits your life.
        </p>
      </div>

      <!-- Lifestyle Hubs - Tier 1 Visual Tiles -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        <RouterLink
          v-for="card in lifestyleHubs"
          :key="card.title"
          :to="card.href"
          class="feature-card feature-card-lg"
        >
          <img :src="card.image" :alt="card.title" loading="lazy" />
          <div class="card-overlay">
            <div class="card-title">{{ card.title }}</div>
            <div class="card-subtitle">{{ card.subtitle }}</div>
          </div>
        </RouterLink>
      </div>

      <!-- City Discovery Hubs -->
      <h3 class="text-xl font-display text-center mb-5 text-base-content/80">Explore by City</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <RouterLink
          v-for="card in cityHubs"
          :key="card.title"
          :to="card.href"
          class="feature-card feature-card-sm"
        >
          <img :src="card.image" :alt="card.title" loading="lazy" />
          <div class="card-overlay">
            <div class="card-title">{{ card.title }}</div>
            <div class="card-subtitle">{{ card.subtitle }}</div>
          </div>
        </RouterLink>
      </div>

      <!-- Secondary CTAs -->
      <div class="flex flex-wrap justify-center gap-4 mt-10">
        <RouterLink to="/school-districts" class="btn btn-outline gap-2">
          <GraduationCap class="w-4 h-4" />
          Search by School District
        </RouterLink>
        <RouterLink to="/moving-to-nwa" class="btn btn-outline gap-2">
          New to NWA? Start Here
          <ArrowRight class="w-4 h-4" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
