import { Section } from './ui/Section'

const focusAreas = ['Frontend development', 'UI/UX', 'React', 'TypeScript', 'Web performance']

export function About() {
  return (
    <Section id="about" eyebrow="About" index="06" title="Hi, I'm Collins.">
      <div className="about__grid">
        <div data-reveal>
          <div className="about__text">
            <p>
              I&apos;m a self-taught frontend developer from Kisii, Kenya focused on building modern,
              responsive websites and digital experiences.
            </p>
            <p>
              I started with HTML and CSS and have grown into modern frontend development with
              JavaScript, React and TypeScript.
            </p>
            <p>
              I care about the details that make a website feel professional — typography, spacing,
              responsiveness, performance and a clear user experience.
            </p>
          </div>

          <div className="about__focus">
            <p className="label">Currently focused on</p>
            <ul className="about__focus-list">
              {focusAreas.map((area) => (
                <li className="chip" key={area}>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-card" data-reveal>
          <p className="about-card__mono">
            CM<span>.</span>
          </p>
          <dl className="about-card__rows">
            <div className="about-card__row">
              <dt>Based</dt>
              <dd>Kisii, Kenya</dd>
            </div>
            <div className="about-card__row">
              <dt>Working with</dt>
              <dd>Clients worldwide</dd>
            </div>
            <div className="about-card__row">
              <dt>Focus</dt>
              <dd>Frontend &amp; UI</dd>
            </div>
            <div className="about-card__row">
              <dt>Status</dt>
              <dd className="about-card__status">Open for projects</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  )
}
