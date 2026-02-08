<script setup lang="ts">
import { ref } from 'vue'
import { Play } from 'lucide-vue-next'

interface Props {
  videoId: string
  title?: string
  aspectRatio?: '16:9' | '4:3' | '1:1'
  thumbnailQuality?: 'default' | 'hq' | 'mq' | 'sd' | 'maxres'
}

const props = withDefaults(defineProps<Props>(), {
  title: 'YouTube Video',
  aspectRatio: '16:9',
  thumbnailQuality: 'hq',
})

const isLoaded = ref(false)

// Thumbnail quality options
const thumbnailUrls: Record<string, string> = {
  default: `https://img.youtube.com/vi/${props.videoId}/default.jpg`,
  mq: `https://img.youtube.com/vi/${props.videoId}/mqdefault.jpg`,
  hq: `https://img.youtube.com/vi/${props.videoId}/hqdefault.jpg`,
  sd: `https://img.youtube.com/vi/${props.videoId}/sddefault.jpg`,
  maxres: `https://img.youtube.com/vi/${props.videoId}/maxresdefault.jpg`,
}

const thumbnailUrl = thumbnailUrls[props.thumbnailQuality] || thumbnailUrls.hq

const aspectRatioClass = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '1:1': 'aspect-square',
}

const loadVideo = () => {
  isLoaded.value = true
}
</script>

<template>
  <div 
    :class="[
      'youtube-embed relative overflow-hidden rounded-xl bg-neutral',
      aspectRatioClass[aspectRatio]
    ]"
    role="button"
    :aria-label="`Play video: ${title}`"
    @click="loadVideo"
  >
    <!-- Thumbnail Facade (before load) -->
    <template v-if="!isLoaded">
      <img
        :src="thumbnailUrl"
        :alt="title"
        class="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-neutral/60 via-transparent to-transparent"></div>
      
      <!-- Play Button -->
      <button
        class="absolute inset-0 flex items-center justify-center group cursor-pointer"
        aria-label="Play video"
      >
        <div class="w-20 h-20 rounded-full bg-primary flex items-center justify-center transform transition-transform group-hover:scale-110 shadow-2xl">
          <Play class="w-10 h-10 text-primary-content fill-primary-content ml-1" />
        </div>
      </button>
      
      <!-- Title Overlay -->
      <div v-if="title" class="absolute bottom-0 left-0 right-0 p-4">
        <p class="text-neutral-content font-medium text-sm line-clamp-2">{{ title }}</p>
      </div>
    </template>

    <!-- Actual YouTube iframe (after load) -->
    <iframe
      v-else
      :src="`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`"
      :title="title"
      class="absolute inset-0 w-full h-full"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
.youtube-embed {
  min-height: 200px;
}
</style>
