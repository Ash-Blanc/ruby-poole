<script setup lang="ts">
import { MapPin, Briefcase, GraduationCap, Heart, Sun, DollarSign, Check, ArrowRight, PlaneTakeoff } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'

const benefits = [
  { icon: DollarSign, title: 'Low Cost of Living', description: 'Enjoy a high quality of life at a fraction of coastal city costs.' },
  { icon: Briefcase, title: 'Booming Economy', description: 'Home to Walmart, Tyson, and J.B. Hunt plus thriving startups.' },
  { icon: GraduationCap, title: 'Top Schools', description: 'Excellent public and private schools across all communities.' },
  { icon: Sun, title: 'Outdoor Paradise', description: '300+ miles of trails, lakes, and natural beauty.' },
  { icon: Heart, title: 'Strong Community', description: 'Welcoming neighbors and a true sense of belonging.' },
  { icon: MapPin, title: 'Central Location', description: 'Easy drive to Tulsa, Kansas City, and beyond.' },
]

const cities = [
  { name: 'Bentonville', tagline: 'Business hub with world-class culture', link: '/areas/bentonville' },
  { name: 'Rogers', tagline: 'Family-friendly with lake access', link: '/areas/rogers' },
  { name: 'Bella Vista', tagline: 'Lakefront retirement paradise', link: '/areas/bella-vista' },
  { name: 'Fayetteville', tagline: 'College town energy and arts', link: '/areas/fayetteville' },
  { name: 'Springdale', tagline: 'Most affordable option', link: '/areas/springdale' },
]

const faqs = [
  { q: 'What is the cost of living in NWA?', a: 'Northwest Arkansas has a cost of living about 10% below the national average, with affordable housing, low taxes, and reasonable utility costs.' },
  { q: 'How is the job market?', a: "NWA is one of the fastest-growing job markets in the US, anchored by Fortune 500 companies and a thriving startup ecosystem." },
  { q: 'What are the schools like?', a: 'The region boasts excellent public schools, with districts like Bentonville consistently ranking among the best in Arkansas.' },
  { q: 'Is there public transportation?', a: 'Ozark Regional Transit provides bus service, and the Razorback Greenway connects communities by bike. Most residents drive.' },
]
</script>

<template>
  <SeoHead
    title="Moving to Northwest Arkansas"
    description="Your complete guide to relocating to NWA. Discover why families and professionals are choosing Bentonville, Rogers, and Fayetteville as their new home."
    canonical="/moving-to-nwa"
  />

  <main>
    <!-- Hero -->
    <section class="relative min-h-[70vh] flex items-center overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80" 
          alt="Northwest Arkansas scenery"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-neutral/95 via-neutral/80 to-neutral/40"></div>
      </div>

      <div class="container-custom relative z-10 py-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-neutral-content">
            <div class="flex items-center gap-2 mb-4">
              <PlaneTakeoff class="w-5 h-5 text-primary" />
              <span class="text-sm font-medium">Relocation Guide</span>
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              Moving to
              <span class="block text-primary">Northwest Arkansas</span>
            </h1>
            
            <p class="text-xl text-neutral-content/80 mb-8 max-w-lg">
              Discover why NWA is one of America's fastest-growing regions and how the Ruby Poole Team can help you find your perfect home.
            </p>

            <div class="flex flex-wrap gap-3">
              <a href="#cities" class="btn btn-primary gap-2">
                Explore Cities
                <ArrowRight class="w-4 h-4" />
              </a>
              <a href="#contact" class="btn btn-outline btn-neutral">
                Talk to a Local Expert
              </a>
            </div>
          </div>

          <div class="hidden lg:block">
            <div class="bg-base-100 rounded-2xl p-8 shadow-2xl max-w-md ml-auto">
              <h3 class="text-xl font-display mb-2">Free Relocation Guide</h3>
              <p class="text-sm text-base-content/60 mb-6">Get personalized recommendations for your move</p>
              <LeadForm 
                source="moving-to-nwa"
                submit-label="Get My Guide"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why NWA -->
    <section class="py-20">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-display mb-4">Why Northwest Arkansas?</h2>
          <p class="text-base-content/60 max-w-2xl mx-auto">
            From Fortune 500 opportunities to Ozark mountain trails, NWA offers the best of both worlds.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="benefit in benefits" 
            :key="benefit.title"
            class="p-6 bg-base-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
          >
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <component :is="benefit.icon" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="font-display text-xl mb-2">{{ benefit.title }}</h3>
            <p class="text-base-content/60">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cities -->
    <section id="cities" class="py-20 bg-base-200/50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-display mb-4">Explore NWA Communities</h2>
          <p class="text-base-content/60 max-w-2xl mx-auto">
            Each city has its own personality. Find the one that fits your lifestyle.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <RouterLink 
            v-for="city in cities" 
            :key="city.name"
            :to="city.link"
            class="p-6 bg-base-100 rounded-xl hover:shadow-lg transition-all group"
          >
            <h3 class="font-display text-lg mb-1 group-hover:text-primary transition-colors">{{ city.name }}</h3>
            <p class="text-sm text-base-content/60">{{ city.tagline }}</p>
            <div class="mt-4 text-primary text-sm font-medium flex items-center gap-1">
              Learn more
              <ArrowRight class="w-3 h-3" />
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- FAQs -->
    <section class="py-20">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-display text-center mb-12">Frequently Asked Questions</h2>
          
          <div class="space-y-4">
            <div 
              v-for="(faq, idx) in faqs" 
              :key="idx"
              class="collapse collapse-arrow bg-base-100 rounded-xl"
            >
              <input type="radio" name="faq-accordion" :checked="idx === 0" />
              <div class="collapse-title font-medium">{{ faq.q }}</div>
              <div class="collapse-content text-base-content/70">
                <p>{{ faq.a }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="py-20 bg-primary text-primary-content">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-display mb-4">
              Ready to Make the Move?
            </h2>
            <p class="text-primary-content/80 mb-6">
              We specialize in helping families and professionals relocate to Northwest Arkansas. Get personalized guidance from a local expert.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-3">
                <Check class="w-5 h-5" />
                Virtual home tours
              </li>
              <li class="flex items-center gap-3">
                <Check class="w-5 h-5" />
                Area orientation calls
              </li>
              <li class="flex items-center gap-3">
                <Check class="w-5 h-5" />
                School and neighborhood insights
              </li>
            </ul>
          </div>

          <div class="bg-base-100 text-base-content rounded-2xl p-8 shadow-2xl">
            <h3 class="text-xl font-display mb-2">Start Your Relocation</h3>
            <p class="text-sm text-base-content/60 mb-6">Tell us about your move and we'll help you find the perfect fit</p>
            <LeadForm 
              source="moving-cta"
              submit-label="Connect with an Expert"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
