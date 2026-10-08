import { whatsappLink } from '../data/site'
import { Button } from './ui/Button'

export function CTA() {
  return (
    <section className="section section--dark cta">
      <div className="container">
        <div className="cta__inner" data-reveal>
          <p className="eyebrow eyebrow--inv">Let&apos;s work together</p>
          <h2 className="cta__title">Have a website in mind? Let&apos;s build it.</h2>
          <p className="cta__text">
            Tell me what you&apos;re trying to build, and I&apos;ll help you turn the idea into a
            fast, professional website.
          </p>
          <div className="cta__actions">
            <Button href="#contact" variant="light" arrow>
              Start a Project
            </Button>
            <Button href={whatsappLink()} variant="on-dark">
              WhatsApp Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
