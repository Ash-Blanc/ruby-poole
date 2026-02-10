import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    // Home
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    // Property Search
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
      meta: { title: 'Search Homes', description: 'Search homes for sale in Northwest Arkansas' },
    },

    // ========================================
    // City Hubs (SEO + AI Authority)
    // ========================================
    {
      path: '/bentonville',
      name: 'city-bentonville',
      component: () => import('../views/areas/AreaBentonville.vue'),
      meta: { title: 'Bentonville Neighborhoods & Homes', description: 'Explore neighborhoods and homes in Bentonville, Arkansas' },
    },
    {
      path: '/bentonville/downtown-bentonville',
      name: 'neighborhood-downtown-bentonville',
      component: () => import('../views/areas/DowntownBentonville.vue'),
      meta: { title: 'Downtown Bentonville Living', description: 'Explore downtown Bentonville — walkable, vibrant, and cultural' },
    },
    {
      path: '/bella-vista',
      name: 'city-bella-vista',
      component: () => import('../views/areas/AreaBellaVista.vue'),
      meta: { title: 'Bella Vista Neighborhoods & Homes', description: 'Explore neighborhoods and homes in Bella Vista, Arkansas' },
    },
    {
      path: '/centerton',
      name: 'city-centerton',
      component: () => import('../views/areas/AreaCenterton.vue'),
      meta: { title: 'Centerton Neighborhoods & Homes', description: 'Find homes in Centerton, one of NWA\'s fastest-growing cities' },
    },
    {
      path: '/rogers',
      name: 'city-rogers',
      component: () => import('../views/areas/AreaRogers.vue'),
      meta: { title: 'Rogers Neighborhoods & Homes', description: 'Discover neighborhoods and homes in Rogers, Arkansas' },
    },
    {
      path: '/fayetteville',
      name: 'city-fayetteville',
      component: () => import('../views/areas/AreaFayetteville.vue'),
      meta: { title: 'Fayetteville Neighborhoods & Homes', description: 'Browse neighborhoods and homes in Fayetteville, Arkansas' },
    },
    {
      path: '/springdale',
      name: 'city-springdale',
      component: () => import('../views/areas/AreaSpringdale.vue'),
      meta: { title: 'Springdale Neighborhoods & Homes', description: 'Find neighborhoods and homes in Springdale, Arkansas' },
    },

    // Old /areas/ redirects
    { path: '/areas/bentonville', redirect: '/bentonville' },
    { path: '/areas/downtown-bentonville', redirect: '/bentonville/downtown-bentonville' },
    { path: '/areas/bella-vista', redirect: '/bella-vista' },
    { path: '/areas/centerton', redirect: '/centerton' },
    { path: '/areas/rogers', redirect: '/rogers' },
    { path: '/areas/fayetteville', redirect: '/fayetteville' },
    { path: '/areas/springdale', redirect: '/springdale' },

    // ========================================
    // Lifestyle / Property Type Hubs (PPC + SEO)
    // ========================================
    {
      path: '/homes/lake-homes',
      name: 'lake-homes',
      component: () => import('../views/homes/LakeHomes.vue'),
      meta: { title: 'Lake & Waterfront Homes in NWA', description: 'Discover lakefront and waterfront properties in Northwest Arkansas' },
    },
    {
      path: '/homes/new-construction',
      name: 'new-construction',
      component: () => import('../views/homes/NewConstruction.vue'),
      meta: { title: 'New Construction Homes in NWA', description: 'Browse new build homes in Northwest Arkansas' },
    },
    {
      path: '/homes/bike-trails',
      name: 'bike-trails',
      component: () => import('../views/homes/BikeTrails.vue'),
      meta: { title: 'Homes Near Bike Trails in NWA', description: 'Find homes near the NWA trail system and bike-friendly neighborhoods' },
    },
    {
      path: '/homes/condos-townhomes',
      name: 'condos-townhomes',
      component: () => import('../views/homes/CondosTownhomes.vue'),
      meta: { title: 'Condos & Townhomes in NWA', description: 'Find condos and townhomes in Northwest Arkansas' },
    },
    // Kept but not in primary nav
    {
      path: '/homes/land',
      name: 'land-homes',
      component: () => import('../views/homes/LandHomes.vue'),
      meta: { title: 'Homes with Land in NWA', description: 'Find homes with acreage in Northwest Arkansas' },
    },
    {
      path: '/homes/luxury',
      name: 'luxury-homes',
      component: () => import('../views/homes/LuxuryHomes.vue'),
      meta: { title: 'Luxury Homes in NWA', description: 'Browse luxury properties and estates in Northwest Arkansas' },
    },

    // ========================================
    // School Districts
    // ========================================
    {
      path: '/school-districts',
      name: 'school-districts',
      component: () => import('../views/SchoolDistrictsHub.vue'),
      meta: { title: 'School Districts in Northwest Arkansas', description: 'Explore school districts in NWA — Bentonville, Rogers, Springdale, Fayetteville and more' },
    },

    // ========================================
    // High-Intent Functional Paths
    // ========================================
    {
      path: '/homes-under-400k',
      name: 'homes-under-400k',
      component: () => import('../views/homes/HighIntentPage.vue'),
      props: { intentType: 'under-400k' },
      meta: { title: 'Homes Under $400K in NWA', description: 'Find affordable homes under $400,000 in Northwest Arkansas' },
    },
    {
      path: '/one-level-homes',
      name: 'one-level-homes',
      component: () => import('../views/homes/HighIntentPage.vue'),
      props: { intentType: 'one-level' },
      meta: { title: 'One-Level Homes in NWA', description: 'Browse single-story and ranch-style homes in Northwest Arkansas' },
    },
    {
      path: '/homes-with-acreage',
      name: 'homes-with-acreage',
      component: () => import('../views/homes/HighIntentPage.vue'),
      props: { intentType: 'acreage' },
      meta: { title: 'Homes with 1+ Acres in NWA', description: 'Find homes with land and acreage in Northwest Arkansas' },
    },
    {
      path: '/homes-3-car-garage',
      name: 'homes-3-car-garage',
      component: () => import('../views/homes/HighIntentPage.vue'),
      props: { intentType: '3-car-garage' },
      meta: { title: '3+ Car Garage Homes in NWA', description: 'Browse homes with oversized garages in Northwest Arkansas' },
    },
    {
      path: '/homes-with-pool',
      name: 'homes-with-pool',
      component: () => import('../views/homes/HighIntentPage.vue'),
      props: { intentType: 'pool' },
      meta: { title: 'Homes with a Pool in NWA', description: 'Find homes with swimming pools in Northwest Arkansas' },
    },

    // ========================================
    // Content & Resources
    // ========================================
    {
      path: '/moving-to-nwa',
      name: 'moving-to-nwa',
      component: () => import('../views/MovingToNwa.vue'),
      meta: { title: 'Moving to Northwest Arkansas', description: 'Your complete guide to relocating to NWA' },
    },

    // Team & Agents
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/TeamView.vue'),
      meta: { title: 'Meet Our Team', description: 'Meet the Ruby Poole Team at Collier & Associates' },
    },
    {
      path: '/team/:slug',
      name: 'agent-profile',
      component: () => import('../views/AgentProfileView.vue'),
      meta: { title: 'Agent Profile', description: 'Agent profile' },
    },

    // Lead Capture
    {
      path: '/thank-you',
      name: 'thank-you',
      component: () => import('../views/ThankYouView.vue'),
      meta: { title: 'Thank You', description: 'Thank you for contacting us', noIndex: true },
    },

    // Legal
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/PrivacyView.vue'),
      meta: { title: 'Privacy Policy', description: 'Our privacy policy' },
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/TermsView.vue'),
      meta: { title: 'Terms of Service', description: 'Our terms of service' },
    },

    // Blog
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/blog/BlogListView.vue'),
      meta: { title: 'Blog & Market Insights', description: 'Real estate tips, market updates, and local guides for Northwest Arkansas' },
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: () => import('../views/blog/BlogPostView.vue'),
      meta: { title: 'Blog Post', description: 'Blog article' },
    },

    // Videos
    {
      path: '/videos',
      name: 'videos',
      component: () => import('../views/VideoView.vue'),
      meta: { title: 'Video Gallery', description: 'Watch home tours, market updates, and neighborhood guides' },
    },

    // City Comparison Pages
    {
      path: '/compare/:comparison',
      name: 'city-comparison',
      component: () => import('../views/ComparisonPage.vue'),
      meta: { title: 'City Comparison', description: 'Compare NWA cities side by side' },
    },

    // Neighborhood Sub-Pages
    {
      path: '/:city/neighborhoods/:neighborhood',
      name: 'neighborhood',
      component: () => import('../views/areas/NeighborhoodView.vue'),
      meta: { title: 'Neighborhood Guide', description: 'Explore this neighborhood' },
    },

    // 404 Catch-all
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: 'Page Not Found', noIndex: true },
    },
  ],
})

export default router
