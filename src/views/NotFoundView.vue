<script setup lang="ts">
import { Home, Search, ArrowLeft } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
</script>

<template>
  <SeoHead
    title="Page Not Found"
    description="The page you're looking for doesn't exist."
    :no-index="true"
  />

  <main class="min-h-[80vh] flex items-center justify-center bg-base-200/30">
    <div class="container-custom py-16">
      <div class="max-w-md mx-auto text-center">
        <!-- 404 Illustration -->
        <div class="text-8xl font-display text-primary/20 mb-4">404</div>
        
        <h1 class="text-2xl md:text-3xl font-display mb-4">Page Not Found</h1>
        <p class="text-base-content/60 mb-8">
          Sorry, we couldn't find the page you're looking for. It may have been moved or no longer exists.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <RouterLink to="/" class="btn btn-primary gap-2">
            <Home class="w-4 h-4" />
            Go Home
          </RouterLink>
          <RouterLink to="/search" class="btn btn-outline gap-2">
            <Search class="w-4 h-4" />
            Search Homes
          </RouterLink>
        </div>

        <!-- Back link -->
        <div class="mt-8">
          <button @click="$router.back()" class="btn btn-ghost btn-sm gap-2">
            <ArrowLeft class="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
