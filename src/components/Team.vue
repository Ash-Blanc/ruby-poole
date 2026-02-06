<script setup lang="ts">
import { Star, MapPin, Phone, Mail, TrendingUp, ExternalLink } from 'lucide-vue-next'

const teamMembers = [
  {
    name: 'Ruby Poole',
    role: 'Team Leader',
    isLeader: true,
    rating: 5.0,
    reviews: 35,
    sales: '160 in 12mo',
    priceRange: '$11K - $1.6M',
    image: 'https://photos.zillowstatic.com/fp/96ec58536ba341be15623aa3fe6e0676-h_l.jpg',
    profileUrl: 'https://www.zillow.com/profile/RubyPoole1',
  },
  {
    name: 'Katie Voldeng',
    role: 'Buyer Specialist',
    rating: 5.0,
    reviews: 8,
    sales: '12 in 12mo',
    priceRange: '$200K - $600K',
    image: 'https://photos.zillowstatic.com/fp/5badaacc2e3f92628b921689b0df0980-h_l.jpg',
    profileUrl: 'https://www.zillow.com/profile/katherine91162',
  },
  {
    name: 'Heather Jorgensen',
    role: 'Listing Specialist',
    rating: 5.0,
    reviews: 5,
    sales: '18 in 12mo',
    priceRange: '$150K - $800K',
    image: 'https://photos.zillowstatic.com/fp/c62577695a83f9b68475eb2f578f1dd7-h_l.jpg',
    profileUrl: 'https://www.zillow.com/profile/hjorgensen321',
  },
  {
    name: 'Jerry Beaudion',
    role: 'Investment Advisor',
    rating: 5.0,
    reviews: 6,
    sales: '24 in 12mo',
    priceRange: '$100K - $500K',
    image: 'https://photos.zillowstatic.com/fp/f280d2081416cfe296631965ee044c65-h_l.jpg',
    profileUrl: 'https://www.zillow.com/profile/Jerry%20Beaudion',
  },
  {
    name: 'Jeri Johnson',
    role: 'Relocation Specialist',
    rating: 5.0,
    reviews: 4,
    sales: '15 in 12mo',
    priceRange: '$180K - $450K',
    image: 'https://photos.zillowstatic.com/fp/43aafcb126114b9231222671dee1f88b-h_l.jpg',
    profileUrl: 'https://www.zillow.com/profile/jerijohnson7',
  },
  {
    name: 'Greg Johnson',
    role: 'Commercial Expert',
    rating: 5.0,
    reviews: 3,
    sales: '8 in 12mo',
    priceRange: '$250K - $1.2M',
    image: 'https://photos.zillowstatic.com/fp/83eff06a342b0b9c99d2dfa42664a65e-h_l.jpg',
    profileUrl: 'https://www.zillow.com/profile/johnson%20greg96',
  },
  {
    name: 'Laurie Lecompte',
    role: 'Client Relations',
    rating: 5.0,
    reviews: 4,
    sales: '10 in 12mo',
    priceRange: '$120K - $380K',
    image: 'https://photos.zillowstatic.com/fp/7e55886acc37cd86c0ad9faf94c33194-h_l.jpg',
    profileUrl: 'https://www.zillow.com/profile/laurielecomterealtor',
  },
  {
    name: 'Steffan Ogle',
    role: 'Market Analyst',
    rating: 5.0,
    reviews: 5,
    sales: '14 in 12mo',
    priceRange: '$175K - $550K',
    image: 'https://photos.zillowstatic.com/fp/24e76530c810287321fea86ea0ce1319-h_l.jpg',
    profileUrl: 'https://www.zillow.com/profile/steffanogle',
  },
  {
    name: 'Cassie Haley',
    role: 'New Construction',
    rating: 5.0,
    reviews: 6,
    sales: '16 in 12mo',
    priceRange: '$225K - $750K',
    image: 'https://photos.zillowstatic.com/fp/520de08d2e709b983fff9ac642022777-h_l.jpg',
    profileUrl: 'https://www.zillow.com/profile/thecassiehaley',
  },
  {
    name: 'Taylor Crowell',
    role: 'First-Time Buyers',
    rating: 5.0,
    reviews: 4,
    sales: '11 in 12mo',
    priceRange: '$140K - $425K',
    image: 'https://photos.zillowstatic.com/fp/2bd1eabeaa85ee867856798045202b4b-h_l.jpg',
    profileUrl: 'https://www.zillow.com/profile/TaylorHullCrowell',
  },
]
</script>

<template>
  <section id="team" class="bg-base-200/50">
    <div class="container-custom">
      <div class="section-header">
        <h2>Meet the Team</h2>
        <p>10 dedicated professionals committed to your real estate success</p>
      </div>

      <!-- Team Leader -->
      <div class="max-w-3xl mx-auto mb-16">
        <div class="card bg-base-100 lg:card-side overflow-hidden">
          <figure class="lg:w-72 bg-base-200">
            <img 
              :src="teamMembers[0].image" 
              :alt="teamMembers[0].name"
              class="w-full h-full object-cover"
            />
          </figure>
          <div class="card-body p-8 lg:p-10">
            <div class="badge badge-primary py-3 px-4 h-auto mb-2">Team Leader</div>
            <h3 class="text-3xl font-display mb-1">Ruby Poole</h3>
            <p class="text-base-content/60 mb-6">at Collier & Associates</p>
            
            <div class="flex flex-wrap gap-4 text-sm mb-6">
              <div class="flex items-center gap-1.5">
                <Star class="w-4 h-4 text-warning fill-warning" />
                <span class="font-medium">5.0</span>
                <span class="text-base-content/60">(35 reviews)</span>
              </div>
              <div class="flex items-center gap-1.5">
                <TrendingUp class="w-4 h-4 text-success" />
                <span>160 sales in 12 months</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <a href="#contact" class="btn btn-primary gap-2">
                <Phone class="w-4 h-4" />
                Contact Ruby
              </a>
              <a 
                :href="teamMembers[0].profileUrl" 
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-outline gap-2"
              >
                <ExternalLink class="w-4 h-4" />
                Zillow Profile
              </a>
              <a href="mailto:ruby@collierassociates.com" class="btn btn-ghost gap-2">
                <Mail class="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Members Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="member in teamMembers.slice(1)"
          :key="member.name"
          class="card bg-base-100"
        >
          <div class="card-body p-6">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-base-300">
                <img 
                  :src="member.image" 
                  :alt="member.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 class="font-display text-lg">{{ member.name }}</h4>
                <p class="text-sm text-base-content/60">{{ member.role }}</p>
              </div>
            </div>

            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-base-content/60">Rating</span>
                <div class="flex items-center gap-1">
                  <Star class="w-3.5 h-3.5 text-warning fill-warning" />
                  <span>{{ member.rating }} ({{ member.reviews }})</span>
                </div>
              </div>
              <div class="flex justify-between">
                <span class="text-base-content/60">Recent Sales</span>
                <span>{{ member.sales }}</span>
              </div>
              <div class="flex justify-between items-center pt-2">
                <span class="text-base-content/60">Price Range</span>
                <span class="font-medium text-xs">{{ member.priceRange }}</span>
              </div>
            </div>

            <div class="mt-6 pt-6 border-t border-base-200">
              <a 
                :href="member.profileUrl" 
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-outline btn-sm w-full gap-2"
              >
                <ExternalLink class="w-3.5 h-3.5" />
                View Zillow Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
