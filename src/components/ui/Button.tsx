import type { ReactNode } from 'react'
import { ArrowRight } from './icons'

type Variant = 'primary' | 'outline' | 'light' | 'on-dark'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: Variant
  size?: 'sm' | 'md'
  arrow?: boolean
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  ariaLabel?: string
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  arrow = false,
  className = '',
  onClick,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const classes = ['btn', `btn--${variant}`, size === 'sm' ? 'btn--sm' : '', className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {children}
      {arrow && <ArrowRight />}
    </>
  )

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        className={classes}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type={type} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  )
}
