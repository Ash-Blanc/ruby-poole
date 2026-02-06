<script setup lang="ts">
import { Bed, Bath, Ruler, MapPin, ArrowRight } from 'lucide-vue-next'

const listings = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
    price: '$475,000',
    address: '709 W Crest View Ct',
    city: 'Fayetteville, AR',
    beds: 4,
    baths: 3,
    sqft: '2,847',
    status: 'For Sale',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    price: '$424,900',
    address: '2580 W Nottingham Dr',
    city: 'Fayetteville, AR',
    beds: 4,
    baths: 2,
    sqft: '2,100',
    status: 'For Sale',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
    price: '$620,000',
    address: '4203 W Willowbrook Rd',
    city: 'Rogers, AR',
    beds: 5,
    baths: 4,
    sqft: '3,450',
    status: 'For Sale',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop',
    price: '$349,900',
    address: '1124 W Laurel Ave',
    city: 'Springdale, AR',
    beds: 3,
    baths: 2,
    sqft: '1,890',
    status: 'Pending',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop',
    price: '$299,000',
    address: '802 SW 14th St',
    city: 'Bentonville, AR',
    beds: 3,
    baths: 2,
    sqft: '1,650',
    status: 'For Sale',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600573472556-e636c2acda88?w=600&h=400&fit=crop',
    price: '$525,000',
    address: '5612 S Pinnacle Pointe Dr',
    city: 'Rogers, AR',
    beds: 4,
    baths: 3,
    sqft: '2,980',
    status: 'For Sale',
  },
]
</script>

<template>
  <section id="listings">
    <div class="container-custom">
      <div class="section-header">
        <h2>Featured Properties</h2>
        <p>Handpicked homes in Northwest Arkansas's most desirable neighborhoods</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <article
          v-for="listing in listings"
          :key="listing.id"
          class="card bg-base-100 overflow-hidden group cursor-pointer"
        >
          <!-- Image -->
          <figure class="relative aspect-[4/3] overflow-hidden">
            <img
              :src="listing.image"
              :alt="listing.address"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute top-4 left-4 badge font-semibold"
              :class="listing.status === 'Pending' ? 'badge-warning' : 'badge-primary'"
            >
              {{ listing.status }}
            </div>
            <div class="absolute top-4 right-4 bg-base-100/90 backdrop-blur-sm px-3 py-1.5 rounded-lg">
              <span class="font-display text-lg font-semibold">{{ listing.price }}</span>
            </div>
          </figure>

          <!-- Content -->
          <div class="card-body p-6">
            <h3 class="font-display text-lg mb-1">{{ listing.address }}</h3>
            <div class="flex items-center gap-1.5 text-sm text-base-content/60 mb-4">
              <MapPin class="w-4 h-4" />
              <span>{{ listing.city }}</span>
            </div>

            <!-- Specs -->
            <div class="flex items-center gap-6 pt-4 border-t border-base-200">
              <div class="flex items-center gap-2">
                <Bed class="w-4 h-4 text-base-content/50" />
                <span class="text-sm">{{ listing.beds }} Beds</span>
              </div>
              <div class="flex items-center gap-2">
                <Bath class="w-4 h-4 text-base-content/50" />
                <span class="text-sm">{{ listing.baths }} Baths</span>
              </div>
              <div class="flex items-center gap-2">
                <Ruler class="w-4 h-4 text-base-content/50" />
                <span class="text-sm">{{ listing.sqft }} sqft</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="text-center mt-12">
        <a href="#contact" class="btn btn-outline btn-lg gap-2">
          View All Listings
          <ArrowRight class="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
</template>
