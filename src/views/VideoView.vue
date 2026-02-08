<script setup lang="ts">
import SeoHead from '@/components/SeoHead.vue'
import VideoGallery from '@/components/VideoGallery.vue'
import LeadForm from '@/components/LeadForm.vue'

// Sample videos - replace with actual YouTube video IDs
const videos = [
  { id: 'dQw4w9WgXcQ', title: 'NWA Market Update - February 2024', category: 'Market Updates', featured: true },
  { id: 'ScMzIvxBSi4', title: 'Tour: Stunning Lake Home on Beaver Lake', category: 'Home Tours' },
  { id: 'J---aiyznGQ', title: 'Bentonville Neighborhood Guide: Downtown', category: 'Neighborhood Tours' },
  { id: '2Vv-BfVoq4g', title: '5 Tips for First-Time Homebuyers', category: 'Buyer Tips' },
  { id: 'EngW7tLk6R8', title: 'Why Families Love Rogers, Arkansas', category: 'Neighborhood Tours' },
  { id: 'fJ9rUzIMcZQ', title: 'How to Stage Your Home for Sale', category: 'Seller Tips' },
]

const categories = ['Market Updates', 'Home Tours', 'Neighborhood Tours', 'Buyer Tips', 'Seller Tips']
</script>

<template>
  <SeoHead
    title="Videos - Real Estate Tips & Tours"
    description="Watch video tours, market updates, and home buying tips from the Ruby Poole Team. Discover Northwest Arkansas neighborhoods."
    canonical="/videos"
  />

  <main>
    <!-- Hero -->
    <section class="py-16 bg-gradient-to-br from-base-100 via-base-200/50 to-primary/5">
      <div class="container-custom">
        <div class="text-center max-w-2xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-display mb-4">
            Video Gallery
          </h1>
          <p class="text-lg text-base-content/70">
            Home tours, neighborhood guides, market updates, and tips from the Ruby Poole Team.
          </p>
        </div>
      </div>
    </section>

    <!-- Video Gallery -->
    <section class="py-12">
      <div class="container-custom">
        <VideoGallery
          :videos="videos"
          :categories="categories"
          title=""
        />
      </div>
    </section>

    <!-- Subscribe CTA -->
    <section class="py-12 bg-primary text-primary-content">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-display mb-4">Never Miss an Update</h2>
            <p class="text-primary-content/80">
              Subscribe to get new videos, market updates, and exclusive listings delivered to your inbox.
            </p>
          </div>
          <div class="bg-base-100 text-base-content rounded-2xl p-8">
            <LeadForm source="video-page" submit-label="Subscribe" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
