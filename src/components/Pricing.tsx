import { pricing, type PricingTier } from '../data/pricing'
import { Section } from './ui/Section'
import { Button } from './ui/Button'
import { Check } from './ui/icons'

type Props = {
  onSelect: (tier: PricingTier) => void
}

export function Pricing({ onSelect }: Props) {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      index="03"
      title="Simple pricing"
      sub="Starting prices for common projects, so you can budget before we ever get on a call."
    >
      <div className="pricing__grid" data-reveal-group>
        {pricing.map((tier) => (
          <article className={`plan${tier.featured ? ' plan--featured' : ''}`} key={tier.id}>
            {tier.badge && <span className="plan__badge">{tier.badge}</span>}
            <p className="plan__name">{tier.name}</p>
            <p className="plan__price">
              <span>{tier.price.replace('+', '')}</span>
              <span className="plan__price-note">+</span>
            </p>
            <p className="plan__summary">{tier.summary}</p>

            <ul className="plan__features">
              {tier.features.map((feature) => (
                <li key={feature}>
                  <Check />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="plan__cta">
              <Button
                variant={tier.featured ? 'primary' : 'outline'}
                arrow
                onClick={() => onSelect(tier)}
              >
                {tier.cta}
              </Button>
            </div>
          </article>
        ))}
      </div>

      <p className="pricing__note">
        Starting prices. Final pricing depends on scope, content, pages and integrations.
      </p>
    </Section>
  )
}
