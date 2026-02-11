<script setup lang="ts">
import { Bike, TreePine, Mountain, MapPin, Check } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'
import IdxEmbed from '@/components/IdxEmbed.vue'

const highlights = [
    { icon: Bike, label: 'Trail Miles', value: '500+' },
    { icon: TreePine, label: 'Trail Systems', value: '6+' },
    { icon: Mountain, label: 'Terrain Types', value: 'All' },
]

const trailAreas = [
    { name: 'Slaughter Pen / Coler Mountain', city: 'Bentonville', description: 'World-class mountain biking with jumps, flow trails, and technical features.' },
    { name: 'Kessler Mountain', city: 'Fayetteville', description: 'Forested trails with elevation and scenic views of the Ozarks.' },
    { name: 'Lake Leatherwood', city: 'Eureka Springs', description: 'Natural surface trails around a scenic lake — perfect for families.' },
    { name: 'Razorback Greenway', city: 'NWA-Wide', description: '36-mile paved trail connecting Bentonville to Fayetteville through all major NWA cities.' },
    { name: 'Lake Bella Vista Trails', city: 'Bella Vista', description: 'Multi-use trails around the Bella Vista lakes and Back 40 system.' },
    { name: 'Monument Trails', city: 'Various', description: 'Purpose-built trails at Devil\'s Den and Hobbs state parks.' },
]

const benefits = [
    'Minutes from world-class mountain biking',
    'Razorback Greenway connectivity',
    'Outdoor lifestyle with property value upside',
    'Family-friendly paved and natural trails',
    'Active community events and group rides',
    'Proximity to parks, nature, and open space',
]
</script>

<template>
    <SeoHead title="Homes Near Bike Trails in Northwest Arkansas"
        description="Find homes near the NWA trail system. Explore bike-friendly neighborhoods in Bentonville, Bella Vista, Rogers, Fayetteville and more."
        canonical="/homes/bike-trails" />

    <main>
        <!-- Hero -->
        <section class="relative min-h-[60vh] flex items-center overflow-hidden">
            <div class="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1596727147705-54a7128052a9?q=80&w=1200&auto=format&fit=crop"
                    alt="Mountain biking trail in Northwest Arkansas" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-r from-neutral/90 via-neutral/70 to-transparent"></div>
            </div>

            <div class="container-custom relative z-10 py-16">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div class="text-neutral-content">
                        <div class="flex items-center gap-2 mb-4">
                            <Bike class="w-5 h-5 text-primary" />
                            <span class="text-sm font-medium">Trail-Friendly Living</span>
                        </div>

                        <h1 class="text-4xl md:text-5xl font-display mb-4">
                            Homes Near
                            <span class="block text-primary">Bike Trails</span>
                        </h1>

                        <p class="text-lg text-neutral-content/80 mb-8 max-w-lg">
                            Northwest Arkansas has 500+ miles of world-class trails. Find a home where the trailhead is
                            your backyard.
                        </p>

                        <div class="grid grid-cols-3 gap-4 mb-8">
                            <div v-for="stat in highlights" :key="stat.label"
                                class="text-center p-4 bg-neutral-content/10 rounded-xl backdrop-blur-sm">
                                <component :is="stat.icon" class="w-5 h-5 mx-auto mb-2 text-primary" />
                                <div class="text-xl font-display">{{ stat.value }}</div>
                                <div class="text-xs text-neutral-content/60">{{ stat.label }}</div>
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-3">
                            <a href="#listings" class="btn btn-primary">View Trail Homes</a>
                            <a href="#contact" class="btn btn-outline btn-neutral">Talk to an Expert</a>
                        </div>
                    </div>

                    <div class="hidden lg:block">
                        <div class="bg-base-100 rounded-2xl p-8 shadow-2xl max-w-md ml-auto">
                            <h3 class="text-xl font-display mb-2">Trail Home Alerts</h3>
                            <p class="text-sm text-base-content/60 mb-6">Get notified when trail-area homes hit the
                                market</p>
                            <LeadForm source="bike-trails" submit-label="Start My Alerts" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Trail Areas -->
        <section class="py-16 bg-base-200/50">
            <div class="container-custom">
                <h2 class="text-3xl font-display text-center mb-12">Featured Trail Areas</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="area in trailAreas" :key="area.name" class="p-6 bg-base-100 rounded-xl">
                        <div class="flex items-center gap-2 mb-2">
                            <MapPin class="w-4 h-4 text-primary" />
                            <span class="text-xs text-base-content/50">{{ area.city }}</span>
                        </div>
                        <h3 class="font-display text-lg mb-2">{{ area.name }}</h3>
                        <p class="text-sm text-base-content/60">{{ area.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Benefits -->
        <section class="py-16">
            <div class="container-custom">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl font-display mb-6">Why Live Near Trails?</h2>
                        <p class="text-base-content/60 mb-6">NWA's trail system is one of the best in the country — and
                            living near it means an unmatched quality of life.</p>
                        <div class="space-y-3">
                            <div v-for="(benefit, idx) in benefits" :key="idx" class="flex items-start gap-3">
                                <Check class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <span class="text-base-content/80">{{ benefit }}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&q=80"
                            alt="Cycling trail in Northwest Arkansas" class="rounded-2xl shadow-lg w-full"
                            loading="lazy" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Listings -->
        <section id="listings" class="py-16 bg-base-200/50">
            <div class="container-custom">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-display mb-4">Homes Near Trails</h2>
                    <p class="text-base-content/60">Browse homes in trail-accessible neighborhoods</p>
                </div>
                <IdxEmbed type="search" :search-params="{ type: 'bike-trails' }" height="600px" />
            </div>
        </section>

        <!-- FAQ -->
        <section class="py-16">
            <div class="container-custom max-w-3xl">
                <h2 class="text-3xl font-display text-center mb-8">Frequently Asked Questions</h2>
                <div class="space-y-4">
                    <div class="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq" checked />
                        <div class="collapse-title font-display text-lg">What trails are near homes in Bentonville?
                        </div>
                        <div class="collapse-content text-base-content/70">
                            <p>Bentonville is home to Slaughter Pen, Coler Mountain, and connects to the Razorback
                                Greenway. Many neighborhoods in north and west Bentonville offer direct trail access.
                            </p>
                        </div>
                    </div>
                    <div class="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq" />
                        <div class="collapse-title font-display text-lg">Does trail proximity affect home value?</div>
                        <div class="collapse-content text-base-content/70">
                            <p>Yes — properties within a short walk or ride of established trails consistently see
                                higher demand and stronger appreciation in NWA.</p>
                        </div>
                    </div>
                    <div class="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq" />
                        <div class="collapse-title font-display text-lg">Are there paved trails for families?</div>
                        <div class="collapse-content text-base-content/70">
                            <p>Absolutely. The Razorback Greenway is a 36-mile paved trail running through all major NWA
                                cities, ideal for walking, running, and family cycling.</p>
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
                        <h2 class="text-3xl md:text-4xl font-display mb-4">Find Your Trail Home</h2>
                        <p class="text-primary-content/80">We'll help you find a home where outdoor living is at your
                            doorstep.</p>
                    </div>
                    <div class="bg-base-100 text-base-content rounded-2xl p-8 shadow-2xl">
                        <LeadForm source="bike-trails-cta" submit-label="Connect with Expert" />
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
