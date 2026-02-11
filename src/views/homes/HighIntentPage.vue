<script setup lang="ts">
import { DollarSign, Home, TreePine, Car, Waves, ArrowRight, Check } from 'lucide-vue-next'
import type { Component } from 'vue'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'
import IdxEmbed from '@/components/IdxEmbed.vue'

const props = defineProps<{
    intentType: string
}>()

interface IntentConfig {
    title: string
    subtitle: string
    description: string
    seoTitle: string
    seoDescription: string
    canonical: string
    icon: Component
    image: string
    features: string[]
    faqs: { q: string; a: string }[]
}

const configs: Record<string, IntentConfig> = {
    'under-400k': {
        title: 'Homes Under $400K',
        subtitle: 'Affordable homes in Northwest Arkansas',
        description: 'Find quality homes under $400,000 across NWA — from starter homes to move-in-ready family properties.',
        seoTitle: 'Homes Under $400K in Northwest Arkansas',
        seoDescription: 'Browse affordable homes under $400,000 in Bentonville, Rogers, Springdale, Fayetteville and more.',
        canonical: '/homes-under-400k',
        icon: DollarSign,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        features: ['Starter homes and first-time buyer options', 'Move-in-ready properties', 'Multiple NWA cities available', 'New construction under $400K', 'Great school district options', 'Investment potential'],
        faqs: [
            { q: 'Where are the most affordable homes in NWA?', a: 'Springdale and parts of Rogers typically offer the most affordable options under $400K, with growing neighborhoods and good school access.' },
            { q: 'Can I find new construction under $400K?', a: 'Yes — several builders in Centerton, Springdale, and parts of Rogers offer new construction homes in the $300K-$400K range.' },
        ],
    },
    'one-level': {
        title: 'One-Level Homes',
        subtitle: 'Single-story living in NWA',
        description: 'Browse ranch-style and single-story homes — perfect for accessibility, aging in place, or simply preferring one-level living.',
        seoTitle: 'One-Level Homes in Northwest Arkansas',
        seoDescription: 'Find single-story and ranch-style homes in NWA. Browse one-level homes in Bentonville, Rogers, and surrounding areas.',
        canonical: '/one-level-homes',
        icon: Home,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
        features: ['No-stairs living', 'Ideal for aging in place', 'Open floor plan options', 'Low maintenance designs', 'Wide doorways and accessibility', 'Single-level master suites'],
        faqs: [
            { q: 'Are one-level homes more expensive?', a: 'One-level homes can carry a slight premium due to larger lot requirements, but NWA has great options at various price points.' },
            { q: 'Where can I find ranch-style homes?', a: 'Bella Vista, Centerton, and parts of Rogers have the highest concentration of one-level and ranch-style homes.' },
        ],
    },
    'acreage': {
        title: 'Homes with 1+ Acres',
        subtitle: 'Space and privacy in NWA',
        description: 'Find homes with land — from 1 acre to 50+ acres across every NWA city. Enjoy privacy, space, and the Ozark lifestyle.',
        seoTitle: 'Homes with 1+ Acres in Northwest Arkansas',
        seoDescription: 'Find homes with acreage and land in NWA. Browse properties with 1+ acres in Bentonville, Rogers, and surrounding areas.',
        canonical: '/homes-with-acreage',
        icon: TreePine,
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
        features: ['1 to 50+ acre properties', 'Privacy and space', 'Horse-friendly properties available', 'Custom build opportunities', 'Scenic Ozark views', 'Multiple cities and price ranges'],
        faqs: [
            { q: 'Where can I find homes with land in NWA?', a: 'Western Benton County, eastern Washington County, and rural areas around Centerton and Gravette offer the most land options.' },
            { q: 'Can I build on raw land?', a: 'Yes — many acreage listings include buildable lots. We can connect you with builders who specialize in custom homes on land.' },
        ],
    },
    '3-car-garage': {
        title: '3+ Car Garage Homes',
        subtitle: 'Oversized garages in NWA',
        description: 'Find homes with 3+ car garages — ideal for car enthusiasts, workshop space, or extra storage.',
        seoTitle: '3+ Car Garage Homes in Northwest Arkansas',
        seoDescription: 'Browse homes with oversized garages in NWA. Find 3+ car garage homes in Bentonville, Rogers, and surrounding areas.',
        canonical: '/homes-3-car-garage',
        icon: Car,
        image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1200&q=80',
        features: ['3+ car attached garages', 'Workshop and hobby space', 'RV and boat storage options', 'Heated and finished garage options', 'New construction with oversized garages', 'Multiple price ranges'],
        faqs: [
            { q: 'Are 3-car garages common in NWA?', a: 'They are increasingly common in newer construction, especially in Bentonville, Rogers, and Centerton subdivisions.' },
            { q: 'Can I find homes with detached workshops?', a: 'Yes — many homes with land also include detached shops and outbuildings, especially in more rural areas.' },
        ],
    },
    'pool': {
        title: 'Homes with a Pool',
        subtitle: 'Pool homes in Northwest Arkansas',
        description: 'Find homes with swimming pools — from in-ground pools to resort-style backyards across NWA.',
        seoTitle: 'Homes with a Pool in Northwest Arkansas',
        seoDescription: 'Find homes with swimming pools in NWA. Browse pool homes in Bentonville, Rogers, and surrounding areas.',
        canonical: '/homes-with-pool',
        icon: Waves,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
        features: ['In-ground swimming pools', 'Resort-style backyards', 'Heated pool options', 'Pool and spa combos', 'Fenced and private yards', 'Multiple price ranges'],
        faqs: [
            { q: 'How much does pool maintenance cost in NWA?', a: 'Expect $100-$200/month for routine pool maintenance in NWA, with seasonal opening/closing costs.' },
            { q: 'Do pools add home value in NWA?', a: 'Pools can add value, especially in the $400K+ price range where buyers increasingly expect outdoor amenities.' },
        ],
    },
}

