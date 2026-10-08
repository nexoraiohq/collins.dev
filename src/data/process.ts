export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const process: ProcessStep[] = [
  {
    number: '01',
    title: 'Tell me what you need',
    description:
      'Send your business details, goals, references and any existing materials.',
  },
  {
    number: '02',
    title: 'I plan the experience',
    description:
      'I structure the pages, content and user journey before development begins.',
  },
  {
    number: '03',
    title: 'I build',
    description:
      'I design and develop the responsive frontend, keeping the experience fast and polished.',
  },
  {
    number: '04',
    title: 'You review',
    description: 'You receive a working preview and provide feedback.',
  },
  {
    number: '05',
    title: 'We launch',
    description: 'Once approved, I deploy the website and hand over the final result.',
  },
]
