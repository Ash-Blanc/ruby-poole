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

    // Area Pages
    {
      path: '/areas/bentonville',
      name: 'area-bentonville',
      component: () => import('../views/areas/AreaBentonville.vue'),
      meta: { title: 'Bentonville Homes for Sale', description: 'Find your dream home in Bentonville, Arkansas' },
    },
    {
      path: '/areas/bella-vista',
      name: 'area-bella-vista',
      component: () => import('../views/areas/AreaBellaVista.vue'),
      meta: { title: 'Bella Vista Homes for Sale', description: 'Explore homes in Bella Vista, Arkansas' },
    },
    {
      path: '/areas/rogers',
      name: 'area-rogers',
      component: () => import('../views/areas/AreaRogers.vue'),
      meta: { title: 'Rogers Homes for Sale', description: 'Discover homes in Rogers, Arkansas' },
    },
    {
      path: '/areas/fayetteville',
      name: 'area-fayetteville',
      component: () => import('../views/areas/AreaFayetteville.vue'),
      meta: { title: 'Fayetteville Homes for Sale', description: 'Browse homes in Fayetteville, Arkansas' },
    },
    {
      path: '/areas/springdale',
      name: 'area-springdale',
      component: () => import('../views/areas/AreaSpringdale.vue'),
      meta: { title: 'Springdale Homes for Sale', description: 'Find homes in Springdale, Arkansas' },
    },

    // Lifestyle / Property Type Pages
    {
      path: '/moving-to-nwa',
      name: 'moving-to-nwa',
      component: () => import('../views/MovingToNwa.vue'),
      meta: { title: 'Moving to Northwest Arkansas', description: 'Your complete guide to relocating to NWA' },
    },
    {
      path: '/homes/lake-homes',
      name: 'lake-homes',
      component: () => import('../views/homes/LakeHomes.vue'),
      meta: { title: 'Lake Homes in NWA', description: 'Discover lakefront properties in Northwest Arkansas' },
    },
    {
      path: '/homes/land',
      name: 'land-homes',
      component: () => import('../views/homes/LandHomes.vue'),
      meta: { title: 'Homes with Land in NWA', description: 'Find homes with acreage in Northwest Arkansas' },
    },
    {
      path: '/homes/new-construction',
      name: 'new-construction',
      component: () => import('../views/homes/NewConstruction.vue'),
      meta: { title: 'New Construction Homes in NWA', description: 'Browse new build homes in Northwest Arkansas' },
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
      meta: { title: 'Video Gallery', description: 'Watch home tours, market updates, and tips from the Ruby Poole Team' },
    },

    // Neighborhood Sub-Pages
    {
      path: '/areas/:city/neighborhoods/:neighborhood',
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
