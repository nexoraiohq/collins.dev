export const credibility = {
  heading: 'Built with a modern frontend stack',
  items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Git', 'Vercel'],
  signals: ['Responsive', 'Fast', 'SEO-ready', 'Mobile-first'],
}

export type StackGroup = {
  label: string
  items: string[]
}

export const stack: StackGroup[] = [
  {
    label: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
  },
  {
    label: 'Development',
    items: ['Git', 'GitHub', 'Vite', 'VS Code'],
  },
  {
    label: 'Deployment',
    items: ['Vercel'],
  },
]

export const heroStack = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Tailwind CSS',
]

export const whyChoose = [
  {
    number: '01',
    title: 'Fast turnaround',
    description:
      'I keep projects focused and streamlined so you can get online without unnecessary delays.',
  },
  {
    number: '02',
    title: 'Mobile-first',
    description:
      'Your website is designed to work properly across phones, tablets and desktops.',
  },
  {
    number: '03',
    title: 'Modern frontend',
    description: 'Clean, maintainable frontend code using modern web technologies.',
  },
  {
    number: '04',
    title: 'Business-focused',
    description:
      "The goal isn't simply to make something beautiful. Your website needs to help people understand your business and take action.",
  },
]
