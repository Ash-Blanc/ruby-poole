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
    image: 'https://photos.zillowstatic.com/fp/96ec58536ba341be15623aa3fe6e0676-h_l.jpg',
    specialties: ['Luxury Homes', 'Relocation', 'First-Time Buyers'],
    rating: 5.0,
    reviews: 35,
    phone: '(479) 555-0123',
    email: 'ruby@rubypoole.com',
  },
  {
    slug: 'katie-voldeng',
    name: 'Katie Voldeng',
    title: 'Buyer Specialist',
    bio: 'Katie brings dedication and market knowledge to help buyers find the right home at the right price throughout Northwest Arkansas.',
    image: 'https://photos.zillowstatic.com/fp/5badaacc2e3f92628b921689b0df0980-h_l.jpg',
    specialties: ['Buyer Representation', 'Negotiations'],
    rating: 5.0,
    reviews: 17,
    phone: '(479) 555-0124',
    email: 'katie@rubypoole.com',
  },
  {
    slug: 'heather-jorgensen',
    name: 'Heather Jorgensen',
    title: 'Listing Specialist',
    bio: 'Heather brings marketing expertise and a keen eye for detail to help sellers showcase and sell their homes effectively.',
    image: 'https://photos.zillowstatic.com/fp/c62577695a83f9b68475eb2f578f1dd7-h_l.jpg',
    specialties: ['Listings', 'Marketing'],
    rating: 5.0,
    reviews: 8,
    phone: '(479) 555-0125',
    email: 'heather@rubypoole.com',
  },
  {
    slug: 'jerry-beaudion',
    name: 'Jerry Beaudion',
    title: 'Investment Advisor',
    bio: 'Jerry specializes in investment properties and helps clients build wealth through strategic real estate opportunities.',
    image: 'https://photos.zillowstatic.com/fp/f280d2081416cfe296631965ee044c65-h_l.jpg',
    specialties: ['Investment Properties', 'Land'],
    rating: 5.0,
    reviews: 3,
    phone: '(479) 555-0126',
    email: 'jerry@rubypoole.com',
  },
  {
    slug: 'taylor-crowell',
    name: 'Taylor Crowell',
    title: 'First-Time Buyers Specialist',
    bio: 'Taylor loves guiding first-time buyers through the process, making the experience smooth and stress-free.',
    image: 'https://photos.zillowstatic.com/fp/2bd1eabeaa85ee867856798045202b4b-h_l.jpg',
    specialties: ['First-Time Buyers', 'New Construction'],
    rating: 5.0,
    reviews: 2,
    phone: '(479) 555-0127',
    email: 'taylor@rubypoole.com',
  },
  {
    slug: 'jeri-johnson',
    name: 'Jeri Johnson',
    title: 'Relocation Specialist',
    bio: 'Jeri helps relocating families find their ideal home in Northwest Arkansas with personalized neighborhood guidance.',
    image: 'https://photos.zillowstatic.com/fp/43aafcb126114b9231222671dee1f88b-h_l.jpg',
    specialties: ['Relocation', 'Family Homes'],
    rating: 0,
    reviews: 0,
    phone: '(479) 555-0128',
    email: 'jeri@rubypoole.com',
  },
  {
    slug: 'greg-johnson',
    name: 'Greg Johnson',
    title: 'Commercial Expert',
    bio: 'Greg brings expertise in commercial and higher-end residential properties, helping clients with complex transactions.',
    image: 'https://photos.zillowstatic.com/fp/83eff06a342b0b9c99d2dfa42664a65e-h_l.jpg',
    specialties: ['Commercial', 'Luxury Properties'],
    rating: 0,
    reviews: 0,
    phone: '(479) 555-0129',
    email: 'greg@rubypoole.com',
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
