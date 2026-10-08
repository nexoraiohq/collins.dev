export type Service = {
  id: string
  icon: 'business' | 'landing' | 'redesign' | 'frontend'
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    id: 'business-websites',
    icon: 'business',
    title: 'Business Websites',
    description:
      'Professional websites that establish credibility and turn visitors into enquiries, bookings and customers.',
    points: ['Multi-page structure', 'Contact & WhatsApp', 'Basic SEO'],
  },
  {
    id: 'landing-pages',
    icon: 'landing',
    title: 'Landing Pages',
    description:
      'Focused pages designed around one goal — launching a product, promoting an offer or generating leads.',
    points: ['Single clear goal', 'Fast to ship', 'Conversion focused'],
  },
  {
    id: 'website-redesigns',
    icon: 'redesign',
    title: 'Website Redesigns',
    description:
      'Modernize an outdated website with better design, responsiveness, performance and user experience.',
    points: ['New visual system', 'Mobile cleanup', 'Speed improvements'],
  },
  {
    id: 'frontend-development',
    icon: 'frontend',
    title: 'Frontend Development',
    description:
      'Responsive React and TypeScript interfaces built from designs, ideas or existing products.',
    points: ['React & TypeScript', 'Design to code', 'Maintainable components'],
  },
]
