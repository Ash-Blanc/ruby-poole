<script setup lang="ts">
import { FileText, Scale, CheckCircle, AlertTriangle, Building } from 'lucide-vue-next'
</script>

<template>
  <div class="pt-24 pb-16 bg-base-200/50 min-h-screen">
    <div class="container-custom max-w-4xl">
      <div class="card bg-base-100 shadow-xl p-8 lg:p-12">
        <header class="mb-10 text-center">
          <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Scale class="w-8 h-8 text-primary" />
          </div>
          <h1 class="text-4xl font-display mb-4">Terms of Service</h1>
          <p class="text-base-content/60">Last Updated: February 6, 2026</p>
        </header>

        <div class="prose prose-lg max-w-none text-base-content/80">
          <section class="mb-8">
            <h2 class="text-2xl font-display text-base-content mb-4 flex items-center gap-2">
              <CheckCircle class="w-6 h-6 text-primary" /> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services.
            </p>
          </section>

          <section class="mb-8 border-t border-base-200 pt-8">
            <h2 class="text-2xl font-display text-base-content mb-4 flex items-center gap-2">
              <AlertTriangle class="w-6 h-6 text-primary" /> 2. Accuracy of Listings
            </h2>
            <p>
              While we strive to provide accurate and up-to-date property information, all listings are subject to errors, omissions, change of price, or withdrawal without notice. Property details should be independently verified.
            </p>
          </section>

          <section class="mb-8 border-t border-base-200 pt-8">
            <h2 class="text-2xl font-display text-base-content mb-4 flex items-center gap-2">
              <Building class="w-6 h-6 text-primary" /> 3. Agency Relationship
            </h2>
            <p>
              Use of this website does not automatically create an agency relationship. An official representation agreement must be signed between you and the Ruby Poole Team to establish a client relationship.
            </p>
          </section>

          <section class="mb-8 border-t border-base-200 pt-8">
            <h2 class="text-2xl font-display text-base-content mb-4 flex items-center gap-2">
              <FileText class="w-6 h-6 text-primary" /> 4. Intellectual Property
            </h2>
            <p>
              All content, images, and brand assets on this website are the property of the Ruby Poole Team or its licensors and are protected by copyright laws. You may not reproduce or distribute this content without prior written consent.
            </p>
          </section>

          <footer class="mt-12 p-6 bg-base-200 rounded-xl">
            <p class="text-sm italic">
              Note: These terms are for demonstration purposes. Real estate law varies by state and region. Please consult with legal counsel to ensure your terms are legally binding and comprehensive.
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
