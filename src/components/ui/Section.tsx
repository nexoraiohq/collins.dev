import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  eyebrow: string
  index?: string
  title: ReactNode
  sub?: string
  layout?: 'stack' | 'split'
  className?: string
  children: ReactNode
}

export function Section({
  id,
  eyebrow,
  index,
  title,
  sub,
  layout = 'stack',
  className = '',
  children,
}: SectionProps) {
  const heading = (
    <header className="section-head" data-reveal>
      <p className="eyebrow">
        {index && <span className="eyebrow__index">{index}</span>}
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </header>
  )

  const classes = ['section', className].filter(Boolean).join(' ')

  if (layout === 'split') {
    return (
      <section id={id} className={classes}>
        <div className="container section-split">
          {heading}
          <div className="section-split__body">{children}</div>
        </div>
      </section>
    )
  }

  return (
    <section id={id} className={classes}>
      <div className="container">
        {heading}
        {children}
      </div>
    </section>
  )
}
