import { whyChoose } from '../data/stack'
import { Section } from './ui/Section'

export function WhyMe() {
  return (
    <Section
      id="why"
      eyebrow="Why work with me"
      index="04"
      title="Built around your business, not a template."
      sub="Four things every project I take on is built around."
    >
      <div className="why__grid" data-reveal-group>
        {whyChoose.map((item) => (
          <article className="why__item" key={item.number}>
            <p className="why__num">{item.number}</p>
            <h3 className="why__title">{item.title}</h3>
            <p className="why__text">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
