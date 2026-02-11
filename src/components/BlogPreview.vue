<script setup lang="ts">
import { ArrowRight, Calendar } from 'lucide-vue-next'
import { getRecentPosts } from '@/components/data/blogPosts'

const recentPosts = getRecentPosts(3)

const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
    })
}
</script>

<template>
    <section class="py-20">
        <div class="container-custom">
            <div class="section-header">
                <h2>Tips & Insights</h2>
                <p>Real estate knowledge to help you make informed decisions</p>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                <RouterLink v-for="post in recentPosts" :key="post.slug" :to="`/blog/${post.slug}`"
                    class="card bg-base-100 overflow-hidden group hover:shadow-lg transition-shadow">
                    <figure class="aspect-video overflow-hidden">
                        <img :src="post.image" :alt="post.title"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </figure>
                    <div class="card-body p-5">
                        <div class="flex items-center gap-2 text-xs text-base-content/60 mb-2">
                            <span class="badge badge-ghost badge-sm">{{ post.category }}</span>
                            <span class="flex items-center gap-1">
                                <Calendar class="w-3 h-3" />
                                {{ formatDate(post.date) }}
                            </span>
                        </div>
                        <h3 class="font-display text-lg line-clamp-2 group-hover:text-primary transition-colors">
                            {{ post.title }}
                        </h3>
                    </div>
                </RouterLink>
            </div>

            <div class="text-center mt-10">
                <RouterLink to="/blog" class="btn btn-primary gap-2">
                    View All Articles
                    <ArrowRight class="w-4 h-4" />
                </RouterLink>
            </div>
        </div>
    </section>
</template>
