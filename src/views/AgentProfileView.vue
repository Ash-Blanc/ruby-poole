<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { Star, Phone, Mail, Award, MapPin, ArrowLeft } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'

const route = useRoute()

// Team member data (in production, this would come from an API/CMS)
interface TeamMember {
    name: string
    title: string
    bio: string
    image: string
    specialties: string[]
    rating: number
    reviews: number
    yearsExperience: number
    homesSold: number
    phone: string
    email: string
    areas: string[]
    teamName?: string
}

const teamMembers: Record<string, TeamMember> = {
    'ruby-poole': {
        name: 'Ruby Poole',
        title: 'Team Leader & Broker Associate',
        bio: 'With 11+ years of experience and over 1,274 homes sold, Ruby leads the team with passion for helping families find their perfect home in Northwest Arkansas. Known for her dedication to client service and deep knowledge of the local market, Ruby consistently ranks in the top 1% of agents in Arkansas.',
        image: '/images/fayetteville.jpg',
        specialties: ['Luxury Homes', 'Relocation', 'First-Time Buyers', 'Investment Properties'],
        rating: 5.0,
        reviews: 35,
        yearsExperience: 11,
        homesSold: 1274,
        phone: '(479) 555-0123',
        email: 'ruby@rubypoole.com',
        areas: ['Bentonville', 'Rogers', 'Bella Vista', 'Fayetteville', 'Springdale'],
    },
    'sarah-johnson': {
        name: 'Sarah Johnson',
        title: 'Buyers Agent',
        bio: 'Sarah specializes in helping first-time buyers navigate the home buying process with patience and expertise. Her attention to detail and commitment to education ensures every client feels confident in their purchase.',
        image: '/images/bellavista.jpg',
        specialties: ['First-Time Buyers', 'New Construction', 'Family Homes'],
        rating: 5.0,
        reviews: 18,
        yearsExperience: 5,
        homesSold: 120,
        phone: '(479) 555-0124',
        email: 'sarah@rubypoole.com',
        areas: ['Bentonville', 'Rogers', 'Centerton'],
    },
    'michael-davis': {
        name: 'Michael Davis',
        title: 'Listing Specialist',
        bio: 'Michael brings marketing expertise and sharp negotiation skills to help sellers get top dollar for their homes. His data-driven approach and professional network consistently deliver results.',
        image: '/images/hero.jpg',
        specialties: ['Luxury Listings', 'Investment Properties', 'Seller Representation'],
        rating: 5.0,
        reviews: 22,
        yearsExperience: 8,
        homesSold: 280,
        phone: '(479) 555-0125',
        email: 'michael@rubypoole.com',
        areas: ['Rogers', 'Bella Vista', 'Fayetteville'],
    },
    'emily-chen': {
        name: 'Emily Chen',
        title: 'Buyers Agent',
        bio: 'Emily loves connecting families with their dream homes and is known for her attention to detail and genuine care for her clients. She specializes in helping families find homes in top school districts.',
        image: '/images/bellavista.jpg',
        specialties: ['Family Homes', 'School Districts', 'Relocation'],
        rating: 5.0,
        reviews: 15,
        yearsExperience: 4,
        homesSold: 85,
        phone: '(479) 555-0126',
        email: 'emily@rubypoole.com',
        areas: ['Bentonville', 'Rogers', 'Springdale'],
    },
    'stephanie-bevard': {
        name: 'Stephanie Bevard',
        title: 'Mortgage Expert',
        teamName: 'First Colony Mortgage',
        bio: `With over three decades of experience in the mortgage industry, I began my career in 1990 and have been helping families achieve homeownership ever since. Having witnessed the evolution of lending firsthand, I bring seasoned expertise, steady leadership, and proven strategies to guide buyers and sellers through every type of market.

I’m a dedicated student of professional coaching and personal development, continually investing in skills that elevate communication, strategy, and results. My focus goes beyond transactions — I’m deeply committed to creating an exceptional client experience built on trust, education, and clear guidance. I believe informed clients make confident decisions, and my mission is to support them every step of the way.

Family is at the heart of everything I do. I’m blessed with four children and twelve grandchildren, and I’m proud to serve alongside my brother and sons as part of our Family Mortgage Team. Together, we combine experience, energy, and shared values to better serve our community.

Outside of lending, I embrace ranch life on our 240-acre ranch. The lessons learned from the land — discipline, resilience, stewardship, and long-term vision — shape how I approach both business and life. I’m grateful every day for the opportunity to serve families in achieving homeownership while living a life grounded in purpose, hard work, and gratitude.`,
        image: '/images/stephanie.png',
        specialties: ['Mortgages', 'Homeownership Experience'],
        rating: 5.0,
        reviews: 0,
        yearsExperience: 34,
        homesSold: 0,
        phone: '(801) 361-7433',
        email: 'stephanie@rubypoole.com',
        areas: ['Northwest Arkansas'],
    },
    'brandon-bevard': {
        name: 'Brandon Bevard',
        title: 'Mortgage Expert',
        teamName: 'First Colony Mortgage',
        bio: `I joined the mortgage industry in 2017, bringing with me a background in construction that shaped my appreciation for teamwork, attention to detail, and creative problem-solving. I spent four years as a Loan Officer Assistant on a $100 million-per-year producing team, where I was exposed to a wide range of unique and complex lending scenarios. That experience gave me a deep understanding of the loan process from start to finish and taught me how to anticipate challenges before they become obstacles.

Today, I focus on guiding clients through the mortgage process with clarity and confidence. I have a particular passion for working with first-time homebuyers and those who need extra strategy, education, and hands-on support along the way. I believe communication is everything, so I make it a priority to keep my clients informed, prepared, and comfortable at every step.

Whether your situation is straightforward or more complex, I thrive on finding solutions and creating a smooth, seamless experience. Outside of work, I enjoy motorcycles and sports, which reflect my competitive drive and appreciation for performance and precision.

My team and I are committed to delivering a professional, efficient, and personalized home financing experience to help you move forward with confidence.`,
        image: '/images/brandon.png',
        specialties: ['Mortgages', 'Home Financing'],
        rating: 5.0,
        reviews: 0,
        yearsExperience: 7,
        homesSold: 0,
        phone: '(801) 361-6034',
        email: 'brandon@rubypoole.com',
        areas: ['Northwest Arkansas'],
    },
    'matt-harris': {
        name: 'Matt Harris',
        title: 'Loan Officer, NMLS#218374',
        teamName: 'First Colony Mortgage',
        bio: `Matt Harris is a Loan Officer at First Colony Mortgage. His biography is coming soon.`,
        image: '/images/matt.png',
        specialties: ['Mortgages', 'Home Financing'],
        rating: 5.0,
        reviews: 0,
        yearsExperience: 0,
        homesSold: 0,
        phone: '(530) 306-2447',
        email: 'matt@rubypoole.com',
        areas: ['Northwest Arkansas', 'Utah'],
    },
    'jada-atwood': {
        name: 'Jada Atwood',
        title: 'LOA, NMLS#2127779',
        teamName: 'First Colony Mortgage',
        bio: `Jada Atwood is a Loan Officer Assistant at First Colony Mortgage. Her biography is coming soon.`,
        image: '/images/jada.png',
        specialties: ['Mortgages', 'Home Financing'],
        rating: 5.0,
        reviews: 0,
        yearsExperience: 0,
        homesSold: 0,
        phone: '(801) 400-0193',
        email: 'jada@rubypoole.com',
        areas: ['Northwest Arkansas', 'Utah'],
    },
}

