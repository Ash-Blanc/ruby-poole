<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Calendar, User, ArrowLeft, Share2, Facebook, Linkedin } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import BlogSidebar from '@/components/blog/BlogSidebar.vue'
import LeadForm from '@/components/LeadForm.vue'
import { getPostBySlug, getRecentPosts } from '@/data/blogPosts'
import BlogCard from '@/components/blog/BlogCard.vue'

const route = useRoute()
const router = useRouter()

const slug = route.params.slug as string
const post = computed(() => getPostBySlug(slug))
const relatedPosts = computed(() => 
  getRecentPosts(3).filter(p => p.slug !== slug)
)

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

const shareUrl = computed(() => `https://rubypoole.com/blog/${slug}`)

// Redirect if post not found
if (!post.value) {
  router.push('/blog')
}
</script>

<template>
  <div v-if="post">
    <SeoHead
      :title="post.title"
      :description="post.excerpt"
      :canonical="`/blog/${post.slug}`"
    />

    <main>
      <!-- Hero Image -->
      <div class="relative h-64 md:h-96 overflow-hidden">
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-neutral/80 via-neutral/40 to-transparent"></div>
      </div>

      <!-- Article -->
      <article class="py-12">
        <div class="container-custom">
          <div class="grid lg:grid-cols-3 gap-12">
            <!-- Main Content -->
            <div class="lg:col-span-2">
              <!-- Back Link -->
              <RouterLink to="/blog" class="inline-flex items-center gap-2 text-sm text-base-content/60 hover:text-primary mb-6">
                <ArrowLeft class="w-4 h-4" />
                Back to Blog
              </RouterLink>

              <!-- Header -->
              <header class="mb-8">
                <div class="flex items-center gap-4 text-sm text-base-content/60 mb-4">
                  <RouterLink 
                    :to="`/blog?category=${encodeURIComponent(post.category)}`"
                    class="badge badge-primary"
                  >
                    {{ post.category }}
                  </RouterLink>
                  <span class="flex items-center gap-1">
                    <Calendar class="w-3 h-3" />
                    {{ formatDate(post.date) }}
                  </span>
                  <span class="flex items-center gap-1">
                    <User class="w-3 h-3" />
                    {{ post.author }}
                  </span>
                </div>

                <h1 class="text-3xl md:text-4xl lg:text-5xl font-display mb-4">
                  {{ post.title }}
                </h1>

                <p class="text-xl text-base-content/70">{{ post.excerpt }}</p>
              </header>

              <!-- Content -->
              <div class="prose prose-lg max-w-none mb-12" v-html="post.content.replace(/\n/g, '<br>').replace(/## /g, '<h2>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')">
              </div>

              <!-- Share -->
              <div class="flex items-center gap-4 py-6 border-t border-base-200">
                <span class="text-sm font-medium">Share this article:</span>
                <div class="flex gap-2">
                  <a
                    :href="`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-ghost btn-sm btn-square"
                    aria-label="Share on Facebook"
                  >
                    <Facebook class="w-4 h-4" />
                  </a>
                  <a
                    :href="`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent(post.title)}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-ghost btn-sm btn-square"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin class="w-4 h-4" />
                  </a>
                </div>
              </div>

              <!-- Author CTA -->
              <div class="bg-base-200/50 rounded-2xl p-6 md:p-8 mt-8">
                <div class="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p class="text-sm text-base-content/60 mb-1">Written by</p>
                    <h3 class="font-display text-xl mb-2">{{ post.author }}</h3>
                    <p class="text-base-content/70">Have questions about this topic? Let's talk!</p>
                  </div>
                  <div>
                    <LeadForm source="blog-post" submit-label="Get in Touch" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </article>

      <!-- Related Posts -->
      <section v-if="relatedPosts.length > 0" class="py-12 bg-base-200/50">
        <div class="container-custom">
          <h2 class="text-2xl font-display mb-8">Related Articles</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard
              v-for="related in relatedPosts"
              :key="related.slug"
              :post="related"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
