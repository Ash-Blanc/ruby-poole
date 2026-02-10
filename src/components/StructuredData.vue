<script setup lang="ts">
interface Props {
  type: 'LocalBusiness' | 'RealEstateAgent' | 'BreadcrumbList'
  data?: Record<string, unknown>
}

const props = withDefaults(defineProps<Props>(), {})

const baseData = {
  name: 'NWA Neighborhoods by The Ruby Poole Team',
  description: 'Your neighborhood-first guide to living in Northwest Arkansas. Explore communities, homes, school districts & local insight.',
  url: 'https://nwaneighborhoods.com',
  telephone: '+1-479-555-0123',
  email: 'hello@nwaneighborhoods.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street',
    addressLocality: 'Rogers',
    addressRegion: 'AR',
    postalCode: '72756',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.3320,
    longitude: -94.1185,
  },
  areaServed: [
    { '@type': 'City', name: 'Rogers', containedInPlace: { '@type': 'State', name: 'Arkansas' } },
    { '@type': 'City', name: 'Bentonville', containedInPlace: { '@type': 'State', name: 'Arkansas' } },
    { '@type': 'City', name: 'Bella Vista', containedInPlace: { '@type': 'State', name: 'Arkansas' } },
    { '@type': 'City', name: 'Fayetteville', containedInPlace: { '@type': 'State', name: 'Arkansas' } },
    { '@type': 'City', name: 'Springdale', containedInPlace: { '@type': 'State', name: 'Arkansas' } },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '35',
    bestRating: '5',
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/ruby.n.poole',
    'https://twitter.com/RubyNWA',
    'https://www.linkedin.com/in/ruby-poole-90296699',
    'https://www.zillow.com/profile/RubyPoole1',
  ],
}

const getStructuredData = () => {
  switch (props.type) {
    case 'LocalBusiness':
      return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        ...baseData,
        ...props.data,
      }
    case 'RealEstateAgent':
      return {
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        ...baseData,
        ...props.data,
      }
    case 'BreadcrumbList':
      return props.data
    default:
      return {
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        ...baseData,
      }
  }
}
</script>

<template>
  <component
    :is="'script'"
    type="application/ld+json"
    v-html="JSON.stringify(getStructuredData())"
  />
</template>
