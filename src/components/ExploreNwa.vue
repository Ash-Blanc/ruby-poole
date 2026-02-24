<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

interface FeatureCard {
  title: string
  subtitle: string
  href: string
  image: string
  size: 'lg' | 'sm'
}

const featureCards: FeatureCard[] = [
  {
    title: 'Downtown Bentonville',
    subtitle: 'Walkable charm & world-class culture',
    href: '/bentonville/downtown-bentonville',
    image: '/images/fayetteville.jpg',
    size: 'lg',
  },
  {
    title: 'Waterfront & Lake Homes',
    subtitle: 'Beaver Lake, Table Rock & more',
    href: '/homes/lake-homes',
    image: '/images/bentonville.jpg',
    size: 'lg',
  },
  {
    title: 'New Construction',
    subtitle: 'Modern builds & builder communities',
    href: '/homes/new-construction',
    image: '/images/fayetteville.jpg',
    size: 'lg',
  },
  {
    title: 'Luxury Homes',
    subtitle: 'Premium properties & estates',
    href: '/homes/luxury',
    image: '/images/rogers.jpg',
    size: 'lg',
  },
  {
    title: 'Homes with Land',
    subtitle: '1+ to 50+ acres available',
    href: '/homes/land',
    image: '/images/bentonville.jpg',
    size: 'lg',
  },
  /* {
    title: 'Condos & Townhomes',
    subtitle: 'Low-maintenance living',
    href: '/homes/condos-townhomes',
    image: '/images/hero.jpg',
    size: 'lg',
  }, */
]

const cityCards: FeatureCard[] = [
  {
    title: 'Bella Vista',
    subtitle: 'Golf & lake living',
    href: '/bella-vista',
    image: '/images/hero.jpg',
    size: 'sm',
  },
  {
    title: 'Bentonville',
    subtitle: 'Innovation HQ',
    href: '/bentonville',
    image: '/images/hero.jpg',
    size: 'sm',
  },
  {
    title: 'Centerton',
    subtitle: 'Family-friendly growth',
    href: '/centerton',
    image: '/images/hero.jpg',
    size: 'sm',
  },
  {
    title: 'Rogers',
    subtitle: 'Lake & family life',
    href: '/rogers',
    image: '/images/bentonville.jpg',
    size: 'sm',
  },
  {
    title: 'Springdale',
    subtitle: 'Most affordable',
    href: '/springdale',
    image: '/images/fayetteville.jpg',
    size: 'sm',
  },
  {
    title: 'Fayetteville',
    subtitle: 'Arts & university',
    href: '/fayetteville',
    image: '/images/hero.jpg',
    size: 'sm',
  },
]
</script>

<template>
  <section class="py-20 bg-base-100">
    <div class="container-custom">
      <div class="section-header">
        <h2>Explore Northwest Arkansas</h2>
        <p>
          Northwest Arkansas is located in the Ozarks — where natural beauty meets vibrant downtowns 
          and Main Street communities. Discover the area that's right for you.
        </p>
      </div>

      <!-- Priority Feature Cards - Large Tiles -->
      <div class="flex flex-wrap justify-center gap-5 mb-8">
        <RouterLink
          v-for="card in featureCards"
          :key="card.title"
          :to="card.href"
          class="feature-card feature-card-lg w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.25rem)]"
        >
          <img :src="card.image" :alt="card.title" loading="lazy" />
          <div class="card-overlay">
            <div class="card-title">{{ card.title }}</div>
            <div class="card-subtitle">{{ card.subtitle }}</div>
          </div>
        </RouterLink>
      </div>

      <!-- City Cards - Slightly Smaller Tiles -->
      <h3 class="text-xl font-display text-center mb-5 text-base-content/80">Explore by City</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <RouterLink
          v-for="card in cityCards"
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

      <div class="text-center mt-10">
        <RouterLink to="/moving-to-nwa" class="btn btn-outline gap-2">
          New to NWA? Start Here
          <ArrowRight class="w-4 h-4" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
