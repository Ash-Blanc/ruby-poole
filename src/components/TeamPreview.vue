<script setup lang="ts">
import { Star, ArrowRight, Users } from 'lucide-vue-next'

const teamLeader = {
  name: 'Ruby Poole',
  role: 'Team Leader',
  rating: 5.0,
  reviews: 35,
  sales: '160 in 12mo',
  image: 'https://photos.zillowstatic.com/fp/96ec58536ba341be15623aa3fe6e0676-h_l.jpg',
}

const teamHighlights = [
  { name: 'Katie Voldeng', role: 'Buyer Specialist', image: 'https://photos.zillowstatic.com/fp/5badaacc2e3f92628b921689b0df0980-h_l.jpg' },
  { name: 'Heather Jorgensen', role: 'Listing Specialist', image: 'https://photos.zillowstatic.com/fp/c62577695a83f9b68475eb2f578f1dd7-h_l.jpg' },
  { name: 'Jerry Beaudion', role: 'Investment Advisor', image: 'https://photos.zillowstatic.com/fp/f280d2081416cfe296631965ee044c65-h_l.jpg' },
]
</script>

<template>
  <section class="py-20 bg-base-200/50">
    <div class="container-custom">
      <div class="section-header">
        <h2>Meet the Team</h2>
        <p>10 dedicated professionals committed to your success</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <!-- Team Leader -->
        <div class="card bg-base-100 lg:card-side overflow-hidden">
          <figure class="lg:w-48 bg-base-200">
            <img :src="teamLeader.image" :alt="teamLeader.name" class="w-full h-full object-cover" />
          </figure>
          <div class="card-body p-6">
            <div class="badge badge-primary mb-2">Team Leader</div>
            <h3 class="text-2xl font-display">{{ teamLeader.name }}</h3>
            <p class="text-base-content/60 text-sm mb-3">at Collier & Associates</p>
            <div class="flex items-center gap-4 text-sm">
              <div class="flex items-center gap-1">
                <Star class="w-4 h-4 text-warning fill-warning" />
                <span>{{ teamLeader.rating }} ({{ teamLeader.reviews }} reviews)</span>
              </div>
              <span>{{ teamLeader.sales }}</span>
            </div>
          </div>
        </div>

        <!-- Team Highlights -->
        <div class="space-y-4">
          <div v-for="member in teamHighlights" :key="member.name" class="flex items-center gap-4 p-4 bg-base-100 rounded-xl">
            <div class="w-12 h-12 rounded-full overflow-hidden ring-2 ring-base-300">
              <img :src="member.image" :alt="member.name" class="w-full h-full object-cover" />
            </div>
            <div>
              <h4 class="font-medium">{{ member.name }}</h4>
              <p class="text-sm text-base-content/60">{{ member.role }}</p>
            </div>
          </div>

          <RouterLink to="/team" class="btn btn-primary w-full gap-2">
            <Users class="w-4 h-4" />
            Meet Our Full Team
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
