<script setup lang="ts">
import { ArrowRight, Calendar, User } from 'lucide-vue-next'
import type { BlogPost } from '@/data/blogPosts'

interface Props {
  post: BlogPost
  variant?: 'default' | 'featured' | 'compact'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
</script>

<template>
  <!-- Featured Variant -->
  <RouterLink
    v-if="variant === 'featured'"
    :to="`/blog/${post.slug}`"
    class="block group relative rounded-2xl overflow-hidden aspect-[16/9] lg:aspect-[21/9]"
  >
    <img 
      :src="post.image" 
      :alt="post.title"
      class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-neutral via-neutral/50 to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 p-6 md:p-10">
      <div class="flex items-center gap-4 text-neutral-content/70 text-sm mb-3">
        <span class="badge badge-primary">{{ post.category }}</span>
        <span class="flex items-center gap-1">
          <Calendar class="w-3 h-3" />
          {{ formatDate(post.date) }}
        </span>
      </div>
      <h2 class="text-2xl md:text-4xl font-display text-neutral-content mb-3 group-hover:text-primary transition-colors">
        {{ post.title }}
      </h2>
      <p class="text-neutral-content/80 max-w-2xl line-clamp-2 mb-4">{{ post.excerpt }}</p>
      <span class="text-primary font-medium flex items-center gap-1">
        Read Article
        <ArrowRight class="w-4 h-4" />
      </span>
    </div>
  </RouterLink>

  <!-- Compact Variant -->
  <RouterLink
    v-else-if="variant === 'compact'"
    :to="`/blog/${post.slug}`"
    class="flex gap-4 group"
  >
    <div class="w-20 h-20 rounded-lg overflow-hidden bg-base-200 flex-shrink-0">
      <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
    </div>
    <div>
      <h4 class="font-medium line-clamp-2 group-hover:text-primary transition-colors">{{ post.title }}</h4>
      <span class="text-sm text-base-content/50">{{ formatDate(post.date) }}</span>
    </div>
  </RouterLink>

  <!-- Default Variant -->
  <RouterLink
    v-else
    :to="`/blog/${post.slug}`"
    class="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow group overflow-hidden"
  >
    <figure class="aspect-video overflow-hidden">
      <img 
        :src="post.image" 
        :alt="post.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </figure>
    <div class="card-body p-5">
      <div class="flex items-center gap-3 text-sm text-base-content/60 mb-2">
        <span class="badge badge-ghost badge-sm">{{ post.category }}</span>
        <span class="flex items-center gap-1">
          <Calendar class="w-3 h-3" />
          {{ formatDate(post.date) }}
        </span>
      </div>
      <h3 class="card-title text-lg font-display group-hover:text-primary transition-colors line-clamp-2">
        {{ post.title }}
      </h3>
      <p class="text-sm text-base-content/70 line-clamp-2 mt-1">{{ post.excerpt }}</p>
      <div class="flex items-center gap-2 text-sm text-base-content/50 mt-3">
        <User class="w-3 h-3" />
        <span>{{ post.author }}</span>
      </div>
    </div>
  </RouterLink>
</template>
