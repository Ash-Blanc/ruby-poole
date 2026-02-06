<script setup lang="ts">
import { Star, MapPin, Phone, Mail, TrendingUp } from 'lucide-vue-next'

const teamMembers = [
  {
    name: 'Ruby Poole',
    role: 'Team Leader',
    isLeader: true,
    rating: 5.0,
    reviews: 35,
    sales: '160 in 12mo',
    priceRange: '$11K - $1.6M',
    avatar: 'RP',
  },
  {
    name: 'Katie Voldeng',
    role: 'Buyer Specialist',
    rating: 5.0,
    reviews: 8,
    sales: '12 in 12mo',
    priceRange: '$200K - $600K',
    avatar: 'KV',
  },
  {
    name: 'Heather Jorgensen',
    role: 'Listing Specialist',
    rating: 5.0,
    reviews: 5,
    sales: '18 in 12mo',
    priceRange: '$150K - $800K',
    avatar: 'HJ',
  },
  {
    name: 'Jerry Beaudion',
    role: 'Investment Advisor',
    rating: 5.0,
    reviews: 6,
    sales: '24 in 12mo',
    priceRange: '$100K - $500K',
    avatar: 'JB',
  },
  {
    name: 'Jeri Johnson',
    role: 'Relocation Specialist',
    rating: 5.0,
    reviews: 4,
    sales: '15 in 12mo',
    priceRange: '$180K - $450K',
    avatar: 'JJ',
  },
  {
    name: 'Greg Johnson',
    role: 'Commercial Expert',
    rating: 5.0,
    reviews: 3,
    sales: '8 in 12mo',
    priceRange: '$250K - $1.2M',
    avatar: 'GJ',
  },
  {
    name: 'Laurie Lecompte',
    role: 'Client Relations',
    rating: 5.0,
    reviews: 4,
    sales: '10 in 12mo',
    priceRange: '$120K - $380K',
    avatar: 'LL',
  },
]
</script>

<template>
  <section id="team" class="bg-base-200/50">
    <div class="container-custom">
      <div class="section-header">
        <h2>Meet the Team</h2>
        <p>9 dedicated professionals committed to your real estate success</p>
      </div>

      <!-- Team Leader -->
      <div class="max-w-3xl mx-auto mb-16">
        <div class="card bg-base-100 lg:card-side overflow-hidden">
          <figure class="lg:w-72 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-12 lg:p-0">
            <div class="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span class="text-4xl lg:text-5xl text-white font-display">RP</span>
            </div>
          </figure>
          <div class="card-body p-8 lg:p-10">
            <div class="badge badge-primary mb-2">Team Leader</div>
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
              <a href="mailto:ruby@collierassociates.com" class="btn btn-outline gap-2">
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
              <div class="w-14 h-14 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center flex-shrink-0">
                <span class="text-lg text-white font-semibold">{{ member.avatar }}</span>
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
              <div class="flex justify-between">
                <span class="text-base-content/60">Price Range</span>
                <span>{{ member.priceRange }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
