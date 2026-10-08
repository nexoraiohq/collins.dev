import { stack } from '../data/stack'
import { Section } from './ui/Section'

export function TechStack() {
  return (
    <Section
      id="stack"
      className="section--alt"
      eyebrow="Stack"
      index="07"
      title="Tools I work with"
      sub="The technologies behind the websites I build, ship and maintain."
    >
      <div className="stack__grid" data-reveal-group>
        {stack.map((group) => (
          <div className="stack__group" key={group.label}>
            <p className="label">{group.label}</p>
            <ul className="stack__items">
              {group.items.map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