const slug = route.params.slug as string
const agent = computed(() => teamMembers[slug] || null)
</script>

<template>
    <div v-if="agent">
        <SeoHead :title="`${agent.name} - Real Estate Agent`"
            :description="`${agent.name} is a ${agent.title} with the Ruby Poole Team. ${agent.yearsExperience} years experience, ${agent.homesSold}+ homes sold.`"
            :canonical="`/team/${slug}`" />

        <main>
            <!-- Hero -->
            <section class="py-16 bg-gradient-to-br from-base-100 via-base-200/50 to-primary/5">
                <div class="container-custom">
                    <RouterLink to="/team"
                        class="inline-flex items-center gap-2 text-sm text-base-content/60 hover:text-primary mb-8">
                        <ArrowLeft class="w-4 h-4" />
                        Back to Team
                    </RouterLink>

                    <div class="grid lg:grid-cols-3 gap-12">
                        <!-- Image & Quick Info -->
                        <div>
                            <div class="aspect-[3/4] rounded-2xl overflow-hidden bg-base-200 mb-6">
                                <img :src="agent.image" :alt="agent.name" class="w-full h-full object-cover" />
                            </div>

                            <div class="space-y-3">
                                <a :href="`tel:${agent.phone}`" class="btn btn-primary w-full gap-2">
                                    <Phone class="w-4 h-4" />
                                    {{ agent.phone }}
                                </a>
                                <a :href="`mailto:${agent.email}`" class="btn btn-outline w-full gap-2">
                                    <Mail class="w-4 h-4" />
                                    Send Email
                                </a>
                            </div>
                        </div>

                        <!-- Bio & Details -->
                        <div class="lg:col-span-2">
                            <div class="flex items-center gap-2 mb-2">
                                <Award class="w-5 h-5 text-primary" />
                                <span class="text-sm font-medium text-primary">{{ agent.teamName || 'Ruby Poole Team' }}</span>
                            </div>

                            <h1 class="text-4xl font-display mb-2">{{ agent.name }}</h1>
                            <p class="text-lg text-base-content/60 mb-6">{{ agent.title }}</p>

                            <!-- Rating -->
                            <div class="flex items-center gap-4 mb-8">
                                <div class="flex items-center gap-2">
                                    <div class="flex">
                                        <Star v-for="i in 5" :key="i" class="w-5 h-5 text-warning fill-warning" />
                                    </div>
                                    <span class="font-medium">{{ agent.rating }}</span>
                                </div>
                                <span class="text-base-content/60">{{ agent.reviews }} reviews</span>
                            </div>

                            <!-- Stats -->
                            <div class="grid grid-cols-3 gap-6 p-6 bg-base-200/50 rounded-xl mb-8">
                                <div class="text-center">
                                    <div class="text-3xl font-display text-primary">{{ agent.yearsExperience }}</div>
                                    <div class="text-sm text-base-content/60">Years Experience</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-3xl font-display text-primary">{{ agent.homesSold }}+</div>
                                    <div class="text-sm text-base-content/60">Homes Sold</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-3xl font-display text-primary">5.0</div>
                                    <div class="text-sm text-base-content/60">Star Rating</div>
                                </div>
                            </div>

                            <!-- Bio -->
                            <h2 class="font-display text-xl mb-4">About {{ agent.name.split(' ')[0] }}</h2>
                            <p class="text-base-content/80 leading-relaxed mb-8">{{ agent.bio }}</p>

                            <!-- Specialties -->
                            <h3 class="font-display text-lg mb-3">Specialties</h3>
                            <div class="flex flex-wrap gap-2 mb-8">
                                <span v-for="specialty in agent.specialties" :key="specialty"
                                    class="badge badge-primary badge-outline py-3 px-4">
                                    {{ specialty }}
                                </span>
                            </div>

                            <!-- Areas Served -->
                            <h3 class="font-display text-lg mb-3">Areas Served</h3>
                            <div class="flex flex-wrap gap-2">
                                <RouterLink v-for="area in agent.areas" :key="area"
                                    :to="`/${area.toLowerCase().replace(' ', '-')}`"
                                    class="flex items-center gap-1 badge badge-ghost py-3 px-4 hover:badge-primary transition-colors">
                                    <MapPin class="w-3 h-3" />
                                    {{ area }}
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Contact Form -->
            <section class="py-16 bg-base-200/50">
                <div class="container-custom">
                    <div class="max-w-2xl mx-auto">
                        <div class="text-center mb-8">
                            <h2 class="text-3xl font-display mb-4">Contact {{ agent.name.split(' ')[0] }}</h2>
                            <p class="text-base-content/60">Have questions? Send a message and {{ agent.name.split(' ')[0] }} will get back to you soon.</p>
                        </div>

                        <div class="bg-base-100 rounded-2xl p-8 shadow-lg">
                            <LeadForm :source="`agent-${slug}`" submit-label="Send Message" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <!-- 404 for unknown agents -->
    <div v-else class="min-h-[60vh] flex items-center justify-center">
        <div class="text-center">
            <h1 class="text-2xl font-display mb-4">Agent Not Found</h1>
            <RouterLink to="/team" class="btn btn-primary">View All Team Members</RouterLink>
        </div>
    </div>
</template>
