<script setup lang="ts">
import { Star, Phone, Mail, MapPin, Award, ArrowRight } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'

const teamMembers = [
  {
    slug: 'ruby-poole',
    name: 'Ruby Poole',
    title: 'Team Leader & Broker Associate',
    bio: 'With 11+ years of experience and over 1,274 homes sold, Ruby leads the team with passion for helping families find their perfect home in Northwest Arkansas.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    specialties: ['Luxury Homes', 'Relocation', 'First-Time Buyers'],
    rating: 5.0,
    reviews: 35,
    phone: '(479) 555-0123',
    email: 'ruby@rubypoole.com',
  },
  {
    slug: 'sarah-johnson',
    name: 'Sarah Johnson',
    title: 'Buyers Agent',
    bio: 'Sarah specializes in helping first-time buyers navigate the home buying process with patience and expertise.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    specialties: ['First-Time Buyers', 'New Construction'],
    rating: 5.0,
    reviews: 18,
    phone: '(479) 555-0124',
    email: 'sarah@rubypoole.com',
  },
  {
    slug: 'michael-davis',
    name: 'Michael Davis',
    title: 'Listing Specialist',
    bio: 'Michael brings marketing expertise and negotiation skills to help sellers get top dollar for their homes.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    specialties: ['Luxury Listings', 'Investment Properties'],
    rating: 5.0,
    reviews: 22,
    phone: '(479) 555-0125',
    email: 'michael@rubypoole.com',
  },
  {
    slug: 'emily-chen',
    name: 'Emily Chen',
    title: 'Buyers Agent',
    bio: 'Emily loves connecting families with their dream homes and is known for her attention to detail.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    specialties: ['Family Homes', 'School Districts'],
    rating: 5.0,
    reviews: 15,
    phone: '(479) 555-0126',
    email: 'emily@rubypoole.com',
  },
]
</script>

<template>
  <SeoHead
    title="Meet Our Team"
    description="Meet the Ruby Poole Team at Collier & Associates. Experienced real estate agents serving Bentonville, Rogers, and Northwest Arkansas."
    canonical="/team"
  />

  <main>
    <!-- Hero -->
    <section class="py-20 bg-gradient-to-br from-base-100 via-base-200/50 to-primary/5">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award class="w-4 h-4" />
            <span>Top 1% of Real Estate Teams in Arkansas</span>
          </div>
          
          <h1 class="text-4xl md:text-5xl font-display mb-6">
            Meet the <span class="text-primary">Ruby Poole Team</span>
          </h1>
          
          <p class="text-lg text-base-content/70 mb-8">
            With a combined 30+ years of experience and over 1,274 homes sold, our team is dedicated to making your real estate dreams a reality.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Grid -->
    <section class="py-16">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 gap-8">
          <RouterLink
            v-for="member in teamMembers"
            :key="member.slug"
            :to="`/team/${member.slug}`"
            class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow group overflow-hidden"
          >
            <div class="flex flex-col sm:flex-row">
              <!-- Image -->
              <div class="sm:w-48 h-48 sm:h-auto flex-shrink-0 bg-base-200 overflow-hidden">
                <img 
                  :src="member.image" 
                  :alt="member.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <!-- Content -->
              <div class="card-body p-6">
                <div class="flex items-center gap-2 mb-1">
                  <h3 class="font-display text-xl group-hover:text-primary transition-colors">{{ member.name }}</h3>
                </div>
                <p class="text-sm text-primary font-medium mb-3">{{ member.title }}</p>
                
                <!-- Rating -->
                <div class="flex items-center gap-2 mb-3">
                  <div class="flex">
                    <Star v-for="i in 5" :key="i" class="w-4 h-4 text-warning fill-warning" />
                  </div>
                  <span class="text-sm text-base-content/60">{{ member.reviews }} reviews</span>
                </div>
                
                <!-- Specialties -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span 
                    v-for="specialty in member.specialties" 
                    :key="specialty"
                    class="badge badge-sm badge-ghost"
                  >
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
              Whether you're buying, selling, or just exploring, our team is here to help. Reach out today for a no-obligation consultation.
            </p>
            <div class="flex items-center gap-4 text-base-content/60">
              <div class="flex items-center gap-2">
                <Phone class="w-4 h-4" />
                <span>(479) 555-0123</span>
              </div>
              <div class="flex items-center gap-2">
                <Mail class="w-4 h-4" />
                <span>hello@rubypoole.com</span>
              </div>
            </div>
          </div>
          
          <div class="bg-base-100 rounded-2xl p-8 shadow-lg">
            <h3 class="font-display text-xl mb-4">Contact Our Team</h3>
            <LeadForm source="team-page" submit-label="Send Message" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
