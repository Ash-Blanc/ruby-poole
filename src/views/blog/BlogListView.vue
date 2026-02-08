<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SeoHead from '@/components/SeoHead.vue'
import BlogCard from '@/components/blog/BlogCard.vue'
import BlogSidebar from '@/components/blog/BlogSidebar.vue'
import { blogPosts, getCategories, getFeaturedPosts } from '@/data/blogPosts'

const route = useRoute()

const currentCategory = computed(() => route.query.category as string || null)

const filteredPosts = computed(() => {
  if (!currentCategory.value) return blogPosts
  return blogPosts.filter(post => post.category === currentCategory.value)
})

const featuredPost = computed(() => {
  const featured = getFeaturedPosts()
  return featured.length > 0 && !currentCategory.value ? featured[0] : null
})

const regularPosts = computed(() => {
  if (featuredPost.value) {
    return filteredPosts.value.filter(p => p.slug !== featuredPost.value?.slug)
  }
  return filteredPosts.value
})

const categories = getCategories()
</script>

<template>
  <SeoHead
    :title="currentCategory ? `${currentCategory} Articles` : 'Blog & Market Insights'"
    description="Real estate tips, market updates, and local guides for Northwest Arkansas. Stay informed with the Ruby Poole Team."
    canonical="/blog"
  />

  <main>
    <!-- Hero -->
    <section class="py-16 bg-gradient-to-br from-base-100 via-base-200/50 to-primary/5">
      <div class="container-custom">
        <div class="text-center max-w-2xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-display mb-4">
            {{ currentCategory || 'Blog & Insights' }}
          </h1>
          <p class="text-lg text-base-content/70">
            Real estate tips, market updates, and local guides for Northwest Arkansas.
          </p>
        </div>

        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-2 mt-8">
          <RouterLink
            to="/blog"
            class="btn btn-sm"
            :class="!currentCategory ? 'btn-primary' : 'btn-ghost'"
          >
            All Posts
          </RouterLink>
          <RouterLink
            v-for="cat in categories"
            :key="cat"
            :to="`/blog?category=${encodeURIComponent(cat)}`"
            class="btn btn-sm"
            :class="currentCategory === cat ? 'btn-primary' : 'btn-ghost'"
          >
            {{ cat }}
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Featured Post -->
    <section v-if="featuredPost" class="py-12">
      <div class="container-custom">
        <BlogCard :post="featuredPost" variant="featured" />
      </div>
    </section>

    <!-- Posts Grid + Sidebar -->
    <section class="py-12">
      <div class="container-custom">
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Posts -->
          <div class="lg:col-span-2">
            <div v-if="regularPosts.length > 0" class="grid sm:grid-cols-2 gap-6">
              <BlogCard
                v-for="post in regularPosts"
                :key="post.slug"
                :post="post"
              />
            </div>
            <div v-else class="text-center py-12">
              <p class="text-base-content/60">No posts found in this category.</p>
              <RouterLink to="/blog" class="btn btn-primary btn-sm mt-4">View All Posts</RouterLink>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
