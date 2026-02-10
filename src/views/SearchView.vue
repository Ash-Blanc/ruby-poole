<script setup lang="ts">
import { Search, MapPin, SlidersHorizontal, Bell, Grid, Map, Home, DollarSign, BedDouble, Bath, ExternalLink, ArrowRight, TrendingUp, Calendar, Users } from 'lucide-vue-next'
import { ref, computed } from 'vue'
import SeoHead from '@/components/SeoHead.vue'
import HomeAlertModal from '@/components/HomeAlertModal.vue'

const showAlertModal = ref(false)
const activeTab = ref<'for-sale' | 'sold'>('for-sale')

const forSaleListings = [
  {
    address: '2351 W Skyler Dr',
    city: 'Fayetteville, AR 72703',
    link: 'https://www.zillow.com/homedetails/2351-W-Skyler-Dr-Fayetteville-AR-72703/72848038_zpid/',
    image: 'https://photos.zillowstatic.com/fp/16072d7fa5d4f2f594a5e48615cd9844-a_a.jpg',
    beds: 2,
    baths: 3,
    price: '$249,000',
  },
  {
    address: '4749 Cowboy St',
    city: 'Springdale, AR 72762',
    link: 'https://www.zillow.com/homedetails/4749-Cowboy-St-Springdale-AR-72762/453022368_zpid/',
    image: 'https://photos.zillowstatic.com/fp/f168d377325742380217eb2720874bf5-a_a.jpg',
    beds: 4,
    baths: 2,
    price: '$449,950',
  },
  {
    address: '7699 Scenic Valley Ave',
    city: 'Springdale, AR 72762',
    link: 'https://www.zillow.com/homedetails/7699-Scenic-Valley-Ave-Springdale-AR-72762/459986992_zpid/',
    image: 'https://photos.zillowstatic.com/fp/f168d377325742380217eb2720874bf5-a_a.jpg',
    beds: 4,
    baths: 2,
    price: '$445,950',
  },
  {
    address: '397 Thompson St',
    city: 'Centerton, AR 72719',
    link: 'https://www.zillow.com/homedetails/397-Thompson-St-Centerton-AR-72719/70679681_zpid/',
    image: 'https://photos.zillowstatic.com/fp/f848fa09f3cbca9a8efb55d51ba6bbdc-a_a.jpg',
    beds: 3,
    baths: 2,
    price: '$299,900',
  },
  {
    address: '7735 Scenic Valley Ave',
    city: 'Springdale, AR 72762',
    link: 'https://www.zillow.com/homedetails/7735-Scenic-Valley-Ave-Springdale-AR-72762/459970380_zpid/',
    image: 'https://photos.zillowstatic.com/fp/da420c395c8955ecc28c414f62caaf06-a_a.jpg',
    beds: 4,
    baths: 2,
    price: '$445,950',
  },
]

const recentSales = [
  {
    address: '23 Addison Ln',
    city: 'Bella Vista, AR 72715',
    link: 'https://www.zillow.com/homedetails/23-Addison-Ln-Bella-Vista-AR-72715/70668804_zpid/',
    image: 'https://photos.zillowstatic.com/fp/f808e961771c0098fde1e0bacb72efe8-p_b.jpg',
    date: '2/9/2026',
    price: '$285,000',
    represented: 'Buyer',
  },
  {
    address: '19 Dogwood Rdg',
    city: 'Eureka Springs, AR 72632',
    link: 'https://www.zillow.com/homedetails/19-Dogwood-Rdg-Eureka-Springs-AR-72632/228482461_zpid/',
    image: 'https://photos.zillowstatic.com/fp/26b1feea2a4db5c5959930d807e5f30-p_b.jpg',
    date: '2/6/2026',
    price: '$200,000',
    represented: 'Buyer',
  },
  {
    address: '6 Bishampton Ln',
    city: 'Bella Vista, AR 72714',
    link: 'https://www.zillow.com/homedetails/6-Bishampton-Ln-Bella-Vista-AR-72714/70688879_zpid/',
    image: 'https://photos.zillowstatic.com/fp/a371249d7251e055007a0c31f70fba18-p_b.jpg',
    date: '2/3/2026',
    price: '$314,500',
    represented: 'Buyer',
  },
  {
    address: '67 Pamona Dr',
    city: 'Bella Vista, AR 72715',
    link: 'https://www.zillow.com/homedetails/67-Pamona-Dr-Bella-Vista-AR-72715/70706935_zpid/',
    image: 'https://photos.zillowstatic.com/fp/b9c43f7908bb24c893c23365d9752784-p_b.jpg',
    date: '1/28/2026',
    price: '$465,000',
    represented: 'Buyer',
  },
  {
    address: '7855 Teton Trail Ave',
    city: 'Springdale, AR 72762',
    link: 'https://www.zillow.com/homedetails/7855-Teton-Trail-Ave-Springdale-AR-72762/453020407_zpid/',
    image: 'https://photos.zillowstatic.com/fp/e1a1b399dd8bd684dd77a08e91fa2d91-p_b.jpg',
    date: '1/28/2026',
    price: '$531,025',
    represented: 'Buyer and Seller',
  },
]

