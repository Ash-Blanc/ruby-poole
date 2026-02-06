<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import HomeView from '@/views/HomeView.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-base-100">
    <Navbar />
    <HomeView />
    <Footer />
  </div>
</template>

<style scoped>
/* App-level styles if needed */
</style>
