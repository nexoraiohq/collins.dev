import { faq } from '../data/faq'
import { Section } from './ui/Section'

export function FAQ() {
  return (
    <Section
      id="faq"
      layout="split"
      eyebrow="FAQ"
      index="08"
      title="Questions, answered"
      sub="The answers to the questions I get asked most often."
    >
      <div className="faq__list" data-reveal>
        {faq.map((item) => (
          <details className="faq__item" name="faq" key={item.question}>
            <summary className="faq__q">
              {item.question}
              <span className="faq__icon" aria-hidden="true" />
            </summary>
            <p className="faq__a">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