const config = (configs[props.intentType] || configs['under-400k']) as IntentConfig
</script>

<template>
    <SeoHead :title="config.seoTitle" :description="config.seoDescription" :canonical="config.canonical" />

    <main>
        <!-- Hero -->
        <section class="relative min-h-[50vh] flex items-center overflow-hidden">
            <div class="absolute inset-0">
                <img :src="config.image" :alt="config.title" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-r from-neutral/90 via-neutral/70 to-transparent"></div>
            </div>

            <div class="container-custom relative z-10 py-16">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div class="text-neutral-content">
                        <div class="flex items-center gap-2 mb-4">
                            <component :is="config.icon" class="w-5 h-5 text-primary" />
                            <span class="text-sm font-medium">{{ config.subtitle }}</span>
                        </div>

                        <h1 class="text-4xl md:text-5xl font-display mb-4">
                            {{ config.title }}
                            <span class="block text-primary text-3xl mt-2">in NWA</span>
                        </h1>

                        <p class="text-lg text-neutral-content/80 mb-8 max-w-lg">
                            {{ config.description }}
                        </p>

                        <div class="flex flex-wrap gap-3">
                            <a href="#listings" class="btn btn-primary gap-2">
                                View Listings
                                <ArrowRight class="w-4 h-4" />
                            </a>
                            <a href="#contact" class="btn btn-outline btn-neutral">Talk to an Expert</a>
                        </div>
                    </div>

                    <div class="hidden lg:block">
                        <div class="bg-base-100 rounded-2xl p-8 shadow-2xl max-w-md ml-auto">
                            <h3 class="text-xl font-display mb-2">Get Personalized Matches</h3>
                            <p class="text-sm text-base-content/60 mb-6">Tell us what you're looking for</p>
                            <LeadForm :source="intentType" submit-label="Find My Home" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="py-16 bg-base-200/50">
            <div class="container-custom">
                <h2 class="text-3xl font-display text-center mb-12">What You'll Find</h2>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    <div v-for="(feature, idx) in config.features" :key="idx"
                        class="flex items-start gap-3 p-4 bg-base-100 rounded-xl">
                        <Check class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span class="text-base-content/80">{{ feature }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Listings -->
        <section id="listings" class="py-16">
            <div class="container-custom">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-display mb-4">{{ config.title }}</h2>
                    <p class="text-base-content/60">Browse available properties matching your criteria</p>
                </div>
                <IdxEmbed type="search" :search-params="{ type: intentType }" height="600px" />
            </div>
        </section>

        <!-- FAQ -->
        <section class="py-16 bg-base-200/50">
            <div class="container-custom max-w-3xl">
                <h2 class="text-3xl font-display text-center mb-8">Frequently Asked Questions</h2>
                <div class="space-y-4">
                    <div v-for="(faq, idx) in config.faqs" :key="idx" class="collapse collapse-arrow bg-base-100">
                        <input type="radio" name="faq" :checked="idx === 0" />
                        <div class="collapse-title font-display text-lg">{{ faq.q }}</div>
                        <div class="collapse-content text-base-content/70">
                            <p>{{ faq.a }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section id="contact" class="py-16 bg-primary text-primary-content">
            <div class="container-custom">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-display mb-4">Ready to Find Your Home?</h2>
                        <p class="text-primary-content/80">Tell us what matters most — we'll match you with the right
                            properties.</p>
                    </div>
                    <div class="bg-base-100 text-base-content rounded-2xl p-8 shadow-2xl">
                        <LeadForm :source="`${intentType}-cta`" submit-label="Connect with Expert" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Last updated -->
        <div class="container-custom py-4 text-center">
            <time class="text-xs text-base-content/40" datetime="2025-02-10">Last updated: February 2025</time>
        </div>
    </main>
</template>
