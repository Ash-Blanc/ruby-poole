<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import StickyCtaMobile from '@/components/StickyCtaMobile.vue'
import StructuredData from '@/components/StructuredData.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-base-100">
    <!-- Structured Data for SEO -->
    <StructuredData type="RealEstateAgent" />
    
    <Navbar />
    <RouterView />
    <Footer />
    
    <!-- Mobile sticky CTA -->
    <StickyCtaMobile />
  </div>
</template>

<style scoped>
/* App-level styles if needed */
</style>
