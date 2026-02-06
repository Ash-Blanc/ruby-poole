<script setup lang="ts">
import { ShieldCheck, Lock, Eye, FileText, Globe } from 'lucide-vue-next'
</script>

<template>
  <div class="pt-24 pb-16 bg-base-200/50 min-h-screen">
    <div class="container-custom max-w-4xl">
      <div class="card bg-base-100 shadow-xl p-8 lg:p-12">
        <header class="mb-10 text-center">
          <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShieldCheck class="w-8 h-8 text-primary" />
          </div>
          <h1 class="text-4xl font-display mb-4">Privacy Policy</h1>
          <p class="text-base-content/60">Last Updated: February 6, 2026</p>
        </header>

        <div class="prose prose-lg max-w-none text-base-content/80">
          <section class="mb-8">
            <h2 class="text-2xl font-display text-base-content mb-4 flex items-center gap-2">
              <Eye class="w-6 h-6 text-primary" /> Introduction
            </h2>
            <p>
              Ruby Poole Team ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website and use our real estate services in Northwest Arkansas.
            </p>
          </section>

          <section class="mb-8 border-t border-base-200 pt-8">
            <h2 class="text-2xl font-display text-base-content mb-4 flex items-center gap-2">
              <Lock class="w-6 h-6 text-primary" /> Information We Collect
            </h2>
            <p>We may collect information that you provide directly to us, including:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Real estate preferences and property interests</li>
              <li>Communication history with our team</li>
            </ul>
          </section>

          <section class="mb-8 border-t border-base-200 pt-8">
            <h2 class="text-2xl font-display text-base-content mb-4 flex items-center gap-2">
              <Globe class="w-6 h-6 text-primary" /> How We Use Your Information
            </h2>
            <p>The information we collect is used for various purposes, such as:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Providing and improving our real estate services</li>
              <li>Responding to your inquiries and requests</li>
              <li>Sending property listings and market updates</li>
              <li>Complying with legal and FAIR HOUSING requirements</li>
            </ul>
          </section>

          <section class="mb-8 border-t border-base-200 pt-8">
            <h2 class="text-2xl font-display text-base-content mb-4 flex items-center gap-2">
              <FileText class="w-6 h-6 text-primary" /> Third-Party Disclosure
            </h2>
            <p>
              We do not sell your personal information. We may share information with trusted partners (e.g., mortgage lenders, title companies) as necessary to facilitate your real estate transactions, or when required by law.
            </p>
          </section>

          <footer class="mt-12 p-6 bg-base-200 rounded-xl">
            <p class="text-sm italic">
              Note: This is a placeholder privacy policy for demonstration purposes. For a legal production site, please consult with a qualified legal professional to ensure compliance with all applicable laws and regulations.
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
