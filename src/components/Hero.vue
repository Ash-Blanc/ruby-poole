<script setup lang="ts">
import { Star, MapPin, Phone, ArrowRight, Award, CheckCircle2 } from 'lucide-vue-next'
</script>

<template>
  <section id="home" class="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-base-100 via-base-200/50 to-primary/5">
    <!-- Decorative elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-2xl"></div>
    </div>

    <div class="container-custom relative">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Content Column -->
        <div class="text-center lg:text-left">
          <div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Award class="w-4 h-4" />
            <span>Top 1% of Real Estate Teams in Arkansas</span>
          </div>

          <h1 class="text-base-content mb-6">
            Your Dream Home
            <span class="text-primary block mt-1">Awaits in Arkansas</span>
          </h1>

          <p class="text-lg md:text-xl text-base-content/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            11 years of experience, 1,274+ homes sold. Let the Ruby Poole Team at Collier &amp; Associates guide you through your real estate journey.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <a href="#listings" class="btn btn-primary btn-lg gap-2 px-8">
              View Listings
              <ArrowRight class="w-5 h-5" />
            </a>
            <a href="#contact" class="btn btn-outline btn-lg gap-2 px-8">
              <Phone class="w-5 h-5" />
              Contact the Team
            </a>
          </div>

          <!-- Trust Badges -->
          <div class="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-base-content/60">
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

        <!-- Agent Card Column -->
        <div class="flex justify-center lg:justify-end">
          <div class="glass-card rounded-2xl p-8 max-w-md w-full">
            <!-- Agent Photo Placeholder -->
            <div class="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
              <span class="text-4xl font-display text-primary">RP</span>
            </div>

            <div class="text-center mb-6">
              <h3 class="text-2xl font-display mb-1">Ruby Poole Team</h3>
              <p class="text-base-content/60 mb-4">at Collier &amp; Associates</p>
              
              <!-- Rating -->
              <div class="flex justify-center items-center gap-1 mb-4">
                <Star v-for="i in 5" :key="i" class="w-5 h-5 text-warning fill-warning" />
                <span class="ml-2 text-sm text-base-content/70">35 Reviews</span>
              </div>

              <!-- Location -->
              <div class="flex items-center justify-center gap-2 text-base-content/60">
                <MapPin class="w-4 h-4" />
                <span>Rogers, AR &amp; Surrounding Areas</span>
              </div>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-base-300">
              <div class="text-center">
                <div class="text-2xl font-display text-primary">11</div>
                <div class="text-xs text-base-content/60 mt-1">Years Exp</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-display text-primary">160</div>
                <div class="text-xs text-base-content/60 mt-1">Sales/Year</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-display text-primary">9</div>
                <div class="text-xs text-base-content/60 mt-1">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