const stats = {
  totalListingsAndSales: 1302,
  forSale: 25,
  sold: 1277,
}
</script>

<template>
  <SeoHead
    title="Team Listings & Sales | Ruby Poole Team"
    description="Browse current listings and recent sales from the Ruby Poole Team. Over 1,300 transactions across Northwest Arkansas."
    canonical="/search"
  />

  <main class="min-h-screen bg-base-200/30">
    <!-- Hero Header -->
    <section class="py-16 bg-gradient-to-br from-base-100 via-base-200/50 to-primary/5">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <TrendingUp class="w-4 h-4" />
            {{ stats.totalListingsAndSales.toLocaleString() }} Total Transactions
          </div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-display mb-4">
            Team Listings & Sales
          </h1>
          <p class="text-lg text-base-content/60 mb-8">
            Explore our current listings and proven track record across Northwest Arkansas
          </p>
          <div class="flex flex-wrap gap-3 justify-center">
            <button 
              @click="showAlertModal = true"
              class="btn btn-primary gap-2"
            >
              <Bell class="w-4 h-4" />
              Get Home Alerts
            </button>
            <a 
              href="https://www.zillow.com/profile/RubyPoole1" 
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline gap-2"
            >
              <ExternalLink class="w-4 h-4" />
              View All on Zillow
            </a>
          </div>
        </div>

        <!-- Stats Bar -->
        <div class="grid grid-cols-3 gap-4 max-w-xl mx-auto mt-12">
          <div class="text-center p-4 bg-base-100 rounded-xl shadow-sm">
            <div class="text-2xl md:text-3xl font-display text-primary">{{ stats.forSale }}</div>
            <div class="text-xs text-base-content/60 mt-1">For Sale</div>
          </div>
          <div class="text-center p-4 bg-base-100 rounded-xl shadow-sm">
            <div class="text-2xl md:text-3xl font-display text-primary">{{ stats.sold.toLocaleString() }}</div>
            <div class="text-xs text-base-content/60 mt-1">Sold</div>
          </div>
          <div class="text-center p-4 bg-base-100 rounded-xl shadow-sm">
            <div class="text-2xl md:text-3xl font-display text-primary">{{ stats.totalListingsAndSales.toLocaleString() }}</div>
            <div class="text-xs text-base-content/60 mt-1">Total</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tabs + Content -->
    <section class="py-12">
      <div class="container-custom">
        <!-- Tab Toggle -->
        <div class="flex justify-center mb-10">
          <div class="join bg-base-100 shadow-md rounded-xl p-1">
            <button 
              @click="activeTab = 'for-sale'"
              class="join-item btn btn-sm md:btn-md gap-2 min-w-[140px]"
              :class="activeTab === 'for-sale' ? 'btn-primary' : 'btn-ghost'"
            >
              <Home class="w-4 h-4" />
              For Sale ({{ stats.forSale }})
            </button>
            <button 
              @click="activeTab = 'sold'"
              class="join-item btn btn-sm md:btn-md gap-2 min-w-[140px]"
              :class="activeTab === 'sold' ? 'btn-primary' : 'btn-ghost'"
            >
              <DollarSign class="w-4 h-4" />
              Sold ({{ stats.sold.toLocaleString() }})
            </button>
          </div>
        </div>

        <!-- For Sale Grid -->
        <div v-if="activeTab === 'for-sale'">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl md:text-2xl font-display">Current Listings</h2>
            <span class="text-sm text-base-content/60">Showing 5 of {{ stats.forSale }}</span>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a 
              v-for="listing in forSaleListings" 
              :key="listing.address"
              :href="listing.link"
              target="_blank"
              rel="noopener noreferrer"
              class="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <!-- Image -->
              <figure class="relative h-48 overflow-hidden">
                <img 
                  :src="listing.image" 
                  :alt="listing.address"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute top-3 left-3">
                  <span class="badge badge-error text-white font-semibold text-xs px-3 py-2.5 shadow-lg">
                    For Sale
                  </span>
                </div>
                <div class="absolute bottom-3 right-3">
                  <span class="bg-base-100/90 backdrop-blur-sm text-base-content font-bold text-lg px-3 py-1 rounded-lg shadow">
                    {{ listing.price }}
                  </span>
                </div>
              </figure>
              <!-- Details -->
              <div class="card-body p-5">
                <h3 class="font-display text-lg group-hover:text-primary transition-colors">{{ listing.address }}</h3>
                <div class="flex items-center gap-1.5 text-sm text-base-content/60">
                  <MapPin class="w-3.5 h-3.5" />
                  {{ listing.city }}
                </div>
                <div class="flex gap-4 mt-3 pt-3 border-t border-base-200">
                  <div class="flex items-center gap-1.5 text-sm">
                    <BedDouble class="w-4 h-4 text-primary/60" />
                    <span>{{ listing.beds }} Beds</span>
                  </div>
                  <div class="flex items-center gap-1.5 text-sm">
                    <Bath class="w-4 h-4 text-primary/60" />
                    <span>{{ listing.baths }} Baths</span>
                  </div>
                </div>
                <div class="flex items-center gap-1 text-primary text-sm font-medium mt-3">
                  View on Zillow
                  <ExternalLink class="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          </div>

          <!-- View All CTA -->
          <div class="text-center mt-10">
            <a 
              href="https://www.zillow.com/profile/RubyPoole1" 
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-lg gap-2"
            >
              View All {{ stats.forSale }} Listings on Zillow
              <ArrowRight class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Sold Grid -->
        <div v-if="activeTab === 'sold'">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl md:text-2xl font-display">Recent Sales</h2>
            <span class="text-sm text-base-content/60">Showing 5 of {{ stats.sold.toLocaleString() }}</span>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a 
              v-for="sale in recentSales" 
              :key="sale.address"
              :href="sale.link"
              target="_blank"
              rel="noopener noreferrer"
              class="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <!-- Image -->
              <figure class="relative h-48 overflow-hidden">
                <img 
                  :src="sale.image" 
                  :alt="sale.address"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute top-3 left-3">
                  <span class="badge badge-warning text-warning-content font-semibold text-xs px-3 py-2.5 shadow-lg">
                    Sold
                  </span>
                </div>
                <div class="absolute bottom-3 right-3">
                  <span class="bg-base-100/90 backdrop-blur-sm text-base-content font-bold text-lg px-3 py-1 rounded-lg shadow">
                    {{ sale.price }}
                  </span>
                </div>
              </figure>
              <!-- Details -->
              <div class="card-body p-5">
                <h3 class="font-display text-lg group-hover:text-primary transition-colors">{{ sale.address }}</h3>
                <div class="flex items-center gap-1.5 text-sm text-base-content/60">
                  <MapPin class="w-3.5 h-3.5" />
                  {{ sale.city }}
                </div>
                <div class="flex gap-4 mt-3 pt-3 border-t border-base-200">
                  <div class="flex items-center gap-1.5 text-sm">
                    <Calendar class="w-4 h-4 text-primary/60" />
                    <span>Sold {{ sale.date }}</span>
                  </div>
                  <div class="flex items-center gap-1.5 text-sm">
                    <Users class="w-4 h-4 text-primary/60" />
                    <span>{{ sale.represented }}</span>
                  </div>
                </div>
                <div class="flex items-center gap-1 text-primary text-sm font-medium mt-3">
                  View on Zillow
                  <ExternalLink class="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          </div>

          <!-- View All CTA -->
          <div class="text-center mt-10">
            <a 
              href="https://www.zillow.com/profile/RubyPoole1" 
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-lg gap-2"
            >
              View All Sales on Zillow
              <ArrowRight class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary/5">
      <div class="container-custom">
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-display mb-4">Looking for Your Next Home?</h2>
          <p class="text-base-content/60 mb-8">
            Our team has completed over 1,300 transactions in Northwest Arkansas. Let us help you find or sell your home.
          </p>
          <div class="flex flex-wrap gap-3 justify-center">
            <button 
              @click="showAlertModal = true"
              class="btn btn-primary gap-2"
            >
              <Bell class="w-4 h-4" />
              Set Up Home Alerts
            </button>
            <RouterLink to="/team" class="btn btn-outline gap-2">
              <Users class="w-4 h-4" />
              Meet Our Team
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>

  <HomeAlertModal v-model="showAlertModal" />
</template>
