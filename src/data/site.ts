export type NavLink = {
  label: string
  href: string
}

export const site = {
  name: 'Collins Maiko',
  role: 'Frontend Developer',
  heroEyebrow: 'Frontend Developer · Kisii, Kenya',
  announcement: {
    full: 'Available for new website projects · Fast turnaround',
    short: 'Available for new projects',
    cta: 'Start a project',
    href: '#contact',
  },
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ] satisfies NavLink[],
  whatsapp: {
    display: '+254 713 324 672',
    number: '254713324672',
  },
  email: 'collinsmaiko91@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/collinsmaiko' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/collinsmaiko' },
    { label: 'Instagram', href: 'https://www.instagram.com/collinsmaiko' },
  ],
  copyright: '© 2026 Collins Maiko. All rights reserved.',
}

export const footerNav: NavLink[] = [...site.nav, { label: 'Contact', href: '#contact' }]

export function whatsappLink(text?: string): string {
  const base = `https://wa.me/${site.whatsapp.number}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}
