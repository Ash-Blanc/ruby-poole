<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { School, ArrowLeft, Check, DollarSign } from 'lucide-vue-next'
import SeoHead from '@/components/SeoHead.vue'
import LeadForm from '@/components/LeadForm.vue'
import IdxEmbed from '@/components/IdxEmbed.vue'
import FaqSection from '@/components/FaqSection.vue'

const route = useRoute()
const city = route.params.city as string
const neighborhood = route.params.neighborhood as string

// Neighborhood data - in production, fetch from CMS/API
// Need to define a type to avoid 'any'
interface NeighborhoodData {
    name: string
    tagline: string
    description: string
    priceRange: string
    homeTypes: string[]
    highlights: string[]
    schools: string[]
    lifestyle: string
    image: string
}

const neighborhoodData: Record<string, Record<string, NeighborhoodData>> = {
    bentonville: {
        downtown: {
            name: 'Downtown Bentonville',
            tagline: 'Walk to the Square, Crystal Bridges, and top restaurants',
            description: 'Downtown Bentonville is the heart of the city, offering walkable access to the famous Bentonville Square, Crystal Bridges Museum, and an ever-growing collection of restaurants and shops. Perfect for professionals and empty nesters who value convenience and culture.',
            priceRange: '$400K - $800K',
            homeTypes: ['Townhomes', 'Historic Renovations', 'New Construction'],
            highlights: ['Walking distance to Square', 'Crystal Bridges nearby', 'Top restaurants', 'Active nightlife'],
            schools: ['Lincoln Jr. High', 'Bentonville High'],
            lifestyle: 'Urban/Walkable',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        },
        'sugar-creek': {
            name: 'Sugar Creek',
            tagline: 'Family-friendly with top schools and plenty of green space',
            description: 'Sugar Creek is one of Bentonville\'s most desirable family neighborhoods, featuring excellent schools, multiple parks, and a strong sense of community. The area offers a mix of established homes and newer construction.',
            priceRange: '$350K - $600K',
            homeTypes: ['Single Family', 'New Construction'],
            highlights: ['Top-rated schools', 'Multiple parks', 'Community pool', 'Sports fields'],
            schools: ['Elm Tree Elementary', 'Bright Futures Elementary', 'Lincoln Jr. High'],
            lifestyle: 'Family-Friendly Suburban',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
        },
        'park-springs': {
            name: 'Park Springs',
            tagline: 'Modern living near trails and parks',
            description: 'Park Springs is one of Bentonville\'s newest developments, featuring contemporary homes, pocket parks, and direct trail connectivity. Ideal for active families and professionals who want modern amenities with quick access to downtown.',
            priceRange: '$375K - $650K',
            homeTypes: ['New Construction', 'Single Family', 'Townhomes'],
            highlights: ['Trail access', 'Modern homes', 'Near downtown', 'Community amenities'],
            schools: ['Apple Glen Elementary', 'Lincoln Jr. High', 'Bentonville High'],
            lifestyle: 'Modern Suburban',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
        },
        'bella-vista-highlands': {
            name: 'Bella Vista Highlands',
            tagline: 'Gated privacy with Bentonville schools',
            description: 'Bella Vista Highlands is a gated community on the north side of Bentonville offering larger lots, mature trees, and serene surroundings — all within the top-rated Bentonville School District.',
            priceRange: '$450K - $750K',
            homeTypes: ['Custom Builds', 'Single Family', 'Estate Homes'],
            highlights: ['Gated community', 'Larger lots', 'Bentonville schools', 'Mature landscaping'],
            schools: ['Willowbrook Elementary', 'Bentonville West High'],
            lifestyle: 'Upscale Suburban',
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
        },
    },
    rogers: {
        'pinnacle-hills': {
            name: 'Pinnacle Hills',
            tagline: 'Upscale living with shopping and entertainment at your doorstep',
            description: 'Pinnacle Hills is Rogers\' premier mixed-use development, combining luxury homes with high-end shopping, dining, and entertainment venues. The area features newer construction with modern amenities.',
            priceRange: '$450K - $900K',
            homeTypes: ['Luxury Single Family', 'Townhomes', 'Condos'],
            highlights: ['Pinnacle Hills Promenade', 'Upscale dining', 'Nearby trails', 'Modern amenities'],
            schools: ['Reagan Elementary', 'Elmwood Jr. High', 'Heritage High'],
            lifestyle: 'Upscale Urban',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
        },
        'downtown-rogers': {
            name: 'Downtown Rogers',
            tagline: 'Historic charm meets modern revitalization',
            description: 'Downtown Rogers has experienced a renaissance in recent years, with historic buildings being transformed into restaurants, shops, and lofts. The area offers a unique blend of history and modern urban living.',
            priceRange: '$250K - $450K',
            homeTypes: ['Historic Homes', 'Lofts', 'Bungalows'],
            highlights: ['Historic architecture', 'Local restaurants', 'Art galleries', 'Farmers market'],
            schools: ['Greer Lingle Middle', 'Rogers High'],
            lifestyle: 'Historic/Urban',
            image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
        },
        'lake-atalanta': {
            name: 'Lake Atalanta',
            tagline: 'Lakeside living with trail access',
            description: 'The Lake Atalanta area offers a unique combination of lakeside living and trail connectivity in Rogers. The neighborhood surrounds the scenic Lake Atalanta park, with paved trails, fishing, and natural beauty just steps from home.',
            priceRange: '$300K - $500K',
            homeTypes: ['Single Family', 'Ranch Style', 'Craftsman'],
            highlights: ['Lake access', 'Paved trails', 'Parks', 'Close to downtown Rogers'],
            schools: ['Eastside Elementary', 'Greer Lingle Middle', 'Rogers High'],
            lifestyle: 'Outdoor/Lakeside',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        },
        'pleasant-crossing': {
            name: 'Pleasant Crossing',
            tagline: 'New development with modern amenities',
            description: 'Pleasant Crossing is a growing community in south Rogers featuring new construction homes, planned green spaces, and easy access to I-49. The area is popular with young families seeking modern homes at competitive prices.',
            priceRange: '$280K - $450K',
            homeTypes: ['New Construction', 'Single Family'],
            highlights: ['New builds', 'I-49 access', 'Shopping nearby', 'Growing community'],
            schools: ['Bonnie Grimes Elementary', 'Lingle Middle', 'Heritage High'],
            lifestyle: 'Modern Suburban',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
        },
    },
    'bella-vista': {
        kingswood: {
            name: 'Kingswood',
            tagline: 'Golf course living with lake access',
            description: 'Kingswood is a premier Bella Vista neighborhood built around the Kingswood Golf Course. Residents enjoy stunning golf course views, easy lake access, and the quiet lifestyle that makes Bella Vista special.',
            priceRange: '$300K - $550K',
            homeTypes: ['Golf Course Homes', 'Ranch Style', 'Custom Builds'],
            highlights: ['Golf course frontage', 'Lake access', 'Mature trees', 'POA amenities'],
            schools: ['Cooper Elementary', 'Bella Vista Middle', 'Bentonville West High'],
            lifestyle: 'Golf/Retirement',
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
        },
        highlands: {
            name: 'Highlands',
            tagline: 'Elevated views and serene surroundings',
            description: 'The Highlands neighborhood in Bella Vista offers elevated homesites with stunning Ozark views. Known for its larger lots, wooded setting, and peaceful atmosphere, it\'s ideal for those seeking privacy and nature.',
            priceRange: '$280K - $500K',
            homeTypes: ['Custom Builds', 'Ranch Style', 'Log Homes'],
            highlights: ['Ozark views', 'Larger lots', 'Wooded setting', 'POA amenities'],
            schools: ['Cooper Elementary', 'Bella Vista Middle', 'Bentonville West High'],
            lifestyle: 'Rural/Private',
            image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
        },
        branchwood: {
            name: 'Branchwood',
            tagline: 'Family-friendly with lake and trail access',
            description: 'Branchwood is a popular Bella Vista neighborhood offering a blend of established and newer homes near the Back 40 trail system and Bella Vista\'s lakes. Great for families and outdoor enthusiasts.',
            priceRange: '$250K - $400K',
            homeTypes: ['Single Family', 'Ranch Style'],
            highlights: ['Back 40 trail access', 'Near lakes', 'Family-friendly', 'Affordable'],
            schools: ['Cooper Elementary', 'Bella Vista Middle', 'Bentonville West High'],
            lifestyle: 'Active/Family',
            image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
        },
    },
    fayetteville: {
        'downtown-fayetteville': {
            name: 'Downtown Fayetteville',
            tagline: 'Walkable arts, dining, and university energy',
            description: 'Downtown Fayetteville revolves around the iconic Square and its proximity to the University of Arkansas. It offers a vibrant mix of local restaurants, breweries, live music venues, and boutique shopping — all within walking distance.',
            priceRange: '$300K - $600K',
            homeTypes: ['Historic Homes', 'Bungalows', 'Condos', 'Lofts'],
            highlights: ['Walking to the Square', 'U of A proximity', 'Live music scene', 'Local dining'],
            schools: ['Owl Creek School', 'Ramay Jr. High', 'Fayetteville High'],
            lifestyle: 'Urban/Arts',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
        },
        'gulley-park': {
            name: 'Gulley Park',
            tagline: 'Established neighborhood with charm and convenience',
            description: 'The Gulley Park area is one of Fayetteville\'s most beloved neighborhoods, centered around the namesake park. Mature trees, well-maintained sidewalks, and a strong sense of community define this area.',
            priceRange: '$350K - $650K',
            homeTypes: ['Single Family', 'Craftsman', 'Mid-Century'],
            highlights: ['Park access', 'Mature trees', 'Walkable streets', 'Near U of A'],
            schools: ['Butterfield Elementary', 'Ramay Jr. High', 'Fayetteville High'],
            lifestyle: 'Established Suburban',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        },
    },
    springdale: {
        'har-ber-meadows': {
            name: 'Har-Ber Meadows',
            tagline: 'Upscale living in Springdale',
            description: 'Har-Ber Meadows is Springdale\'s premier neighborhood, featuring larger homes, well-manicured landscaping, and proximity to Har-Ber High School — one of the top-rated schools in the district.',
            priceRange: '$350K - $600K',
            homeTypes: ['Single Family', 'Custom Builds'],
            highlights: ['Top-rated school', 'Larger homes', 'Community feel', 'Well-maintained'],
            schools: ['George Elementary', 'Har-Ber High'],
            lifestyle: 'Upscale Suburban',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
        },
        'elm-springs': {
            name: 'Elm Springs',
            tagline: 'Small-town feel with NWA convenience',
            description: 'Elm Springs sits on the western edge of Springdale, offering a small-town atmosphere with larger lots and newer construction. It\'s one of NWA\'s most affordable areas for families seeking space.',
            priceRange: '$220K - $380K',
            homeTypes: ['New Construction', 'Single Family', 'Homes with Land'],
            highlights: ['Affordable', 'Larger lots', 'New construction', 'Small-town charm'],
            schools: ['Elm Springs Elementary', 'Southwest Jr. High', 'Springdale High'],
            lifestyle: 'Small Town/Affordable',
            image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
        },
    },
    centerton: {
        copperstone: {
            name: 'Copperstone',
            tagline: 'Master-planned community with resort-style amenities',
            description: 'Copperstone is Centerton\'s flagship master-planned community, featuring a resort-style pool, splash pad, walking trails, and modern homes. It\'s one of the most popular neighborhoods for young families moving to NWA.',
            priceRange: '$300K - $500K',
            homeTypes: ['New Construction', 'Single Family'],
            highlights: ['Resort-style pool', 'Splash pad', 'Walking trails', 'Community events'],
            schools: ['Centerton-Gamble Elementary', 'Gravette Middle', 'Gravette High'],
            lifestyle: 'Master-Planned Family',
            image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
        },
        'mill-creek': {
            name: 'Mill Creek',
            tagline: 'Affordable new construction with room to grow',
            description: 'Mill Creek is a growing Centerton neighborhood popular with first-time buyers. Featuring competitively priced new construction, community playgrounds, and proximity to shopping, it offers great value in NWA.',
            priceRange: '$250K - $400K',
            homeTypes: ['New Construction', 'Single Family'],
            highlights: ['Affordable', 'New builds', 'Playgrounds', 'Growing area'],
            schools: ['Centerton-Gamble Elementary', 'Gravette Middle', 'Gravette High'],
            lifestyle: 'Starter/Growing Family',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        },
    },
}

