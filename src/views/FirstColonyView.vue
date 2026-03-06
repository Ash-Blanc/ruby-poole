<script setup lang="ts">
import { Star, Phone, Mail, Award, ArrowRight } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'
import FirstColonyIcon from '@/components/icons/FirstColonyIcon.vue'

const teamMembers = [
    {
        slug: 'stephanie-bevard',
        name: 'Stephanie Bevard',
        title: 'Mortgage Expert',
        bio: 'With over three decades of experience in the mortgage industry, I began my career in 1990 and have been helping families achieve homeownership ever since. Having witnessed the evolution of lending firsthand, I bring seasoned expertise, steady leadership, and proven strategies to guide buyers and sellers through every type of market.',
        image: '/images/stephanie.png',
        specialties: ['Mortgages', 'Homeownership Experience'],
        rating: 5.0,
        reviews: 0,
        phone: '(801) 361-7433',
        email: 'stephanie@rubypoole.com',
    },
    {
        slug: 'brandon-bevard',
        name: 'Brandon Bevard',
        title: 'Mortgage Expert',
        bio: 'I joined the mortgage industry in 2017, bringing with me a background in construction that shaped my appreciation for teamwork, attention to detail, and creative problem-solving. I spent four years as a Loan Officer Assistant on a $100 million-per-year producing team, where I was exposed to a wide range of unique and complex lending scenarios.',
        image: '/images/brandon.png',
        specialties: ['Mortgages', 'Home Financing'],
        rating: 5.0,
        reviews: 0,
        phone: '(801) 361-6034',
        email: 'brandon@rubypoole.com',
    },
    {
        slug: 'matt-harris',
        name: 'Matt Harris',
        title: 'Loan Officer, NMLS#218374',
        bio: 'Matt Harris is a Loan Officer at First Colony Mortgage. His biography is coming soon.',
        image: '/images/matt.png',
        specialties: ['Mortgages'],
        rating: 5.0,
        reviews: 0,
        phone: '(530) 306-2447',
        email: 'matt@rubypoole.com',
    },
    {
        slug: 'jada-atwood',
        name: 'Jada Atwood',
        title: 'LOA, NMLS#2127779',
        bio: 'Jada Atwood is a Loan Officer Assistant at First Colony Mortgage. Her biography is coming soon.',
        image: '/images/jada.png',
        specialties: ['Loan Officer Assistant'],
        rating: 5.0,
        reviews: 0,
        phone: '(801) 400-0193',
        email: 'jada@rubypoole.com',
    }
]
</script>

<template>
    <SeoHead title="First Colony Mortgage Team"
        description="Meet the First Colony Mortgage team. Experienced loan officers and mortgage experts."
        canonical="/first-colony" />

    <main>
        <!-- Hero -->
        <section class="py-20 bg-gradient-to-br from-base-100 via-base-200/50 to-primary/5">
            <div class="container-custom">
                <div class="text-center max-w-3xl mx-auto flex flex-col items-center">
                    <div class="mb-10 w-full max-w-sm">
                        <a href="https://firstcolonymortgage.com/location/arkansas/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/logos/First-Colony-Mortgage-Logo-NMLS.png" alt="First Colony Mortgage Equal Housing Logo" class="w-full h-auto object-contain drop-shadow-sm hover:opacity-90 transition-opacity" />
                        </a>
                    </div>

                    <h1 class="text-4xl md:text-5xl font-display mb-6">
                        Meet the <span class="text-primary">Mortgage Team</span>
                    </h1>

                    <p class="text-lg text-base-content/70 mb-8">
                        The First Colony Mortgage team is committed to delivering a professional,
                        efficient, and personalized home financing experience to help you move forward with confidence.
                    </p>
                </div>
            </div>
        </section>

        <!-- Team Grid -->
        <section class="py-16">
            <div class="container-custom">
                <div class="grid md:grid-cols-2 gap-8">
                    <RouterLink v-for="member in teamMembers" :key="member.slug" :to="`/team/${member.slug}`"
                        class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow group overflow-hidden">
                        <div class="flex flex-col sm:flex-row">
                            <!-- Image -->
                            <div class="sm:w-48 h-48 sm:h-auto flex-shrink-0 bg-base-200 overflow-hidden">
                                <img :src="member.image" :alt="member.name"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>

                            <!-- Content -->
                            <div class="card-body p-6">
                                <div class="flex items-center gap-2 mb-1">
                                    <h3 class="font-display text-xl group-hover:text-primary transition-colors">{{
                                        member.name }}</h3>
                                </div>
                                <p class="text-sm text-primary font-medium mb-3">{{ member.title }}</p>

                                <!-- Rating -->
                                <div class="flex items-center gap-2 mb-3">
                                    <template v-if="member.reviews > 0">
                                        <div class="flex">
                                            <Star v-for="i in 5" :key="i" class="w-4 h-4 text-warning fill-warning" />
                                        </div>
                                        <span class="text-sm text-base-content/60">{{ member.reviews }} reviews</span>
                                    </template>
                                    <span v-else class="text-sm text-base-content/60">No reviews yet</span>
                                </div>

                                <!-- Specialties -->
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span v-for="specialty in member.specialties" :key="specialty"
                                        class="badge badge-sm badge-ghost">
                                        {{ specialty }}
                                    </span>
                                </div>

                                <div class="text-primary text-sm font-medium flex items-center gap-1 mt-auto">
                                    View Profile
                                    <ArrowRight class="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-16 bg-base-200/50">
            <div class="container-custom">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl font-display mb-4">Ready to Get Started?</h2>
                        <p class="text-base-content/70 mb-6">
                            Whether you're buying, refinancing, or exploring options, we're here to help. Reach out today for a no-obligation consultation.
                        </p>
                        <div class="flex items-center gap-4 text-base-content/60">
                            <div class="flex flex-col gap-3">
                                <div class="flex items-center gap-2">
                                    <Phone class="w-4 h-4" />
                                    <span>(801) 361-7433</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <Mail class="w-4 h-4" />
                                    <span>stephanie@rubypoole.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-base-100 rounded-2xl p-8 shadow-lg">
                        <h3 class="font-display text-xl mb-4">Contact First Colony</h3>
                        <LeadForm source="first-colony-page" submit-label="Send Message" />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
