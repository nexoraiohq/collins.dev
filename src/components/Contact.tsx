import { useEffect, useState, type FormEvent } from 'react'
import { budgetOptions, needOptions, type PricingTier } from '../data/pricing'
import { site, whatsappLink } from '../data/site'
import { Button } from './ui/Button'
import { ArrowRight, Clock, Mail, MapPin, WhatsApp } from './ui/icons'

type FormState = {
  name: string
  business: string
  email: string
  whatsapp: string
  need: string
  budget: string
  message: string
}

const initialForm: FormState = {
  name: '',
  business: '',
  email: '',
  whatsapp: '',
  need: '',
  budget: '',
  message: '',
}

type Props = {
  plan: PricingTier | null
}

export function Contact({ plan }: Props) {
  const [form, setForm] = useState<FormState>(initialForm)
  const [sent, setSent] = useState<string | null>(null)

  useEffect(() => {
    if (!plan) return

    const prefix = `I'm interested in the ${plan.name} package (${plan.price}).`
    setForm((prev) => ({
      ...prev,
      need: plan.need ?? prev.need,
      budget: plan.budget,
      message: prev.message.includes(prefix)
        ? prev.message
        : prev.message
          ? `${prefix} ${prev.message}`
          : prefix,
    }))
  }, [plan])

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const lines = [`Hi ${site.name}, I'd like to start a project.`, '', `Name: ${form.name}`]
    if (form.business) lines.push(`Business / Brand: ${form.business}`)
    if (form.email) lines.push(`Email: ${form.email}`)
    if (form.whatsapp) lines.push(`WhatsApp: ${form.whatsapp}`)
    lines.push(`Need: ${form.need}`)
    if (form.budget) lines.push(`Budget: ${form.budget}`)
    lines.push('', 'About the project:', form.message)

    const url = whatsappLink(lines.join('\n'))
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(url)
    setForm({ ...initialForm })
  }

  return (
    <section className="section" id="contact">
      <div className="container contact__grid">
        <div className="contact__aside" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow__index">09</span>
            Contact
          </p>
          <h2 className="section-title">Start your project</h2>
          <p className="section-sub">
            Tell me what you need, and I&apos;ll come back with next steps, a timeline and a clear
            price.
          </p>

          <div className="contact__meta">
            <div className="contact__meta-item">
              <WhatsApp />
              <div>
                <b>WhatsApp</b>
                <span>{site.whatsapp.display}</span>
              </div>
            </div>
            <div className="contact__meta-item">
              <Clock />
              <div>
                <b>Response time</b>
                <span>Usually within a day</span>
              </div>
            </div>
            <div className="contact__meta-item">
              <MapPin />
              <div>
              <b>Based in</b>
              <span>Kisii, Kenya · working with clients worldwide</span>
              </div>
            </div>
            <div className="contact__meta-item">
              <Mail />
              <div>
                <b>Email</b>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>
          </div>

          <a
            className="contact__whatsapp"
            href={whatsappLink('Hi Collins, I would like to discuss a website project.')}
            target="_blank"
            rel="noreferrer noopener"
          >
            Prefer WhatsApp? Start a conversation
            <ArrowRight />
          </a>
        </div>

        <form className="form" onSubmit={handleSubmit} data-reveal>
          <div className="form__grid">
            <div className="field">
              <label className="field__label" htmlFor="contact-name">
                Name
              </label>
              <input
                className="input"
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
                value={form.name}
                onChange={(event) => update('name', event.target.value)}
              />
            </div>

            <div className="field">
              <label className="field__label" htmlFor="contact-business">
                Business / Brand
              </label>
              <input
                className="input"
                id="contact-business"
                name="business"
                type="text"
                placeholder="Business name"
                autoComplete="organization"
                value={form.business}
                onChange={(event) => update('business', event.target.value)}
              />
            </div>

            <div className="field">
              <label className="field__label" htmlFor="contact-email">
                Email <span>(optional)</span>
              </label>
              <input
                className="input"
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={form.email}
                onChange={(event) => update('email', event.target.value)}
              />
            </div>

            <div className="field">
              <label className="field__label" htmlFor="contact-whatsapp">
                WhatsApp <span>(optional)</span>
              </label>
              <input
                className="input"
                id="contact-whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="+254..."
                autoComplete="tel"
                value={form.whatsapp}
                onChange={(event) => update('whatsapp', event.target.value)}
              />
            </div>

            <div className="field">
              <label className="field__label" htmlFor="contact-need">
                What do you need?
              </label>
              <select
                className="input"
                id="contact-need"
                name="need"
                required
                value={form.need}
                onChange={(event) => update('need', event.target.value)}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {needOptions.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label className="field__label" htmlFor="contact-budget">
                Budget <span>(optional)</span>
              </label>
              <select
                className="input"
                id="contact-budget"
                name="budget"
                value={form.budget}
                onChange={(event) => update('budget', event.target.value)}
              >
                <option value="">Select a range</option>
                {budgetOptions.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="field form__field--full">
              <label className="field__label" htmlFor="contact-message">
                Tell me about the project
              </label>
              <textarea
                className="input"
                id="contact-message"
                name="message"
                placeholder="What are you trying to build?"
                required
                value={form.message}
                onChange={(event) => update('message', event.target.value)}
              />
            </div>
          </div>

          <div className="form__foot">
            <Button type="submit" arrow>
              Send Project Request
            </Button>
            <p className="form__hint">Opens WhatsApp with your project details ready to send.</p>
          </div>

          {sent && (
            <div className="form__success" role="status">
              <strong>Your project details are ready.</strong>
              <span>
                WhatsApp should have opened with your message. If it did not,{' '}
                <a href={sent} target="_blank" rel="noreferrer noopener">
                  open WhatsApp here
                </a>
                .
              </span>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
