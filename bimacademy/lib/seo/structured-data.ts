/**
 * Structured Data (JSON-LD) for SEO
 * Uses Schema.org vocabulary for rich search results
 */

export const organizationSchema = {
  '@type': 'EducationalOrganization',
  name: 'BIM Developer Academy',
  url: 'https://bimdeveloperacademy.com',
  logo: 'https://bimdeveloperacademy.com/logo.png',
  sameAs: [
    'https://twitter.com/bimdeveloper',
    'https://linkedin.com/company/bim-developer-academy',
    'https://youtube.com/@bimdeveloper',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-800-BIM-DEV',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
};

export const courseSchema = {
  '@type': 'Course',
  name: 'BIM Developer Masterclass',
  description: 'Transform from BIM User to Developer. Master C#, Revit API, and WPF to build custom plugins that automate the impossible.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'BIM Developer Academy',
    url: 'https://bimdeveloperacademy.com',
  },
  educationalLevel: 'Intermediate to Advanced',
  audience: {
    '@type': 'Audience',
    audienceType: 'Architects, Civil Engineers, BIM Coordinators',
  },
  coursePrerequisites: 'Basic understanding of BIM concepts. Programming experience helpful but not required.',
  educationalCredentialAwarded: 'Certificate of Completion',
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    courseWorkload: 'P12W',
    offers: {
      '@type': 'Offer',
      price: '997',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: '2025-01-01',
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127',
    bestRating: '5',
  },
};

export const websiteSchema = {
  '@type': 'WebSite',
  name: 'BIM Developer Academy',
  url: 'https://bimdeveloperacademy.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://bimdeveloperacademy.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://bimdeveloperacademy.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Courses',
      item: 'https://bimdeveloperacademy.com#curriculum',
    },
  ],
};

/**
 * Generate the full JSON-LD script tag content
 */
export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      courseSchema,
      websiteSchema,
      breadcrumbSchema,
    ],
  };
}
