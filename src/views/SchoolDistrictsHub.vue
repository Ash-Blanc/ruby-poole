<script setup lang="ts">
import { GraduationCap, MapPin, Users, Star, ArrowRight } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'

const districts = [
  {
    name: 'Bentonville School District',
    city: 'Bentonville',
    rating: 'A+',
    students: '18,000+',
    highlights: ['Top-rated in Arkansas', 'STEM programs', 'New facilities'],
    href: '/school-districts/bentonville',
  },
  {
    name: 'Rogers School District',
    city: 'Rogers',
    rating: 'A',
    students: '16,000+',
    highlights: ['Strong athletics', 'Diverse programs', 'Growing investment'],
    href: '/school-districts/rogers',
  },
  {
    name: 'Springdale School District',
    city: 'Springdale',
    rating: 'B+',
    students: '22,000+',
    highlights: ['Largest in NWA', 'Bilingual programs', 'Career academies'],
    href: '/school-districts/springdale',
  },
  {
    name: 'Fayetteville School District',
    city: 'Fayetteville',
    rating: 'A',
    students: '11,000+',
    highlights: ['University access', 'Arts programs', 'Research partnerships'],
    href: '/school-districts/fayetteville',
  },
  {
    name: 'Gravette School District',
    city: 'Gravette',
    rating: 'B+',
    students: '2,500+',
    highlights: ['Small-town feel', 'Growing community', 'New construction nearby'],
    href: '#',
  },
  {
    name: 'Pea Ridge School District',
    city: 'Pea Ridge',
    rating: 'A-',
    students: '3,000+',
    highlights: ['Tight-knit community', 'Strong test scores', 'Nearby parks'],
    href: '#',
  },
]
</script>

<template>
  <SeoHead
    title="School Districts in Northwest Arkansas"
    description="Explore school districts across NWA. Compare ratings, programs, and find homes by school district in Bentonville, Rogers, Springdale, Fayetteville and more."
    canonical="/school-districts"
  />

  <main>
    <!-- Hero -->
    <section class="relative min-h-[50vh] flex items-center overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80" 
          alt="School in Northwest Arkansas"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-neutral/90 via-neutral/70 to-transparent"></div>
      </div>

      <div class="container-custom relative z-10 py-16">
        <div class="max-w-2xl">
          <div class="flex items-center gap-2 mb-4">
            <GraduationCap class="w-5 h-5 text-primary" />
            <span class="text-sm font-medium text-neutral-content">School District Guide</span>
          </div>
          
          <h1 class="text-4xl md:text-5xl font-display text-neutral-content mb-4">
            School Districts in
            <span class="block text-primary">Northwest Arkansas</span>
          </h1>
          
          <p class="text-lg text-neutral-content/80 mb-8 max-w-lg">
            Find the right school district for your family. Explore ratings, programs, and homes available in each district.
          </p>

          <a href="#districts" class="btn btn-primary gap-2">
            Explore Districts
            <ArrowRight class="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- Districts Grid -->
    <section id="districts" class="py-16">
      <div class="container-custom">
        <div class="section-header">
          <h2>NWA School Districts</h2>
          <p>Click any district to explore homes, boundaries, and community details.</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="district in districts" 
            :key="district.name" 
            class="card bg-base-100 border border-base-200 hover:border-primary/30 transition-colors"
          >
            <div class="card-body">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2 text-sm text-base-content/50">
                  <MapPin class="w-4 h-4" />
                  <span>{{ district.city }}</span>
                </div>
                <div class="badge badge-primary badge-outline font-semibold">{{ district.rating }}</div>
              </div>
              
              <h3 class="font-display text-lg mb-3">{{ district.name }}</h3>
              
              <div class="flex items-center gap-2 text-sm text-base-content/60 mb-4">
                <Users class="w-4 h-4" />
                <span>{{ district.students }} students</span>
              </div>
              
              <div class="space-y-1.5 mb-4">
                <div v-for="highlight in district.highlights" :key="highlight" class="flex items-center gap-2 text-sm">
                  <Star class="w-3 h-3 text-warning flex-shrink-0" />
                  <span class="text-base-content/70">{{ highlight }}</span>
                </div>
              </div>

              <div class="card-actions mt-auto">
                <RouterLink 
                  v-if="district.href !== '#'"
                  :to="district.href" 
                  class="btn btn-sm btn-outline btn-primary w-full gap-2"
                >
                  View Homes
                  <ArrowRight class="w-3 h-3" />
                </RouterLink>
                <span v-else class="btn btn-sm btn-ghost w-full text-base-content/40 cursor-default">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 bg-base-200/50">
      <div class="container-custom max-w-3xl">
        <h2 class="text-3xl font-display text-center mb-8">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <div class="collapse collapse-arrow bg-base-100">
            <input type="radio" name="faq" checked />
            <div class="collapse-title font-display text-lg">Which is the best school district in NWA?</div>
            <div class="collapse-content text-base-content/70">
              <p>Bentonville School District consistently ranks as the top-rated district in Northwest Arkansas and one of the best in the state, with strong test scores, modern facilities, and extensive programs.</p>
            </div>
          </div>
          <div class="collapse collapse-arrow bg-base-100">
            <input type="radio" name="faq" />
            <div class="collapse-title font-display text-lg">Can I search homes by school district?</div>
            <div class="collapse-content text-base-content/70">
              <p>Yes — each district page shows homes currently for sale within those boundaries. You can also contact us for a custom search based on a specific school.</p>
            </div>
          </div>
          <div class="collapse collapse-arrow bg-base-100">
            <input type="radio" name="faq" />
            <div class="collapse-title font-display text-lg">Do school districts affect home values?</div>
            <div class="collapse-content text-base-content/70">
              <p>Absolutely. Homes in top-rated school districts — especially Bentonville and Rogers — tend to hold value better and appreciate faster due to consistent family buyer demand.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary text-primary-content">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-display mb-4">Find Homes in Your Dream School District</h2>
            <p class="text-primary-content/80">Tell us which school matters most — we'll find the perfect home nearby.</p>
          </div>
          <div class="bg-base-100 text-base-content rounded-2xl p-8 shadow-2xl">
            <LeadForm source="school-districts" submit-label="Search by District" />
          </div>
        </div>
      </div>
    </section>

    <!-- Last updated -->
    <div class="container-custom py-4 text-center">
      <time class="text-xs text-base-content/40" datetime="2025-02-10">Last updated: February 2025</time>
    </div>
  </main>
</template>
