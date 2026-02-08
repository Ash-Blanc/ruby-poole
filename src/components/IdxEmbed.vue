<script setup lang="ts">
import { computed } from 'vue'

type IdxProvider = 'ruuster' | 'ihomefinder' | 'idxbroker' | 'showcase' | 'generic'
type EmbedType = 'search' | 'map' | 'featured' | 'single' | 'saved-search'

interface Props {
  provider?: IdxProvider
  type?: EmbedType
  listingId?: string
  searchParams?: Record<string, string>
  height?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  provider: 'generic',
  type: 'search',
  height: '600px',
})

// Provider-specific iframe URLs (placeholders - replace with actual IDX URLs)
const providerUrls: Record<IdxProvider, Record<EmbedType, string>> = {
  ruuster: {
    search: 'https://ruuster.com/embed/search',
    map: 'https://ruuster.com/embed/map',
    featured: 'https://ruuster.com/embed/featured',
    single: 'https://ruuster.com/embed/listing',
    'saved-search': 'https://ruuster.com/embed/saved',
  },
  ihomefinder: {
    search: 'https://ihomefinder.com/embed/search',
    map: 'https://ihomefinder.com/embed/map',
    featured: 'https://ihomefinder.com/embed/featured',
    single: 'https://ihomefinder.com/embed/listing',
    'saved-search': 'https://ihomefinder.com/embed/saved',
  },
  idxbroker: {
    search: 'https://idxbroker.com/embed/search',
    map: 'https://idxbroker.com/embed/map',
    featured: 'https://idxbroker.com/embed/featured',
    single: 'https://idxbroker.com/embed/listing',
    'saved-search': 'https://idxbroker.com/embed/saved',
  },
  showcase: {
    search: 'https://showcaseidx.com/embed/search',
    map: 'https://showcaseidx.com/embed/map',
    featured: 'https://showcaseidx.com/embed/featured',
    single: 'https://showcaseidx.com/embed/listing',
    'saved-search': 'https://showcaseidx.com/embed/saved',
  },
  generic: {
    search: '',
    map: '',
    featured: '',
    single: '',
    'saved-search': '',
  },
}

const embedUrl = computed((): string => {
  const baseUrl = providerUrls[props.provider][props.type]
  if (!baseUrl) return ''
  
  const params = new URLSearchParams(props.searchParams || {})
  if (props.listingId) params.set('id', props.listingId)
  
  const queryString = params.toString()
  return queryString ? `${baseUrl}?${queryString}` : baseUrl
})

const isConfigured = computed(() => props.provider !== 'generic' && embedUrl.value.length > 0)
</script>

<template>
  <div :class="['idx-embed-container', className]">
    <!-- Live IDX Embed -->
    <iframe
      v-if="isConfigured"
      :src="embedUrl"
      :style="{ height, width: '100%', border: 'none' }"
      loading="lazy"
      title="Property Search"
      allow="geolocation"
    />
    
    <!-- Placeholder when not configured -->
    <div 
      v-else 
      class="idx-placeholder flex flex-col items-center justify-center bg-base-200 rounded-2xl p-12"
      :style="{ minHeight: height }"
    >
      <div class="text-center max-w-md">
        <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
          <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-display mb-3">Property Search Coming Soon</h3>
        <p class="text-base-content/60 mb-6">
          Our full MLS search is being configured. In the meantime, explore our featured listings below or contact us directly.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#listings" class="btn btn-primary">View Listings</a>
          <a href="#contact" class="btn btn-outline">Contact Us</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.idx-embed-container {
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
}

.idx-placeholder {
  background: linear-gradient(135deg, oklch(97% 0.006 60) 0%, oklch(94% 0.008 60) 100%);
}
</style>
