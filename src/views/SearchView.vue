<script setup lang="ts">
import { Search, MapPin, SlidersHorizontal, Bell, Grid, Map } from 'lucide-vue-next'
import { ref } from 'vue'
import SeoHead from '@/components/SeoHead.vue'
import IdxEmbed from '@/components/IdxEmbed.vue'
import HomeAlertModal from '@/components/HomeAlertModal.vue'

const viewMode = ref<'grid' | 'map'>('grid')
const showFilters = ref(false)
const showAlertModal = ref(false)

const propertyTypes = ['Single Family', 'Condo/Townhouse', 'Multi-Family', 'Land', 'New Construction']
const priceRanges = [
  { label: 'Any', min: 0, max: 0 },
  { label: 'Under $200k', min: 0, max: 200000 },
  { label: '$200k - $300k', min: 200000, max: 300000 },
  { label: '$300k - $500k', min: 300000, max: 500000 },
  { label: '$500k - $750k', min: 500000, max: 750000 },
  { label: '$750k+', min: 750000, max: 0 },
]

const filters = ref({
  location: '',
  priceRange: 0,
  beds: 0,
  baths: 0,
  propertyType: '',
})
</script>

<template>
  <SeoHead
    title="Search Homes for Sale in Northwest Arkansas"
    description="Browse all homes for sale in Bentonville, Rogers, Bella Vista, Fayetteville and surrounding NWA areas. Filter by price, beds, baths, and more."
    canonical="/search"
  />

  <main class="min-h-screen bg-base-200/30">
    <!-- Search Header -->
    <section class="bg-base-100 py-8 border-b border-base-200">
      <div class="container-custom">
        <div class="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div>
            <h1 class="text-2xl md:text-3xl font-display mb-2">Find Your Home</h1>
            <p class="text-base-content/60">Browse homes across Northwest Arkansas</p>
          </div>
          
          <div class="flex gap-2 flex-wrap justify-center">
            <button 
              @click="showAlertModal = true"
              class="btn btn-primary gap-2"
            >
              <Bell class="w-4 h-4" />
              Get Home Alerts
            </button>
            <button 
              @click="showFilters = !showFilters"
              class="btn btn-outline gap-2"
            >
              <SlidersHorizontal class="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        <!-- Filter Panel -->
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="showFilters" class="mt-6 p-6 bg-base-200/50 rounded-xl">
            <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <!-- Location -->
              <div class="form-control">
                <label class="label pb-1"><span class="label-text text-xs font-medium">Location</span></label>
                <div class="relative">
                  <MapPin class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/40" />
                  <input 
                    v-model="filters.location"
                    type="text" 
                    placeholder="City or ZIP"
                    class="input input-bordered w-full pl-10 input-sm"
                  />
                </div>
              </div>

              <!-- Price -->
              <div class="form-control">
                <label class="label pb-1"><span class="label-text text-xs font-medium">Price Range</span></label>
                <select v-model="filters.priceRange" class="select select-bordered select-sm w-full">
                  <option v-for="(range, idx) in priceRanges" :key="idx" :value="idx">{{ range.label }}</option>
                </select>
              </div>

              <!-- Beds -->
              <div class="form-control">
                <label class="label pb-1"><span class="label-text text-xs font-medium">Bedrooms</span></label>
                <select v-model="filters.beds" class="select select-bordered select-sm w-full">
                  <option :value="0">Any</option>
                  <option v-for="n in 5" :key="n" :value="n">{{ n }}+</option>
                </select>
              </div>

              <!-- Baths -->
              <div class="form-control">
                <label class="label pb-1"><span class="label-text text-xs font-medium">Bathrooms</span></label>
                <select v-model="filters.baths" class="select select-bordered select-sm w-full">
                  <option :value="0">Any</option>
                  <option v-for="n in 4" :key="n" :value="n">{{ n }}+</option>
                </select>
              </div>

              <!-- Property Type -->
              <div class="form-control">
                <label class="label pb-1"><span class="label-text text-xs font-medium">Property Type</span></label>
                <select v-model="filters.propertyType" class="select select-bordered select-sm w-full">
                  <option value="">All Types</option>
                  <option v-for="type in propertyTypes" :key="type" :value="type">{{ type }}</option>
                </select>
              </div>
            </div>

            <div class="flex justify-between items-center mt-4 pt-4 border-t border-base-300">
              <button class="btn btn-ghost btn-sm">Reset Filters</button>
              <button class="btn btn-primary btn-sm gap-2">
                <Search class="w-4 h-4" />
                Search
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </section>

    <!-- View Toggle & Results -->
    <section class="py-8">
      <div class="container-custom">
        <!-- View Toggle -->
        <div class="flex justify-between items-center mb-6">
          <p class="text-sm text-base-content/60">
            Showing homes in Northwest Arkansas
          </p>
          <div class="join">
            <button 
              @click="viewMode = 'grid'"
              class="btn btn-sm join-item"
              :class="viewMode === 'grid' ? 'btn-primary' : 'btn-ghost'"
            >
              <Grid class="w-4 h-4" />
            </button>
            <button 
              @click="viewMode = 'map'"
              class="btn btn-sm join-item"
              :class="viewMode === 'map' ? 'btn-primary' : 'btn-ghost'"
            >
              <Map class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- IDX Content -->
        <IdxEmbed 
          :type="viewMode === 'map' ? 'map' : 'search'"
          height="700px"
        />
      </div>
    </section>
  </main>

  <HomeAlertModal v-model="showAlertModal" />
</template>
