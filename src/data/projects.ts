export type Project = {
  id: string
  index: string
  title: string
  category: string
  description: string
  tags: string[]
  preview: 'barbershop' | 'nexora' | 'soon'
  href?: string
  overview: string
  features: string[]
  stack: string[]
}

export const projects: Project[] = [
  {
    id: 'states-barbershop',
    index: '01',
    title: 'States Barbershop',
    category: 'Business Website',
    description:
      'A conversion-focused website designed for a Nairobi barbershop, with services, social proof, location information and WhatsApp booking.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    preview: 'barbershop',
    href: 'https://states-barbershop.vercel.app',
    overview:
      'The goal was simple: turn searches and social traffic into booked chairs. The site leads with the offer, shows transparent pricing, and keeps a WhatsApp booking action within reach on every screen size.',
    features: [
      'Service and pricing structure built for quick decisions',
      'WhatsApp booking flow from every section',
      'Location, opening hours and social proof above the fold',
      'Mobile-first layout for walk-in and search traffic',
      'Fast page loads on everyday mobile connections',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    id: 'nexora-studio',
    index: '02',
    title: 'Nexora Studio',
    category: 'Agency Website',
    description:
      'A modern digital agency website focused on helping beauty and wellness businesses establish a stronger online presence.',
    tags: ['Frontend', 'SEO', 'Responsive Design', 'Vercel'],
    preview: 'nexora',
    href: 'https://nexoraio.vercel.app',
    overview:
      'Nexora Studio needed to look like the kind of studio beauty and wellness brands would trust with their own presence — clear positioning, a calm visual system and pages that are easy to scan on a phone.',
    features: [
      'Positioning and services structured around client outcomes',
      'Reusable page sections for fast iteration',
      'On-page SEO foundations and clean semantic markup',
      'Responsive layouts across phone, tablet and desktop',
      'Deployed and maintained on Vercel',
    ],
    stack: ['Frontend', 'SEO', 'Responsive Design', 'Vercel'],
  },
  {
    id: 'in-development',
    index: '03',
    title: 'More projects coming soon',
    category: 'In development',
    description:
      'New React and TypeScript projects are currently in build. This space is updated as each one launches.',
    tags: ['React', 'TypeScript', 'Client Work'],
    preview: 'soon',
    href: undefined,
    overview: '',
    features: [],
    stack: [],
  },
]
