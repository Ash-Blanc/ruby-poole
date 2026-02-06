<script setup lang="ts">
import { Bed, Bath, MapPin, ArrowRight, ExternalLink } from 'lucide-vue-next'

// Real listings from Ruby Poole's Zillow profile (26 For Sale, 1274+ Sold)
const listings = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    price: '$249,000',
    address: '2351 W Skyler Dr',
    city: 'Fayetteville, AR 72703',
    beds: 2,
    baths: 3,
    status: 'For Sale',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    price: '$449,950',
    address: '4749 Cowboy St',
    city: 'Springdale, AR 72762',
    beds: 4,
    baths: 2,
    status: 'For Sale',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
    price: '$445,950',
    address: '7699 Scenic Valley Ave',
    city: 'Springdale, AR 72762',
    beds: 4,
    baths: 2,
    status: 'For Sale',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    price: '$299,900',
    address: '397 Thompson St',
    city: 'Centerton, AR 72719',
    beds: 3,
    baths: 2,
    status: 'For Sale',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    price: '$445,950',
    address: '7735 Scenic Valley Ave',
    city: 'Springdale, AR 72762',
    beds: 4,
    baths: 2,
    status: 'For Sale',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80',
    price: '$465,000',
    address: '67 Pamona Dr',
    city: 'Bella Vista, AR 72715',
    beds: 4,
    baths: 3,
    status: 'Sold',
  },
]

const stats = {
  forSale: 26,
  sold: 1274,
  totalListings: 1300,
}
</script>

<template>
  <section id="listings">
    <div class="container-custom">
      <div class="section-header">
        <h2>Featured Properties</h2>
        <p>Browse {{ stats.forSale }} active listings • {{ stats.sold.toLocaleString() }}+ homes sold</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <article
          v-for="listing in listings"
          :key="listing.id"
          class="card bg-base-100 overflow-hidden group cursor-pointer"
        >
          <!-- Image -->
          <figure class="relative aspect-[4/3] overflow-hidden bg-base-200">
            <img
              :src="listing.image"
              :alt="listing.address"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              @error="($event.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop'"
            />
            <div
              class="absolute top-4 left-4 badge badge-md py-3 px-4 h-auto font-semibold border-none shadow-sm"
              :class="listing.status === 'Sold' ? 'badge-success' : 'badge-primary'"
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
            </div>
          </div>
        </article>
      </div>

      <div class="text-center mt-12">
        <a 
          href="https://www.zillow.com/profile/RubyPoole1" 
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary btn-lg gap-2"
        >
          View All Listings on Zillow
          <ExternalLink class="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
</template>
