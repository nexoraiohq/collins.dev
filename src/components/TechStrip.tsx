import { credibility } from '../data/stack'

export function TechStrip() {
  const items = credibility.items

  return (
    <section className="strip" aria-label="Technologies used">
      <div className="container strip__viewport">
        <ul className="strip__track">
          {items.map((item) => (
            <li className="strip__logo" key={item}>
              {item}
            </li>
          ))}
          {items.map((item) => (
            <li className="strip__logo" key={`${item}-dup`} aria-hidden="true">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
