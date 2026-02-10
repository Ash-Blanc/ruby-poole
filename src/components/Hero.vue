<script setup lang="ts">
import { ref } from 'vue'
import { Star, MapPin, Phone, ArrowRight, Award, CheckCircle2, Bell, Home, Search, ChevronRight } from 'lucide-vue-next'
import LeadForm from '@/components/LeadForm.vue'
import HomeAlertModal from '@/components/HomeAlertModal.vue'

const showAlertModal = ref(false)
const searchQuery = ref('')

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    window.location.href = `/search?q=${encodeURIComponent(searchQuery.value)}`
  } else {
    window.location.href = '/search'
  }
}
</script>

<template>
  <section id="home" class="relative min-h-[92vh] flex items-center overflow-hidden">
    <!-- Background image with dark overlay -->
    <div class="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80" 
        alt="Northwest Arkansas neighborhood community"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content Column -->
        <div class="text-center lg:text-left">
          <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/10">
            <Award class="w-4 h-4 text-primary" />
            <span>Top 1% of Real Estate Teams in Arkansas</span>
          </div>

          <h1 class="text-white mb-6">
            Your Guide to
            <span class="text-primary block mt-1">Northwest Arkansas Neighborhoods</span>
          </h1>

          <p class="text-lg md:text-xl text-white/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Discover neighborhoods, communities & homes — NWA Neighborhoods by The Ruby Poole Team
          </p>

          <!-- Search Bar -->
          <div class="mb-8 max-w-lg mx-auto lg:mx-0">
            <form @submit.prevent="handleSearch" class="flex gap-2">
              <div class="relative flex-1">
                <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/40" />
                <input 
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search by city, neighborhood, or ZIP..."
                  class="input input-bordered w-full pl-12 bg-white/95 text-base-content border-white/20 h-14 text-base"
                />
              </div>
              <button type="submit" class="btn btn-primary h-14 px-6 gap-2">
                <Search class="w-5 h-5" />
                <span class="hidden sm:inline">Search</span>
              </button>
            </form>
            <div class="flex flex-wrap gap-2 mt-3 justify-center lg:justify-start">
              <RouterLink to="/search" class="text-xs text-white/50 hover:text-primary transition-colors flex items-center gap-1">
                <ChevronRight class="w-3 h-3" />
                Advanced Search
              </RouterLink>
              <span class="text-white/20">•</span>
              <RouterLink to="/school-districts" class="text-xs text-white/50 hover:text-primary transition-colors flex items-center gap-1">
                <ChevronRight class="w-3 h-3" />
                Search by School District
              </RouterLink>
              <span class="text-white/20">•</span>
              <RouterLink to="/homes/lake-homes" class="text-xs text-white/50 hover:text-primary transition-colors">Lake Homes</RouterLink>
              <span class="text-white/20">•</span>
              <RouterLink to="/homes/new-construction" class="text-xs text-white/50 hover:text-primary transition-colors">New Construction</RouterLink>
            </div>
          </div>

          <!-- PPC CTAs -->
          <div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
            <RouterLink to="/search" class="btn btn-primary btn-lg gap-2 px-8">
              <Home class="w-5 h-5" />
              Explore Homes
            </RouterLink>
            <button @click="showAlertModal = true" class="btn btn-outline border-white/30 text-white hover:bg-white hover:text-base-content btn-lg gap-2 px-8">
              <Bell class="w-5 h-5" />
              Get Home Alerts
            </button>
          </div>
          
          <!-- Secondary CTA -->
          <div class="flex justify-center lg:justify-start mb-10">
            <a href="#contact" class="btn btn-ghost text-white/70 hover:text-white gap-2 px-6">
              <Phone class="w-5 h-5" />
              Talk to a Local Expert
            </a>
          </div>

          <!-- Trust Badges -->
          <div class="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-white/50">
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-5 h-5 text-success" />
              <span>5.0 Rating (35 reviews)</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-5 h-5 text-success" />
              <span>160+ Sales This Year</span>
            </div>
          </div>
        </div>

        <!-- Lead Form Column -->
        <div class="flex justify-center lg:justify-end">
          <div class="glass-card rounded-2xl p-8 max-w-md w-full border border-white/10">
            <div class="text-center mb-6">
              <h3 class="text-xl font-display mb-1">Start Your Home Search</h3>
              <p class="text-sm text-base-content/60">Get personalized listings in your inbox</p>
            </div>

            <LeadForm 
              source="homepage-hero"
              variant="default"
              submit-label="Get Started"
              :success-redirect="true"
            />

            <!-- Stats Grid -->
            <div class="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-base-300">
              <div class="text-center">
                <div class="text-2xl font-display text-primary">11</div>
                <div class="text-xs text-base-content/60 mt-1">Years Exp</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-display text-primary">160</div>
                <div class="text-xs text-base-content/60 mt-1">Sales/Year</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-display text-primary">10</div>
                <div class="text-xs text-base-content/60 mt-1">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Home Alert Modal -->
  <HomeAlertModal v-model="showAlertModal" />
</template>
