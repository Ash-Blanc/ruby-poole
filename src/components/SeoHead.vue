<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed } from 'vue'

interface Props {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noIndex?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  ogType: 'website',
  noIndex: false,
})

const baseUrl = 'https://rubypoole.com'
const siteName = 'Ruby Poole Team | Collier & Associates'

const fullTitle = computed(() => 
  props.title.includes('Ruby Poole') ? props.title : `${props.title} | Ruby Poole Team`
)

const canonicalUrl = computed(() => 
  props.canonical ? `${baseUrl}${props.canonical}` : undefined
)

const ogImageUrl = computed(() => 
  props.ogImage ? `${baseUrl}${props.ogImage}` : `${baseUrl}/og-default.jpg`
)

useHead({
  title: fullTitle,
  meta: [
    { name: 'description', content: props.description },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: props.description },
    { property: 'og:type', content: props.ogType },
    { property: 'og:image', content: ogImageUrl },
    { property: 'og:site_name', content: siteName },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: props.description },
    ...(props.noIndex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
  ],
  link: canonicalUrl.value ? [{ rel: 'canonical', href: canonicalUrl.value }] : [],
})
</script>

<template>
  <!-- SEO head injection - no visible output -->
</template>
