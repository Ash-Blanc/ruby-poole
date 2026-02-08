<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { MapPin, Home, School, TreePine, ArrowLeft, Check, DollarSign } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'
import IdxEmbed from '@/components/IdxEmbed.vue'
import FaqSection from '@/components/FaqSection.vue'

const route = useRoute()
const city = route.params.city as string
const neighborhood = route.params.neighborhood as string

// Neighborhood data - in production, fetch from CMS/API
const neighborhoodData: Record<string, Record<string, any>> = {
  bentonville: {
    downtown: {
      name: 'Downtown Bentonville',
      tagline: 'Walk to the Square, Crystal Bridges, and top restaurants',
      description: 'Downtown Bentonville is the heart of the city, offering walkable access to the famous Bentonville Square, Crystal Bridges Museum, and an ever-growing collection of restaurants and shops. Perfect for professionals and empty nesters who value convenience and culture.',
      priceRange: '$400K - $800K',
      homeTypes: ['Townhomes', 'Historic Renovations', 'New Construction'],
      highlights: ['Walking distance to Square', 'Crystal Bridges nearby', 'Top restaurants', 'Active nightlife'],
      schools: ['Lincoln Jr. High', 'Bentonville High'],
      lifestyle: 'Urban/Walkable',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    },
    'sugar-creek': {
      name: 'Sugar Creek',
      tagline: 'Family-friendly with top schools and plenty of green space',
      description: 'Sugar Creek is one of Bentonville\'s most desirable family neighborhoods, featuring excellent schools, multiple parks, and a strong sense of community. The area offers a mix of established homes and newer construction.',
      priceRange: '$350K - $600K',
      homeTypes: ['Single Family', 'New Construction'],
      highlights: ['Top-rated schools', 'Multiple parks', 'Community pool', 'Sports fields'],
      schools: ['Elm Tree Elementary', 'Bright Futures Elementary', 'Lincoln Jr. High'],
      lifestyle: 'Family-Friendly Suburban',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    },
  },
  rogers: {
    'pinnacle-hills': {
      name: 'Pinnacle Hills',
      tagline: 'Upscale living with shopping and entertainment at your doorstep',
      description: 'Pinnacle Hills is Rogers\' premier mixed-use development, combining luxury homes with high-end shopping, dining, and entertainment venues. The area features newer construction with modern amenities.',
      priceRange: '$450K - $900K',
      homeTypes: ['Luxury Single Family', 'Townhomes', 'Condos'],
      highlights: ['Pinnacle Hills Promenade', 'Upscale dining', 'Nearby trails', 'Modern amenities'],
      schools: ['Reagan Elementary', 'Elmwood Jr. High', 'Heritage High'],
      lifestyle: 'Upscale Urban',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    },
    'downtown-rogers': {
      name: 'Downtown Rogers',
      tagline: 'Historic charm meets modern revitalization',
      description: 'Downtown Rogers has experienced a renaissance in recent years, with historic buildings being transformed into restaurants, shops, and lofts. The area offers a unique blend of history and modern urban living.',
      priceRange: '$250K - $450K',
      homeTypes: ['Historic Homes', 'Lofts', 'Bungalows'],
      highlights: ['Historic architecture', 'Local restaurants', 'Art galleries', 'Farmers market'],
      schools: ['Greer Lingle Middle', 'Rogers High'],
      lifestyle: 'Historic/Urban',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
    },
  },
  'bella-vista': {
    kingswood: {
      name: 'Kingswood',
      tagline: 'Golf course living with lake access',
      description: 'Kingswood is a premier Bella Vista neighborhood built around the Kingswood Golf Course. Residents enjoy stunning golf course views, easy lake access, and the quiet lifestyle that makes Bella Vista special.',
      priceRange: '$300K - $550K',
      homeTypes: ['Golf Course Homes', 'Ranch Style', 'Custom Builds'],
      highlights: ['Golf course frontage', 'Lake access', 'Mature trees', 'POA amenities'],
      schools: ['Cooper Elementary', 'Bella Vista Middle', 'Bentonville West High'],
      lifestyle: 'Golf/Retirement',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
    },
  },
}

const data = computed(() => {
  return neighborhoodData[city]?.[neighborhood] || null
})

const faqs = computed(() => {
  if (!data.value) return []
  return [
    { question: `What is the average home price in ${data.value.name}?`, answer: `Home prices in ${data.value.name} typically range from ${data.value.priceRange}. Contact us for current listings and market conditions.` },
    { question: `What schools serve ${data.value.name}?`, answer: `Students in ${data.value.name} are served by ${data.value.schools.join(', ')}. Bentonville School District is consistently ranked among the best in Arkansas.` },
    { question: `What types of homes are available?`, answer: `${data.value.name} features primarily ${data.value.homeTypes.join(', ')}. The neighborhood is known for its ${data.value.lifestyle.toLowerCase()} atmosphere.` },
  ]
})

