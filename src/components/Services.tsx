import { services } from '../data/services'
import { Section } from './ui/Section'
import { IconBusiness, IconCode, IconLanding, IconRedesign } from './ui/icons'

const icons = {
  business: IconBusiness,
  landing: IconLanding,
  redesign: IconRedesign,
  frontend: IconCode,
}

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      index="02"
      title="Websites built for business"
      sub="Clear scope, clear deliverables — choose the option that matches what you are trying to ship."
    >
      <div className="services__grid" data-reveal-group>
        {services.map((service) => {
          const Icon = icons[service.icon]
          return (
            <article className="service" key={service.id}>
              <span className="service__icon">
                <Icon />
              </span>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__desc">{service.description}</p>
              <ul className="service__points">
                {service.points.map((point) => (
                  <li className="chip" key={point}>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
