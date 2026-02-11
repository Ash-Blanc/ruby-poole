<script setup lang="ts">
import { Mail } from 'lucide-vue-next'
import { ref } from 'vue'
import { getCategories, getRecentPosts } from '@/components/data/blogPosts'
import BlogCard from './BlogCard.vue'

const categories = getCategories()
const recentPosts = getRecentPosts(4)

const email = ref('')
const isSubscribed = ref(false)

const handleSubscribe = () => {
    if (email.value) {
        isSubscribed.value = true
        email.value = ''
    }
}
</script>

<template>
    <aside class="blog-sidebar space-y-8">
        <!-- Newsletter Signup -->
        <div class="bg-primary text-primary-content rounded-2xl p-6">
            <h3 class="font-display text-xl mb-2">Stay Updated</h3>
            <p class="text-sm text-primary-content/80 mb-4">Get market updates and new listings in your inbox.</p>

            <div v-if="!isSubscribed">
                <form @submit.prevent="handleSubscribe" class="space-y-3">
                    <input v-model="email" type="email" placeholder="Your email" required
                        class="input input-bordered w-full bg-primary-content text-base-content" />
                    <button type="submit" class="btn btn-secondary w-full gap-2">
                        <Mail class="w-4 h-4" />
                        Subscribe
                    </button>
                </form>
            </div>
            <div v-else class="text-center">
                <p class="font-medium">✓ You're subscribed!</p>
            </div>
        </div>

        <!-- Categories -->
        <div>
            <h3 class="font-display text-lg mb-4">Categories</h3>
            <div class="flex flex-wrap gap-2">
                <RouterLink v-for="category in categories" :key="category"
                    :to="`/blog?category=${encodeURIComponent(category)}`"
                    class="badge badge-lg badge-ghost hover:badge-primary transition-colors">
                    {{ category }}
                </RouterLink>
            </div>
        </div>

        <!-- Recent Posts -->
        <div>
            <h3 class="font-display text-lg mb-4">Recent Posts</h3>
            <div class="space-y-4">
                <BlogCard v-for="post in recentPosts" :key="post.slug" :post="post" variant="compact" />
            </div>
        </div>

        <!-- CTA -->
        <div class="bg-base-200 rounded-2xl p-6 text-center">
            <h3 class="font-display text-lg mb-2">Ready to Find Your Home?</h3>
            <p class="text-sm text-base-content/60 mb-4">Let us help you navigate the NWA market.</p>
            <RouterLink to="/#contact" class="btn btn-primary btn-sm w-full">
                Contact Us
            </RouterLink>
        </div>
    </aside>
</template>
