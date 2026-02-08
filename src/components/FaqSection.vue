<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { ChevronDown, Search } from 'lucide-vue-next'

interface FaqItem {
  question: string
  answer: string
  category?: string
}

interface Props {
  items: FaqItem[]
  title?: string
  showSearch?: boolean
  enableStructuredData?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Frequently Asked Questions',
  showSearch: false,
  enableStructuredData: true,
})

const searchQuery = ref('')
const openItems = ref<number[]>([0]) // First item open by default

const filteredItems = computed(() => {
  if (!searchQuery.value.trim()) return props.items
  
  const query = searchQuery.value.toLowerCase()
  return props.items.filter(item => 
    item.question.toLowerCase().includes(query) ||
    item.answer.toLowerCase().includes(query)
  )
})

const toggleItem = (index: number) => {
  const idx = openItems.value.indexOf(index)
  if (idx > -1) {
    openItems.value.splice(idx, 1)
  } else {
    openItems.value.push(index)
  }
}

const isOpen = (index: number) => openItems.value.includes(index)

// Schema.org FAQPage structured data
const structuredData = computed(() => {
  if (!props.enableStructuredData) return null
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: props.items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
})

// Reset open items when search changes
watch(searchQuery, () => {
  openItems.value = filteredItems.value.length > 0 ? [0] : []
})
</script>

<template>
  <!-- Structured Data -->
  <component
    v-if="structuredData"
    :is="'script'"
    type="application/ld+json"
    v-html="JSON.stringify(structuredData)"
  />

  <div class="faq-section">
    <!-- Header -->
    <div v-if="title || showSearch" class="mb-8">
      <h2 v-if="title" class="text-2xl md:text-3xl font-display mb-4 text-center">{{ title }}</h2>
      
      <!-- Search -->
      <div v-if="showSearch" class="max-w-md mx-auto">
        <label class="input input-bordered flex items-center gap-2">
          <Search class="w-4 h-4 text-base-content/50" />
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search FAQs..." 
            class="grow"
          />
        </label>
      </div>
    </div>

    <!-- FAQ Items -->
    <div class="space-y-3">
      <div
        v-for="(item, index) in filteredItems"
        :key="index"
        class="collapse collapse-arrow bg-base-100 rounded-xl border border-base-200"
        :class="{ 'collapse-open': isOpen(index) }"
      >
        <input 
          type="checkbox" 
          :checked="isOpen(index)"
          @change="toggleItem(index)"
          class="peer"
        />
        <div class="collapse-title font-medium pr-12">
          {{ item.question }}
        </div>
        <div class="collapse-content text-base-content/70">
          <p>{{ item.answer }}</p>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="filteredItems.length === 0" class="text-center py-8 text-base-content/60">
        <p>No matching questions found. Try a different search term.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.collapse-title::after {
  transition: transform 0.2s ease;
}
.collapse-open .collapse-title::after {
  transform: rotate(180deg);
}
</style>
