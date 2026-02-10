<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Check, X, ArrowRight, Home, Users, TrendingUp, GraduationCap, MapPin, DollarSign } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'
import FaqSection from '@/components/FaqSection.vue'

const route = useRoute()
const comparison = route.params.comparison as string

interface CityData {
  name: string
  slug: string
  population: string
  medianPrice: string
  appreciation: string
  schoolDistrict: string
  schoolRating: string
  topEmployer: string
  vibe: string
  bestFor: string[]
  pros: string[]
  cons: string[]
}

interface ComparisonData {
  cityA: CityData
  cityB: CityData
  verdict: string
  faqs: { question: string; answer: string }[]
}

const comparisons: Record<string, ComparisonData> = {
  'bentonville-vs-rogers': {
    cityA: {
      name: 'Bentonville',
      slug: 'bentonville',
      population: '58,000',
      medianPrice: '$425,000',
      appreciation: '+8%',
      schoolDistrict: 'Bentonville',
      schoolRating: '⭐⭐⭐⭐⭐',
      topEmployer: 'Walmart HQ',
      vibe: 'Innovation hub with world-class culture',
      bestFor: ['Corporate professionals', 'Families with school-age kids', 'Trail enthusiasts', 'Foodies & culture lovers'],
      pros: ['Crystal Bridges Museum', 'Top-rated schools', 'Extensive trail system', 'Vibrant downtown square'],
      cons: ['Higher home prices', 'Growing traffic', 'Competitive market'],
    },
    cityB: {
      name: 'Rogers',
      slug: 'rogers',
      population: '72,000',
      medianPrice: '$350,000',
      appreciation: '+9%',
      schoolDistrict: 'Rogers',
      schoolRating: '⭐⭐⭐⭐',
      topEmployer: 'Walmart Vendors',
      vibe: 'Family-friendly with lake access',
      bestFor: ['Families wanting lake access', 'Value-conscious buyers', 'History & nature lovers', 'First-time homebuyers'],
      pros: ['Beaver Lake access', 'More affordable than Bentonville', 'Central NWA location', 'Strong appreciation'],
      cons: ['Fewer walkable areas', 'Some older infrastructure', 'Less nightlife'],
    },
    verdict: 'Choose Bentonville for walkability, top schools, and cultural attractions. Choose Rogers for lake access, more affordable homes, and strong appreciation potential.',
    faqs: [
      { question: 'Which city has better schools?', answer: 'Both districts are excellent. Bentonville School District is slightly more highly ranked statewide, but Rogers Public Schools offers strong academics and competitive athletics. Both have graduation rates above 90%.' },
      { question: 'Which city is more affordable?', answer: 'Rogers is generally $50K-$75K less expensive per home compared to Bentonville. Rogers also offers more starter home options and older neighborhoods at lower price points.' },
      { question: 'Which city is growing faster?', answer: 'Both are growing rapidly, but Rogers has slightly higher appreciation rates (+9% vs +8%) and more land available for new development.' },
      { question: 'Can I work in Bentonville and live in Rogers?', answer: 'Absolutely! Rogers is just 10-15 minutes from Bentonville via I-49. Many professionals do exactly this to get more home for their money while staying close to work.' },
    ],
  },
  'bentonville-vs-fayetteville': {
    cityA: {
      name: 'Bentonville',
      slug: 'bentonville',
      population: '58,000',
      medianPrice: '$425,000',
      appreciation: '+8%',
      schoolDistrict: 'Bentonville',
      schoolRating: '⭐⭐⭐⭐⭐',
      topEmployer: 'Walmart HQ',
      vibe: 'Innovation hub with world-class culture',
      bestFor: ['Corporate professionals', 'Families with school-age kids', 'Trail enthusiasts', 'Art & museum lovers'],
      pros: ['Crystal Bridges Museum', 'Top-rated schools', 'Strong job market', 'Modern downtown'],
      cons: ['Higher cost of living', 'Corporate-focused culture', 'Less nightlife variety'],
    },
    cityB: {
      name: 'Fayetteville',
      slug: 'fayetteville',
      population: '99,000',
      medianPrice: '$385,000',
      appreciation: '+8%',
      schoolDistrict: 'Fayetteville',
      schoolRating: '⭐⭐⭐⭐',
      topEmployer: 'University of Arkansas',
      vibe: 'College town energy with arts & culture',
      bestFor: ['Young professionals', 'Investors (rentals)', 'Arts & music lovers', 'Razorback fans'],
      pros: ['Vibrant nightlife', 'Diverse community', 'Strong rental market', 'Cultural events year-round'],
      cons: ['Game-day traffic', 'Student rental competition', 'Further from Walmart HQ'],
    },
    verdict: 'Choose Bentonville for corporate career proximity and top K-12 schools. Choose Fayetteville for a vibrant social scene, investment properties, and university energy.',
    faqs: [
      { question: 'How far apart are Bentonville and Fayetteville?', answer: 'They are about 30 minutes apart via I-49/US 71. Many people live in one city and work or socialize in the other.' },
      { question: 'Which city is better for investing?', answer: 'Fayetteville has a stronger rental market due to the university, making it appealing for investment properties. Bentonville offers stronger appreciation and higher property values.' },
      { question: 'Which has better nightlife?', answer: 'Fayetteville wins for nightlife and entertainment with Dickson Street, numerous breweries, live music venues, and a younger vibe.' },
      { question: 'Which city is better for families?', answer: 'Bentonville is generally considered better for families due to its top-rated school district and family-oriented downtown. Fayetteville is great for families too, but the university presence creates a different atmosphere.' },
    ],
  },
  'bella-vista-vs-centerton': {
    cityA: {
      name: 'Bella Vista',
      slug: 'bella-vista',
      population: '32,000',
      medianPrice: '$340,000',
      appreciation: '+7%',
      schoolDistrict: 'Bentonville',
      schoolRating: '⭐⭐⭐⭐⭐',
      topEmployer: 'POA/Service Industry',
      vibe: 'Nature-focused retirement & outdoor living',
      bestFor: ['Retirees', 'Outdoor enthusiasts', 'Lake lovers', 'Golf enthusiasts'],
      pros: ['Seven lakes', 'Extensive trails', 'Golf courses', 'POA amenities'],
      cons: ['Further from NWA core', 'Older housing stock', 'Less dining/shopping'],
    },
    cityB: {
      name: 'Centerton',
      slug: 'centerton',
      population: '18,000',
      medianPrice: '$340,000',
      appreciation: '+11%',
      schoolDistrict: 'Bentonville',
      schoolRating: '⭐⭐⭐⭐⭐',
      topEmployer: 'Retail/Service',
      vibe: 'Fast-growing family suburb',
      bestFor: ['Young families', 'First-time buyers', 'New construction seekers', 'Commuters to Bentonville'],
      pros: ['New construction', 'Fast appreciation', 'Bentonville schools', 'Growing amenities'],
      cons: ['Less established community', 'Limited dining', 'Rapid growth challenges'],
    },
    verdict: 'Choose Bella Vista for lake living, outdoor recreation, and a slower pace. Choose Centerton for new construction, fast appreciation, and proximity to Bentonville jobs.',
    faqs: [
      { question: 'Which city is growing faster?', answer: 'Centerton is one of the fastest-growing cities in Arkansas with +11% appreciation. Bella Vista is growing more steadily at +7%.' },
      { question: 'Do both cities use Bentonville schools?', answer: 'Yes! Both are in the Bentonville School District, which is consistently ranked among the best in Arkansas.' },
      { question: 'Which is better for retirees?', answer: 'Bella Vista was designed as a retirement community and offers POA amenities including seven lakes, golf courses, and extensive trails. It\'s the clear choice for active retirees.' },
      { question: 'Which has more new construction?', answer: 'Centerton leads in new construction with numerous master-planned communities like Copperstone and Mill Creek. Bella Vista has some new builds but more established neighborhoods.' },
    ],
  },
}

