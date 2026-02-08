<script setup lang="ts">
import { onMounted } from 'vue'
import { CheckCircle2, Home, Phone, ArrowRight } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'

// Fire conversion tracking on mount
onMounted(() => {
  // Google Ads Conversion Tracking
  // TODO: Replace with actual conversion ID and label
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-XXXXXXXXXX/XXXXXXXXXXXX',
      'value': 1.0,
      'currency': 'USD',
    })
  }

  // Meta Pixel Tracking
  // TODO: Replace with actual pixel event
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead')
  }

  console.log('Conversion event fired')
})
</script>

<template>
  <SeoHead
    title="Thank You"
    description="Thank you for contacting the Ruby Poole Team. We'll be in touch soon!"
    :no-index="true"
  />

  <main class="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-base-100 via-base-200/50 to-primary/5">
    <div class="container-custom py-16">
      <div class="max-w-lg mx-auto text-center">
        <!-- Success Icon -->
        <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
          <CheckCircle2 class="w-10 h-10 text-success" />
        </div>

        <!-- Message -->
        <h1 class="text-3xl md:text-4xl font-display mb-4">Thank You!</h1>
        <p class="text-lg text-base-content/70 mb-8">
          We've received your information and a member of the Ruby Poole Team will be in touch within 24 hours.
        </p>

        <!-- What's Next -->
        <div class="bg-base-100 rounded-2xl p-6 mb-8 text-left shadow-lg">
          <h3 class="font-display text-lg mb-4">What Happens Next?</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-xs font-bold text-primary">1</span>
              </span>
              <span class="text-base-content/80">A local expert will review your information</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-xs font-bold text-primary">2</span>
              </span>
              <span class="text-base-content/80">We'll reach out to discuss your home search goals</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-xs font-bold text-primary">3</span>
              </span>
              <span class="text-base-content/80">Get personalized listings matching your criteria</span>
            </li>
          </ul>
        </div>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <RouterLink to="/" class="btn btn-primary gap-2">
            <Home class="w-4 h-4" />
            Back to Home
          </RouterLink>
          <a href="tel:+14795550123" class="btn btn-outline gap-2">
            <Phone class="w-4 h-4" />
            Call Us Now
          </a>
        </div>

        <!-- Browse Listings -->
        <div class="mt-12 pt-8 border-t border-base-200">
          <p class="text-sm text-base-content/60 mb-4">While you wait, explore our listings</p>
          <RouterLink to="/search" class="btn btn-ghost gap-2">
            Browse Homes
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>
