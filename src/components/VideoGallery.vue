<script setup lang="ts">
import { Play } from 'lucide-vue-next'
import YouTubeEmbed from './YouTubeEmbed.vue'

interface Video {
  id: string
  title: string
  category?: string
  featured?: boolean
}

interface Props {
  videos: Video[]
  title?: string
  categories?: string[]
  showCategories?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Video Gallery',
  showCategories: true,
})

import { ref, computed } from 'vue'

const selectedCategory = ref<string | null>(null)

const filteredVideos = computed(() => {
  if (!selectedCategory.value) return props.videos
  return props.videos.filter(v => v.category === selectedCategory.value)
})

const featuredVideo = computed(() => props.videos.find(v => v.featured) || props.videos[0])

const uniqueCategories = computed(() => {
  const cats = props.videos
    .map(v => v.category)
    .filter((c, i, arr) => c && arr.indexOf(c) === i) as string[]
  return props.categories || cats
})

const selectCategory = (category: string | null) => {
  selectedCategory.value = category
}
</script>

<template>
  <div class="video-gallery">
    <!-- Header -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <h2 v-if="title" class="text-2xl md:text-3xl font-display">{{ title }}</h2>
      
      <!-- Category Tabs -->
      <div v-if="showCategories && uniqueCategories.length > 1" class="flex flex-wrap gap-2">
        <button
          @click="selectCategory(null)"
          class="btn btn-sm"
          :class="selectedCategory === null ? 'btn-primary' : 'btn-ghost'"
        >
          All
        </button>
        <button
          v-for="cat in uniqueCategories"
          :key="cat"
          @click="selectCategory(cat)"
          class="btn btn-sm"
          :class="selectedCategory === cat ? 'btn-primary' : 'btn-ghost'"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Featured Video -->
    <div v-if="featuredVideo && !selectedCategory" class="mb-8">
      <YouTubeEmbed
        :video-id="featuredVideo.id"
        :title="featuredVideo.title"
        thumbnail-quality="maxres"
      />
      <h3 class="font-display text-xl mt-4">{{ featuredVideo.title }}</h3>
    </div>

    <!-- Video Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="video in filteredVideos.filter(v => v.id !== featuredVideo?.id || selectedCategory)"
        :key="video.id"
        class="group"
      >
        <YouTubeEmbed
          :video-id="video.id"
          :title="video.title"
          thumbnail-quality="hq"
        />
        <div class="mt-3">
          <h4 class="font-medium group-hover:text-primary transition-colors line-clamp-2">
            {{ video.title }}
          </h4>
          <span v-if="video.category" class="text-sm text-base-content/50">{{ video.category }}</span>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredVideos.length === 0" class="text-center py-12 text-base-content/60">
      <Play class="w-12 h-12 mx-auto mb-4 opacity-50" />
      <p>No videos found in this category.</p>
    </div>
  </div>
</template>