const data = computed(() => {
    return neighborhoodData[city]?.[neighborhood] || null
})

const faqs = computed(() => {
    if (!data.value) return []
    return [
        { question: `What is the average home price in ${data.value.name}?`, answer: `Home prices in ${data.value.name} typically range from ${data.value.priceRange}. Contact us for current listings and market conditions.` },
        { question: `What schools serve ${data.value.name}?`, answer: `Students in ${data.value.name} are served by ${data.value.schools.join(', ')}. Contact us for more details on school boundaries.` },
        { question: `What types of homes are available?`, answer: `${data.value.name} features primarily ${data.value.homeTypes.join(', ')}. The neighborhood is known for its ${data.value.lifestyle.toLowerCase()} atmosphere.` },
    ]
})

const cityName = computed(() => {
    const names: Record<string, string> = {
        bentonville: 'Bentonville',
        rogers: 'Rogers',
        'bella-vista': 'Bella Vista',
        fayetteville: 'Fayetteville',
        springdale: 'Springdale',
        centerton: 'Centerton',
    }
    return names[city] || city
})
</script>

<template>
    <div v-if="data">
        <SeoHead :title="`${data.name} Homes for Sale`"
            :description="`Explore homes in ${data.name}, ${cityName}. ${data.tagline}. Price range: ${data.priceRange}.`"
            :canonical="`/${city}/neighborhoods/${neighborhood}`" />

        <main>
            <!-- Hero -->
            <section class="relative min-h-[50vh] flex items-center overflow-hidden">
                <div class="absolute inset-0">
                    <img :src="data.image" :alt="data.name" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-r from-neutral/90 via-neutral/70 to-transparent"></div>
                </div>

                <div class="container-custom relative z-10 py-16">
                    <RouterLink :to="`/${city}`"
                        class="inline-flex items-center gap-2 text-neutral-content/70 hover:text-primary text-sm mb-6">
                        <ArrowLeft class="w-4 h-4" />
                        Back to {{ cityName }}
                    </RouterLink>

                    <h1 class="text-4xl md:text-5xl font-display text-neutral-content mb-4">
                        {{ data.name }}
                    </h1>
                    <p class="text-xl text-neutral-content/80 max-w-2xl mb-6">{{ data.tagline }}</p>

                    <div class="flex flex-wrap gap-4 items-center">
                        <div class="badge badge-lg badge-primary gap-2">
                            <DollarSign class="w-4 h-4" />
                            {{ data.priceRange }}
                        </div>
                        <div class="badge badge-lg badge-ghost text-neutral-content">
                            {{ data.lifestyle }}
                        </div>
                    </div>
                </div>
            </section>

            <!-- Overview -->
            <section class="py-16">
                <div class="container-custom">
                    <div class="grid lg:grid-cols-3 gap-12">
                        <div class="lg:col-span-2">
                            <h2 class="text-2xl font-display mb-4">About {{ data.name }}</h2>
                            <p class="text-base-content/70 leading-relaxed mb-8">{{ data.description }}</p>

                            <!-- Highlights -->
                            <div class="grid sm:grid-cols-2 gap-4 mb-8">
                                <div v-for="highlight in data.highlights" :key="highlight"
                                    class="flex items-center gap-3">
                                    <Check class="w-5 h-5 text-success" />
                                    <span>{{ highlight }}</span>
                                </div>
                            </div>

                            <!-- Home Types -->
                            <h3 class="font-display text-lg mb-3">Home Types</h3>
                            <div class="flex flex-wrap gap-2 mb-8">
                                <span v-for="type in data.homeTypes" :key="type" class="badge badge-outline py-3 px-4">
                                    {{ type }}
                                </span>
                            </div>

                            <!-- Schools -->
                            <h3 class="font-display text-lg mb-3">Schools</h3>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="school in data.schools" :key="school" class="badge badge-ghost py-3 px-4">
                                    <School class="w-3 h-3 mr-2" />
                                    {{ school }}
                                </span>
                            </div>
                        </div>

                        <!-- Lead Form -->
                        <div class="bg-base-200/50 rounded-2xl p-8">
                            <h3 class="font-display text-xl mb-2">Explore {{ data.name }}</h3>
                            <p class="text-sm text-base-content/60 mb-6">Get personalized recommendations for this
                                neighborhood</p>
                            <LeadForm :source="`neighborhood-${neighborhood}`" submit-label="Get Listings" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Listings -->
            <section class="py-16 bg-base-200/50">
                <div class="container-custom">
                    <h2 class="text-2xl font-display mb-8 text-center">Homes for Sale in {{ data.name }}</h2>
                    <IdxEmbed type="search" :search-params="{ neighborhood: neighborhood }" height="500px" />
                </div>
            </section>

            <!-- FAQs -->
            <section class="py-16">
                <div class="container-custom max-w-3xl">
                    <FaqSection :items="faqs" :title="`${data.name} FAQs`" />
                </div>
            </section>

            <!-- CTA -->
            <section class="py-16 bg-primary text-primary-content">
                <div class="container-custom text-center">
                    <h2 class="text-3xl font-display mb-4">Ready to Explore {{ data.name }}?</h2>
                    <p class="text-primary-content/80 mb-8 max-w-lg mx-auto">
                        Let us show you what makes this neighborhood special. Schedule a tour today.
                    </p>
                    <RouterLink to="/#contact" class="btn btn-secondary btn-lg">Talk to a Local Expert</RouterLink>
                </div>
            </section>
        </main>
    </div>

    <!-- 404 for unknown neighborhoods -->
    <div v-else class="min-h-[60vh] flex items-center justify-center">
        <div class="text-center">
            <h1 class="text-2xl font-display mb-4">Neighborhood Not Found</h1>
            <RouterLink :to="`/${city}`" class="btn btn-primary">Explore {{ cityName }}</RouterLink>
        </div>
    </div>
</template>
