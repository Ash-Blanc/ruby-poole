<script setup lang="ts">
import { ref } from 'vue'
import { Home, Users, Building2, Phone, Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Team', href: '#team', icon: Users },
  { name: 'Listings', href: '#listings', icon: Building2 },
  { name: 'Contact', href: '#contact', icon: Phone },
]
</script>

<template>
  <nav class="sticky top-0 z-50 glass-card">
    <div class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="#home" class="flex items-center gap-3 group">
          <div class="w-11 h-11 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
            <span class="text-primary-content font-display text-xl font-semibold">RP</span>
          </div>
          <div class="hidden sm:block">
            <span class="font-display text-xl block leading-tight">Ruby Poole</span>
            <span class="text-xs text-base-content/60 tracking-wide">Real Estate Team</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-10">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="flex items-center gap-2 text-base-content/70 hover:text-primary font-medium transition-colors py-2"
          >
            <component :is="link.icon" class="w-4 h-4" :stroke-width="2" />
            {{ link.name }}
          </a>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-3">
          <a href="#contact" class="btn btn-primary btn-sm hidden md:inline-flex gap-2 px-5">
            <Phone class="w-4 h-4" />
            Get in Touch
          </a>

          <!-- Mobile menu button -->
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="btn btn-ghost btn-circle lg:hidden"
            aria-label="Toggle menu"
          >
            <X v-if="isMenuOpen" class="w-6 h-6" />
            <Menu v-else class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="lg:hidden py-6 border-t border-base-300">
          <div class="flex flex-col gap-2">
            <a
              v-for="link in navLinks"
              :key="link.name"
              :href="link.href"
              @click="isMenuOpen = false"
              class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-base-200 transition-colors"
            >
              <component :is="link.icon" class="w-5 h-5 text-primary" :stroke-width="2" />
              <span class="font-medium">{{ link.name }}</span>
            </a>
            <div class="pt-4 px-4">
              <a href="#contact" class="btn btn-primary w-full gap-2">
                <Phone class="w-4 h-4" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>
