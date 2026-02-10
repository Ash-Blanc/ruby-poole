<script setup lang="ts">
import { ref } from 'vue'
import { Home, Users, MapPin, Phone, Menu, X, ChevronDown, Waves, Hammer, Search, BookOpen, Video, Building, Bike, GraduationCap, PlaneTakeoff } from 'lucide-vue-next'
import Logo from '@/components/Logo.vue'

const isMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)

interface DropdownItem {
  name: string
  href: string
  icon?: any
}

interface NavLink {
  name: string
  href?: string
  icon: any
  dropdown?: DropdownItem[]
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/', icon: Home },
  { 
    name: 'Neighborhoods', 
    icon: MapPin,
    dropdown: [
      { name: 'Bentonville', href: '/bentonville', icon: MapPin },
      { name: 'Downtown Bentonville', href: '/bentonville/downtown-bentonville', icon: MapPin },
      { name: 'Bella Vista', href: '/bella-vista', icon: MapPin },
      { name: 'Rogers', href: '/rogers', icon: MapPin },
      { name: 'Springdale', href: '/springdale', icon: MapPin },
      { name: 'Fayetteville', href: '/fayetteville', icon: MapPin },
      { name: 'Centerton', href: '/centerton', icon: MapPin },
    ]
  },
  { 
    name: 'Lifestyles', 
    icon: Building,
    dropdown: [
      { name: 'Lake & Waterfront', href: '/homes/lake-homes', icon: Waves },
      { name: 'New Construction', href: '/homes/new-construction', icon: Hammer },
      { name: 'Homes Near Bike Trails', href: '/homes/bike-trails', icon: Bike },
      { name: 'Condos & Townhomes', href: '/homes/condos-townhomes', icon: Building },
    ]
  },
  { 
    name: 'Resources', 
    icon: BookOpen,
    dropdown: [
      { name: 'School Districts', href: '/school-districts', icon: GraduationCap },
      { name: 'Blog', href: '/blog', icon: BookOpen },
      { name: 'Videos', href: '/videos', icon: Video },
      { name: 'Moving to NWA', href: '/moving-to-nwa', icon: PlaneTakeoff },
    ]
  },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Search', href: '/search', icon: Search },
]


const toggleDropdown = (name: string) => {
  activeDropdown.value = activeDropdown.value === name ? null : name
}

const closeDropdowns = () => {
  activeDropdown.value = null
}
</script>

<template>
  <nav class="sticky top-0 z-50 glass-card">
    <div class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3 group" @click="closeDropdowns">
          <Logo :size="40" variant="full" />
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <template v-for="link in navLinks" :key="link.name">
            <!-- Dropdown Link -->
            <div v-if="link.dropdown" class="relative">
              <button
                @click="toggleDropdown(link.name)"
                class="flex items-center gap-1.5 text-base-content/70 hover:text-primary font-medium transition-colors py-2"
                :class="{ 'text-primary': activeDropdown === link.name }"
              >
                <component :is="link.icon" class="w-4 h-4" :stroke-width="2" />
                {{ link.name }}
                <ChevronDown 
                  class="w-4 h-4 transition-transform" 
                  :class="{ 'rotate-180': activeDropdown === link.name }"
                />
              </button>
              
              <!-- Dropdown Menu -->
              <Transition
                enter-active-class="transition duration-150 ease-out"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2"
              >
                <div 
                  v-if="activeDropdown === link.name"
                  class="absolute top-full left-0 mt-2 w-56 bg-base-100 rounded-xl shadow-xl border border-base-200 py-2 z-50"
                >
                  <RouterLink
                    v-for="item in link.dropdown"
                    :key="item.name"
                    :to="item.href"
                    @click="closeDropdowns"
                    class="flex items-center gap-3 px-4 py-2.5 hover:bg-base-200 transition-colors"
                  >
                    <component v-if="item.icon" :is="item.icon" class="w-4 h-4 text-primary" />
                    <MapPin v-else class="w-4 h-4 text-primary" />
                    <span class="font-medium">{{ item.name }}</span>
                  </RouterLink>
                </div>
              </Transition>
            </div>

            <!-- Regular Link -->
            <RouterLink
              v-else
              :to="link.href ?? '/'"
              class="flex items-center gap-2 text-base-content/70 hover:text-primary font-medium transition-colors py-2"
              @click="closeDropdowns"
            >
              <component :is="link.icon" class="w-4 h-4" :stroke-width="2" />
              {{ link.name }}
            </RouterLink>
          </template>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-3">
          <RouterLink to="/#contact" class="btn btn-primary btn-sm hidden md:inline-flex gap-2 px-5">
            <Phone class="w-4 h-4" />
            Get in Touch
          </RouterLink>

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
          <div class="flex flex-col gap-1">
            <template v-for="link in navLinks" :key="link.name">
              <!-- Mobile Dropdown -->
              <div v-if="link.dropdown">
                <button
                  @click="toggleDropdown(link.name)"
                  class="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-base-200 transition-colors"
                >
                  <div class="flex items-center gap-3">
                    <component :is="link.icon" class="w-5 h-5 text-primary" :stroke-width="2" />
                    <span class="font-medium">{{ link.name }}</span>
                  </div>
                  <ChevronDown 
                    class="w-4 h-4 transition-transform" 
                    :class="{ 'rotate-180': activeDropdown === link.name }"
                  />
                </button>
                
                <Transition
                  enter-active-class="transition duration-150 ease-out"
                  enter-from-class="opacity-0 h-0"
                  enter-to-class="opacity-100"
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0 h-0"
                >
                  <div v-if="activeDropdown === link.name" class="pl-12 py-2 space-y-1">
                    <RouterLink
                      v-for="item in link.dropdown"
                      :key="item.name"
                      :to="item.href"
                      @click="isMenuOpen = false; closeDropdowns()"
                      class="block px-4 py-2 rounded-lg hover:bg-base-200 transition-colors text-sm"
                    >
                      {{ item.name }}
                    </RouterLink>
                  </div>
                </Transition>
              </div>

              <!-- Mobile Regular Link -->
              <RouterLink
                v-else
                :to="link.href ?? '/'"
                @click="isMenuOpen = false"
                class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-base-200 transition-colors"
              >
                <component :is="link.icon" class="w-5 h-5 text-primary" :stroke-width="2" />
                <span class="font-medium">{{ link.name }}</span>
              </RouterLink>
            </template>

            <div class="pt-4 px-4">
              <RouterLink to="/#contact" class="btn btn-primary w-full gap-2" @click="isMenuOpen = false">
                <Phone class="w-4 h-4" />
                Contact Us
              </RouterLink>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>

  <!-- Click outside to close dropdowns -->
  <div 
    v-if="activeDropdown" 
    class="fixed inset-0 z-40" 
    @click="closeDropdowns"
  ></div>
</template>
