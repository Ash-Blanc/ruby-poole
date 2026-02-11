<script setup lang="ts">
import { Phone, Mail, MapPin, Facebook, Linkedin, X } from 'lucide-vue-next'
import Logo from '@/components/Logo.vue'

const currentYear = new Date().getFullYear()

const areaLinks = [
    { name: 'Downtown Bentonville', href: '/bentonville/downtown-bentonville' },
    { name: 'Bentonville', href: '/bentonville' },
    { name: 'Rogers', href: '/rogers' },
    { name: 'Bella Vista', href: '/bella-vista' },
    { name: 'Centerton', href: '/centerton' },
    { name: 'Fayetteville', href: '/fayetteville' },
    { name: 'Springdale', href: '/springdale' },
]

const homeLinks = [
    { name: 'Lake & Waterfront', href: '/homes/lake-homes' },
    { name: 'New Construction', href: '/homes/new-construction' },
    { name: 'Homes Near Bike Trails', href: '/homes/bike-trails' },
    { name: 'Condos & Townhomes', href: '/homes/condos-townhomes' },
    { name: 'Homes with Land', href: '/homes/land' },
    { name: 'Luxury Homes', href: '/homes/luxury' },
]

const quickLinks = [
    { name: 'Search Homes', href: '/search' },
    { name: 'School Districts', href: '/school-districts' },
    { name: 'Blog', href: '/blog' },
    { name: 'Videos', href: '/videos' },
    { name: 'Meet the Team', href: '/team' },
    { name: 'Moving to NWA', href: '/moving-to-nwa' },
    { name: 'Contact Us', href: '/#contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
]

const socials = [
    { icon: null, svgPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z', href: 'https://www.instagram.com/rubypoole_nwa/', label: 'Instagram' },
    { icon: null, svgPath: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z', href: 'https://www.tiktok.com/@rubypoole_nwa', label: 'TikTok' },
    { icon: Facebook, svgPath: null, href: 'https://www.facebook.com/ruby.n.poole', label: 'Facebook' },
    { icon: null, svgPath: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', href: 'https://twitter.com/RubyNWA', label: 'X (Twitter)' },
    { icon: Linkedin, svgPath: null, href: 'https://www.linkedin.com/in/ruby-poole-90296699', label: 'LinkedIn' },
]
</script>

<template>
    <footer class="bg-neutral text-neutral-content">
        <!-- Main Footer -->
        <div class="container-custom py-16">
            <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
                <!-- Brand Column -->
                <div class="sm:col-span-2 lg:col-span-2">
                    <RouterLink to="/" class="inline-flex items-center gap-3 mb-4">
                        <Logo :size="40" variant="full" />
                    </RouterLink>
                    <p class="text-neutral-content/70 mb-3 max-w-sm text-sm">
                        Your neighborhood-first guide to living in Northwest Arkansas. Explore communities,
                        homes, school districts, and local insight.
                    </p>
                    <p class="text-neutral-content/50 mb-6 max-w-sm text-xs">
                        Real estate services provided by The Ruby Poole Team at Collier &amp; Associates.
                    </p>

                    <!-- Contact Info -->
                    <div class="space-y-3">
                        <a href="tel:+14795550123" class="flex items-center gap-3 hover:text-primary transition-colors">
                            <Phone class="w-4 h-4" />
                            <span>(479) 555-0123</span>
                        </a>
                        <a href="mailto:hello@nwaneighborhoods.com"
                            class="flex items-center gap-3 hover:text-primary transition-colors">
                            <Mail class="w-4 h-4" />
                            <span>hello@nwaneighborhoods.com</span>
                        </a>
                        <div class="flex items-start gap-3">
                            <MapPin class="w-4 h-4 mt-1 flex-shrink-0" />
                            <span>123 Main Street<br>Rogers, AR 72756</span>
                        </div>
                    </div>
                </div>

                <!-- Areas Column -->
                <div>
                    <h4 class="font-display text-lg mb-4">Areas</h4>
                    <ul class="space-y-2">
                        <li v-for="link in areaLinks" :key="link.name">
                            <RouterLink :to="link.href"
                                class="text-neutral-content/70 hover:text-primary transition-colors text-sm">
                                {{ link.name }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <!-- Homes Column -->
                <div>
                    <h4 class="font-display text-lg mb-4">Lifestyles</h4>
                    <ul class="space-y-2">
                        <li v-for="link in homeLinks" :key="link.name">
                            <RouterLink :to="link.href"
                                class="text-neutral-content/70 hover:text-primary transition-colors text-sm">
                                {{ link.name }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <!-- Quick Links Column -->
                <div>
                    <h4 class="font-display text-lg mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li v-for="link in quickLinks" :key="link.name">
                            <RouterLink :to="link.href"
                                class="text-neutral-content/70 hover:text-primary transition-colors text-sm">
                                {{ link.name }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-neutral-content/10">
            <div class="container-custom py-6">
                <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p class="text-sm text-neutral-content/60 text-center sm:text-left">
                        &copy; {{ currentYear }} NWA Neighborhoods by The Ruby Poole Team. All rights reserved.
                    </p>

                    <!-- Social Links -->
                    <div class="flex gap-3">
                        <a v-for="social in socials" :key="social.label" :href="social.href" target="_blank"
                            rel="noopener noreferrer" :aria-label="social.label"
                            class="w-10 h-10 rounded-lg bg-neutral-content/10 hover:bg-primary hover:text-primary-content flex items-center justify-center transition-colors">
                            <component v-if="social.icon" :is="social.icon" class="w-5 h-5" />
                            <svg v-else-if="social.svgPath" viewBox="0 0 24 24" class="w-5 h-5 fill-current">
                                <path :d="social.svgPath" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
