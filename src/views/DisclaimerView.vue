<script setup lang="ts">
import { ShieldCheck, FileText } from 'lucide-vue-next'
</script>

<template>
    <div class="pt-24 pb-16 bg-base-200/50 min-h-screen">
        <div class="container-custom max-w-4xl">
            <div class="card bg-base-100 shadow-xl p-8 lg:p-12">
                <header class="mb-10 text-center">
                    <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <ShieldCheck class="w-8 h-8 text-primary" />
                    </div>
                    <h1 class="text-4xl font-display mb-4">Disclaimer & Licensing</h1>
                </header>

                <div class="prose prose-lg max-w-none text-base-content/80">
                    <section class="mb-8">
                        <h2 class="text-2xl font-display text-base-content mb-4 flex items-center gap-2">
                            <FileText class="w-6 h-6 text-primary" /> Standard Disclaimer
                        </h2>
                        <p>
                            First Colony Mortgage Corporation is an Equal Housing Opportunity Lender NMLS #3112, AR
                            NMLS# 118723. All loans are subject to credit approval. Terms and conditions per loan type
                            may vary. See loan officer for details.
                        </p>
                    </section>

                    <section class="mb-8 border-t border-base-200 pt-8">
                        <h2 class="text-2xl font-display text-base-content mb-4 flex items-center gap-2">
                            <FileText class="w-6 h-6 text-primary" /> State Licenses
                        </h2>
                        <p>
                            For complete information regarding our state licenses and regulatory compliance, please
                            visit the First Colony Mortgage state licenses page:
                        </p>
                        <p>
                            <a href="https://firstcolonymortgage.com/state-licenses/" target="_blank"
                                rel="noopener noreferrer" class="link link-primary">
                                View First Colony Mortgage State Licenses
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