const data = computed(() => comparisons[comparison] || null)

const pageTitle = computed(() => {
  if (!data.value) return 'City Comparison'
  return `${data.value.cityA.name} vs ${data.value.cityB.name} — Which NWA City is Right for You?`
})
</script>

<template>
  <div v-if="data">
    <SeoHead
      :title="pageTitle"
      :description="`Compare ${data.cityA.name} and ${data.cityB.name}: home prices, schools, lifestyle, and more. Find the best NWA city for you.`"
      :canonical="`/compare/${comparison}`"
    />

    <main>
      <!-- Hero -->
      <section class="py-16 bg-gradient-to-br from-base-100 via-base-200/50 to-primary/5">
        <div class="container-custom text-center">
          <div class="badge badge-primary badge-lg mb-4">City Comparison</div>
          <h1 class="text-4xl md:text-5xl font-display mb-4">
            {{ data.cityA.name }} <span class="text-primary">vs</span> {{ data.cityB.name }}
          </h1>
          <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
            Both cities offer incredible NWA living. Here's how they stack up so you can choose the best fit.
          </p>
        </div>
      </section>

      <!-- Stat Comparison Table -->
      <section class="py-16">
        <div class="container-custom">
          <div class="overflow-x-auto">
            <table class="table table-lg w-full">
              <thead>
                <tr class="border-b border-base-300">
                  <th class="text-base-content/50 font-normal">Category</th>
                  <th class="text-center font-display text-lg">
                    <RouterLink :to="`/${data.cityA.slug}`" class="hover:text-primary transition-colors">
                      {{ data.cityA.name }}
                    </RouterLink>
                  </th>
                  <th class="text-center font-display text-lg">
                    <RouterLink :to="`/${data.cityB.slug}`" class="hover:text-primary transition-colors">
                      {{ data.cityB.name }}
                    </RouterLink>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="flex items-center gap-2"><Users class="w-4 h-4 text-base-content/50" /> Population</td>
                  <td class="text-center font-semibold">{{ data.cityA.population }}</td>
                  <td class="text-center font-semibold">{{ data.cityB.population }}</td>
                </tr>
                <tr>
                  <td class="flex items-center gap-2"><DollarSign class="w-4 h-4 text-base-content/50" /> Median Price</td>
                  <td class="text-center font-semibold">{{ data.cityA.medianPrice }}</td>
                  <td class="text-center font-semibold">{{ data.cityB.medianPrice }}</td>
                </tr>
                <tr>
                  <td class="flex items-center gap-2"><TrendingUp class="w-4 h-4 text-base-content/50" /> Appreciation</td>
                  <td class="text-center font-semibold text-success">{{ data.cityA.appreciation }}</td>
                  <td class="text-center font-semibold text-success">{{ data.cityB.appreciation }}</td>
                </tr>
                <tr>
                  <td class="flex items-center gap-2"><GraduationCap class="w-4 h-4 text-base-content/50" /> School District</td>
                  <td class="text-center">{{ data.cityA.schoolDistrict }} {{ data.cityA.schoolRating }}</td>
                  <td class="text-center">{{ data.cityB.schoolDistrict }} {{ data.cityB.schoolRating }}</td>
                </tr>
                <tr>
                  <td class="flex items-center gap-2"><Home class="w-4 h-4 text-base-content/50" /> Top Employer</td>
                  <td class="text-center">{{ data.cityA.topEmployer }}</td>
                  <td class="text-center">{{ data.cityB.topEmployer }}</td>
                </tr>
                <tr>
                  <td class="flex items-center gap-2"><MapPin class="w-4 h-4 text-base-content/50" /> Vibe</td>
                  <td class="text-center text-sm">{{ data.cityA.vibe }}</td>
                  <td class="text-center text-sm">{{ data.cityB.vibe }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Pros & Cons -->
      <section class="py-16 bg-base-200/30">
        <div class="container-custom">
          <h2 class="text-3xl font-display text-center mb-12">Pros & Cons</h2>
          <div class="grid lg:grid-cols-2 gap-8">
            <!-- City A -->
            <div class="card bg-base-100">
              <div class="card-body">
                <h3 class="font-display text-xl mb-4">{{ data.cityA.name }}</h3>
                <div class="space-y-3 mb-6">
                  <div v-for="pro in data.cityA.pros" :key="pro" class="flex items-center gap-3">
                    <Check class="w-5 h-5 text-success flex-shrink-0" />
                    <span>{{ pro }}</span>
                  </div>
                </div>
                <div class="space-y-3">
                  <div v-for="con in data.cityA.cons" :key="con" class="flex items-center gap-3">
                    <X class="w-5 h-5 text-error flex-shrink-0" />
                    <span class="text-base-content/70">{{ con }}</span>
                  </div>
                </div>
                <div class="mt-6">
                  <h4 class="text-sm font-semibold text-base-content/50 mb-2">BEST FOR</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in data.cityA.bestFor" :key="tag" class="badge badge-ghost">{{ tag }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- City B -->
            <div class="card bg-base-100">
              <div class="card-body">
                <h3 class="font-display text-xl mb-4">{{ data.cityB.name }}</h3>
                <div class="space-y-3 mb-6">
                  <div v-for="pro in data.cityB.pros" :key="pro" class="flex items-center gap-3">
                    <Check class="w-5 h-5 text-success flex-shrink-0" />
                    <span>{{ pro }}</span>
                  </div>
                </div>
                <div class="space-y-3">
                  <div v-for="con in data.cityB.cons" :key="con" class="flex items-center gap-3">
                    <X class="w-5 h-5 text-error flex-shrink-0" />
                    <span class="text-base-content/70">{{ con }}</span>
                  </div>
                </div>
                <div class="mt-6">
                  <h4 class="text-sm font-semibold text-base-content/50 mb-2">BEST FOR</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in data.cityB.bestFor" :key="tag" class="badge badge-ghost">{{ tag }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Verdict -->
      <section class="py-12">
        <div class="container-custom">
          <div class="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <h2 class="text-2xl font-display mb-4">Our Take</h2>
            <p class="text-base-content/80 text-lg">{{ data.verdict }}</p>
          </div>
        </div>
      </section>

      <!-- FAQs -->
      <section class="py-16 bg-base-200/30">
        <div class="container-custom max-w-3xl">
          <FaqSection :items="data.faqs" :title="`${data.cityA.name} vs ${data.cityB.name} FAQs`" />
        </div>
      </section>

      <!-- CTA -->
      <section class="py-16 bg-primary text-primary-content">
        <div class="container-custom">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-display mb-4">Still Not Sure? Let Us Help</h2>
              <p class="text-primary-content/80 mb-6">
                We know every neighborhood in NWA. Tell us your priorities and we'll recommend the perfect city and neighborhood.
              </p>
              <div class="flex flex-wrap gap-3">
                <RouterLink :to="`/${data.cityA.slug}`" class="btn btn-secondary btn-sm gap-2">
                  Explore {{ data.cityA.name }}
                  <ArrowRight class="w-4 h-4" />
                </RouterLink>
                <RouterLink :to="`/${data.cityB.slug}`" class="btn btn-outline btn-sm text-primary-content border-primary-content/30 gap-2">
                  Explore {{ data.cityB.name }}
                  <ArrowRight class="w-4 h-4" />
                </RouterLink>
              </div>
            </div>
            <div class="bg-base-100 text-base-content rounded-2xl p-8">
              <h3 class="font-display text-xl mb-2">Get Personalized Guidance</h3>
              <p class="text-sm text-base-content/60 mb-6">Tell us what you're looking for</p>
              <LeadForm :source="`compare-${comparison}`" submit-label="Get Recommendations" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>

  <!-- 404 -->
  <div v-else class="min-h-[60vh] flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-2xl font-display mb-4">Comparison Not Found</h1>
      <RouterLink to="/" class="btn btn-primary">Back to Home</RouterLink>
    </div>
  </div>
</template>
