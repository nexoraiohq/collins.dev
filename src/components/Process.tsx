import { process } from '../data/process'
import { Section } from './ui/Section'

export function Process() {
  return (
    <Section
      id="process"
      className="section--dark"
      eyebrow="Process"
      index="05"
      title="From idea to live website"
      sub="A simple path from the first message to a live, deployed website."
    >
      <ol className="process__list" data-reveal-group>
        {process.map((step) => (
          <li className="process__step" key={step.number}>
            <p className="process__num">{step.number}</p>
            <h3 className="process__title">{step.title}</h3>
            <p className="process__text">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