const cityName = computed(() => {
  const names: Record<string, string> = {
    bentonville: 'Bentonville',
    rogers: 'Rogers',
    'bella-vista': 'Bella Vista',
    fayetteville: 'Fayetteville',
    springdale: 'Springdale',
  }
  return names[city] || city
})
</script>

<template>
  <div v-if="data">
    <SeoHead
      :title="`${data.name} Homes for Sale`"
      :description="`Explore homes in ${data.name}, ${cityName}. ${data.tagline}. Price range: ${data.priceRange}.`"
      :canonical="`/areas/${city}/neighborhoods/${neighborhood}`"
    />

    <main>
      <!-- Hero -->
      <section class="relative min-h-[50vh] flex items-center overflow-hidden">
        <div class="absolute inset-0">
          <img :src="data.image" :alt="data.name" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-neutral/90 via-neutral/70 to-transparent"></div>
        </div>

        <div class="container-custom relative z-10 py-16">
          <RouterLink 
            :to="`/areas/${city}`"
            class="inline-flex items-center gap-2 text-neutral-content/70 hover:text-primary text-sm mb-6"
          >
            <ArrowLeft class="w-4 h-4" />
            Back to {{ cityName }}
          </RouterLink>

          <h1 class="text-4xl md:text-5xl font-display text-neutral-content mb-4">
            {{ data.name }}
          </h1>
          <p class="text-xl text-neutral-content/80 max-w-2xl mb-6">{{ data.tagline }}</p>
          
          <div class="flex flex-wrap gap-4 items-center">
            <div class="badge badge-lg badge-primary gap-2">
              <DollarSign class="w-4 h-4" />
              {{ data.priceRange }}
            </div>
            <div class="badge badge-lg badge-ghost text-neutral-content">
              {{ data.lifestyle }}
            </div>
          </div>
        </div>
      </section>

      <!-- Overview -->
      <section class="py-16">
        <div class="container-custom">
          <div class="grid lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
              <h2 class="text-2xl font-display mb-4">About {{ data.name }}</h2>
              <p class="text-base-content/70 leading-relaxed mb-8">{{ data.description }}</p>

              <!-- Highlights -->
              <div class="grid sm:grid-cols-2 gap-4 mb-8">
                <div v-for="highlight in data.highlights" :key="highlight" class="flex items-center gap-3">
                  <Check class="w-5 h-5 text-success" />
                  <span>{{ highlight }}</span>
                </div>
              </div>

              <!-- Home Types -->
              <h3 class="font-display text-lg mb-3">Home Types</h3>
              <div class="flex flex-wrap gap-2 mb-8">
                <span v-for="type in data.homeTypes" :key="type" class="badge badge-outline py-3 px-4">
                  {{ type }}
                </span>
              </div>

              <!-- Schools -->
              <h3 class="font-display text-lg mb-3">Schools</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="school in data.schools" :key="school" class="badge badge-ghost py-3 px-4">
                  <School class="w-3 h-3 mr-2" />
                  {{ school }}
                </span>
              </div>
            </div>

            <!-- Lead Form -->
            <div class="bg-base-200/50 rounded-2xl p-8">
              <h3 class="font-display text-xl mb-2">Explore {{ data.name }}</h3>
              <p class="text-sm text-base-content/60 mb-6">Get personalized recommendations for this neighborhood</p>
              <LeadForm :source="`neighborhood-${neighborhood}`" submit-label="Get Listings" />
            </div>
          </div>
        </div>
      </section>

      <!-- Listings -->
      <section class="py-16 bg-base-200/50">
        <div class="container-custom">
          <h2 class="text-2xl font-display mb-8 text-center">Homes for Sale in {{ data.name }}</h2>
          <IdxEmbed 
            type="search" 
            :search-params="{ neighborhood: neighborhood }" 
            height="500px" 
          />
        </div>
      </section>

      <!-- FAQs -->
      <section class="py-16">
        <div class="container-custom max-w-3xl">
          <FaqSection :items="faqs" :title="`${data.name} FAQs`" />
        </div>
      </section>

      <!-- CTA -->
      <section class="py-16 bg-primary text-primary-content">
        <div class="container-custom text-center">
          <h2 class="text-3xl font-display mb-4">Ready to Explore {{ data.name }}?</h2>
          <p class="text-primary-content/80 mb-8 max-w-lg mx-auto">
            Let us show you what makes this neighborhood special. Schedule a tour today.
          </p>
          <RouterLink to="/#contact" class="btn btn-secondary btn-lg">Talk to a Local Expert</RouterLink>
        </div>
      </section>
    </main>
  </div>

  <!-- 404 for unknown neighborhoods -->
  <div v-else class="min-h-[60vh] flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-2xl font-display mb-4">Neighborhood Not Found</h1>
      <RouterLink :to="`/areas/${city}`" class="btn btn-primary">Explore {{ cityName }}</RouterLink>
    </div>
  </div>
</template>
