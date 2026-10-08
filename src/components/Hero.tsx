import { ArrowRight } from './ui/icons'

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__intro">
        <h1 className="hero__title" data-reveal>
          <span>I build fast, modern</span> <span>websites that win customers</span>
        </h1>

        <div className="hero__meta" data-reveal>
          <p className="hero__lede">
            Responsive, conversion-focused websites that help businesses look credible online.
          </p>

          <a className="hero__link" href="#contact">
            Start a project
            <ArrowRight />
          </a>
        </div>
      </div>

      <div className="container hero__showcase" data-reveal>
        <picture>
          <source media="(max-width: 539px)" srcSet="images/hero-showcase-sm.jpg" />
          <source media="(max-width: 1023px)" srcSet="images/hero-showcase-md.jpg" />
          <img
            className="hero__img"
            src="images/hero-showcase.jpg"
            width={1320}
            height={558}
            alt="Websites designed and built by Collins Maiko — web developer in Kisii, Kenya"
            decoding="async"
            fetchPriority="high"
            onLoad={(event) => event.currentTarget.classList.add('is-loaded')}
            onError={(event) => event.currentTarget.classList.add('is-loaded')}
          />
        </picture>
      </div>
    </section>
  )
}
