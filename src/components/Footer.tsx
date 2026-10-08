import { footerNav, site } from '../data/site'
import { Button } from './ui/Button'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top" data-reveal-group>
          <div>
            <p className="footer__name">{site.name}</p>
            <p className="footer__tag">
              Frontend Developer building modern websites and digital experiences.
            </p>
            <div className="footer__cta">
              <Button href="#contact" variant="light" size="sm" arrow>
                Start a Project
              </Button>
            </div>
          </div>

          <div>
            <p className="footer__col-title">Navigation</p>
            <ul className="footer__list">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer__col-title">Elsewhere</p>
            <ul className="footer__list">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer noopener">
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`}>Email</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer__wordmark" aria-hidden="true" data-reveal>
          Collins Maiko
        </p>

        <div className="footer__bottom" data-reveal>
          <span>{site.copyright}</span>
          <span className="footer__available">Available for freelance projects.</span>
        </div>
      </div>
    </footer>
  )
}
