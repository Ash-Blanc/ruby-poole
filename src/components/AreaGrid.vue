<script setup lang="ts">
import { Home, TrendingUp, Users, ArrowRight } from 'lucide-vue-next'

const areas = [
    {
        name: 'Bentonville',
        tagline: 'HQ of Innovation',
        avgPrice: '$425K',
        growth: '+8%',
        href: '/bentonville',
        image: '/images/bentonville.jpg'
    },
    {
        name: 'Rogers',
        tagline: 'Lake & Family Life',
        avgPrice: '$380K',
        growth: '+6%',
        href: '/rogers',
        image: '/images/rogers.jpg'
    },
    {
        name: 'Bella Vista',
        tagline: 'Golf & Retirement',
        avgPrice: '$320K',
        growth: '+7%',
        href: '/bella-vista',
        image: '/images/bellavista.jpg'
    },
    {
        name: 'Fayetteville',
        tagline: 'Arts & University',
        avgPrice: '$395K',
        growth: '+5%',
        href: '/fayetteville',
        image: '/images/fayetteville.jpg'
    },
    {
        name: 'Springdale',
        tagline: 'Most Affordable',
        avgPrice: '$295K',
        growth: '+9%',
        href: '/springdale',
        image: '/images/springdale.jpg'
    },
]
</script>

<template>
    <section class="py-20">
        <div class="container-custom">
            <div class="section-header">
                <h2>Explore Northwest Arkansas</h2>
                <p>Find your perfect city in one of America's fastest-growing regions</p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <RouterLink v-for="area in areas" :key="area.name" :to="area.href"
                    class="card bg-base-100 overflow-hidden group hover:shadow-xl transition-shadow">
                    <figure class="aspect-[4/3] overflow-hidden">
                        <img :src="area.image" :alt="area.name"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </figure>
                    <div class="card-body p-4">
                        <h3 class="font-display text-lg group-hover:text-primary transition-colors">{{ area.name }}</h3>
                        <p class="text-xs text-base-content/60 mb-2">{{ area.tagline }}</p>
                        <div class="flex justify-between text-xs">
                            <span class="flex items-center gap-1">
                                <Home class="w-3 h-3" />
                                {{ area.avgPrice }}
                            </span>
                            <span class="flex items-center gap-1 text-success">
                                <TrendingUp class="w-3 h-3" />
                                {{ area.growth }}
                            </span>
                        </div>
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
