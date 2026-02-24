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
          <section class="mb-8 border-t border-base-200 pt-8">
            <h2 class="text-2xl font-display text-base-content mb-4 flex items-center gap-2">
              <Eye class="w-6 h-6 text-primary" /> Information We Collect
            </h2>
            <p>First Colony collects personal and nonpublic information from you during the mortgage application process, whether completed in person, by telephone, or electronically. Providing this information is voluntary; however, it is required in order for us to provide mortgage products and services.</p>
            <p>The information we collect may include, but is not limited to, your name, address, contact information, Social Security number, date of birth, income and employment information, asset information, tax information, credit history, debt obligations, and information related to the purpose of your loan. We may also obtain information from third parties such as credit reporting agencies, employers, banks, and other service providers in connection with processing your loan application.</p>
          </section>

          <section class="mb-8 border-t border-base-200 pt-8">
            <h2 class="text-2xl font-display text-base-content mb-4 flex items-center gap-2">
              <Globe class="w-6 h-6 text-primary" /> How We Use Your Information
            </h2>
            <p>We use the information we collect to evaluate your loan application, discuss available loan options, determine your eligibility for mortgage products, process your loan to completion, service your loan as applicable, comply with legal and regulatory requirements, manage risk, and improve our products and services.</p>
          </section>

          <section class="mb-8 border-t border-base-200 pt-8">
            <h2 class="text-2xl font-display text-base-content mb-4 flex items-center gap-2">
              <FileText class="w-6 h-6 text-primary" /> Information Sharing With Affiliates & Third Parties
            </h2>
            <p>First Colony may share certain personal and nonpublic information with companies that are affiliated with us through common ownership or control. This includes our affiliated insurance company, First Insurance LLC, which may contact you to offer homeowners insurance or related insurance products in connection with your mortgage loan.</p>
            <p>First Colony does not sell personal information, including as that term is defined under applicable state privacy laws. We may share limited information with non affiliated third parties only as necessary to process, service, or complete your loan, as authorized by you, or as otherwise permitted or required by law.</p>
          </section>

          <section class="mb-8 border-t border-base-200 pt-8">
            <h2 class="text-2xl font-display text-base-content mb-4 flex items-center gap-2">
              <Lock class="w-6 h-6 text-primary" /> Information Security
            </h2>
            <p>We restrict access to personal and nonpublic information to employees and authorized parties who need the information to provide products or services to you. We maintain physical, electronic, and procedural safeguards that comply with applicable federal and state regulations to protect your information.</p>
          </section>

          <h3 class="text-xl font-display mt-8 mb-4">Your Privacy Choices</h3>
          <p>
            If you wish to update your information, limit communications, or exercise any applicable opt out rights, you may contact us at any time by emailing <strong>compliance@firstcolonymortgage.com</strong> or calling <strong>866-200-1110</strong> and asking to speak with our compliance department.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
