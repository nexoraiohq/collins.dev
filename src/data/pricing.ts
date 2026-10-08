export type PricingTier = {
  id: string
  name: string
  price: string
  summary: string
  features: string[]
  cta: string
  featured?: boolean
  badge?: string
  budget: string
  need: string | null
}

export const pricing: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'KES 7,500+',
    summary: 'One-page website',
    features: [
      'Custom responsive design',
      'Mobile optimization',
      'Up to 5 sections',
      'WhatsApp/contact integration',
      'Basic SEO',
      'Deployment',
    ],
    cta: 'Get Started',
    budget: 'KES 5,000–10,000',
    need: 'New website',
  },
  {
    id: 'business',
    name: 'Business',
    price: 'KES 15,000+',
    summary: 'Multi-page business website',
    features: [
      'Custom design',
      'Up to 5 pages',
      'Responsive development',
      'Contact/WhatsApp integration',
      'Basic SEO',
      'Deployment',
      'Performance optimization',
    ],
    cta: 'Choose Business',
    featured: true,
    badge: 'Most chosen',
    budget: 'KES 10,000–20,000',
    need: 'New website',
  },
  {
    id: 'custom',
    name: 'Custom',
    price: 'KES 25,000+',
    summary: 'More complex websites and interfaces',
    features: [
      'Custom requirements',
      'Advanced interactions',
      'React/TypeScript',
      'Additional pages/features',
      'Custom integrations',
    ],
    cta: 'Discuss Your Project',
    budget: 'KES 20,000–30,000',
    need: 'React/TypeScript development',
  },
]

export const budgetOptions = [
  'Under KES 5,000',
  'KES 5,000–10,000',
  'KES 10,000–20,000',
  'KES 20,000–30,000',
  'KES 30,000+',
]

export const needOptions = [
  'New website',
  'Landing page',
  'Website redesign',
  'React/TypeScript development',
  'Website fixes',
  'Other',
]
