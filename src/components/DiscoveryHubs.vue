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
        image: '/images/lake_home.jpg',
    },
    {
        title: 'New Construction Homes',
        subtitle: 'Modern builds & builder communities',
        href: '/homes/new-construction',
        image: '/images/new_construction.jpg',
    },
    {
        title: 'Homes Near Bike Trails',
        subtitle: 'NWA trail system & outdoor living',
        href: '/homes/bike-trails',
        image: '/images/bike_trails.jpg',
    },
    {
        title: 'Condos & Townhomes',
        subtitle: 'Low-maintenance living in NWA',
        href: '/homes/condos-townhomes',
        image: '/images/condos.jpg',
    },
    {
        title: 'Downtown Bentonville Living',
        subtitle: 'Walkable, vibrant & culturally rich',
        href: '/bentonville/downtown-bentonville',
        image: '/images/downtown.jpg',
    },
]

const cityHubs: HubCard[] = [
    {
        title: 'Bentonville',
        subtitle: 'Innovation HQ',
        href: '/bentonville',
        image: '/images/bentonville.jpg',
    },
    {
        title: 'Bella Vista',
        subtitle: 'Golf & lake living',
        href: '/bella-vista',
        image: '/images/bellavista.jpg',
    },
    {
        title: 'Rogers',
        subtitle: 'Lake & family life',
        href: '/rogers',
        image: '/images/rogers.jpg',
    },
    {
        title: 'Springdale',
        subtitle: 'Most affordable',
        href: '/springdale',
        image: '/images/springdale.jpg',
    },
    {
        title: 'Fayetteville',
        subtitle: 'Arts & university',
        href: '/fayetteville',
        image: '/images/fayetteville.jpg',
    },
    {
        title: 'Centerton',
        subtitle: 'Family-friendly growth',
        href: '/centerton',
        image: '/images/hero.jpg',
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
                <RouterLink v-for="card in lifestyleHubs" :key="card.title" :to="card.href"
                    class="feature-card feature-card-lg">
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
                <RouterLink v-for="card in cityHubs" :key="card.title" :to="card.href"
                    class="feature-card feature-card-sm">
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
