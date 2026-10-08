import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { site } from '../data/site'
import { Button } from './ui/Button'
import { MenuIcon } from './ui/icons'

function Brand() {
  return (
    <span className="brand">
      <span className="brand__name">{site.name.split(' ')[0]}</span>
    </span>
  )
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useLayoutEffect(() => {
    const nav = document.querySelector<HTMLElement>('.nav')
    const setTop = () => {
      if (nav) {
        document.documentElement.style.setProperty('--menu-top', `${nav.getBoundingClientRect().bottom}px`)
      }
    }
    setTop()
    window.addEventListener('scroll', setTop, { passive: true })
    window.addEventListener('resize', setTop)
    return () => {
      document.documentElement.style.removeProperty('--menu-top')
      window.removeEventListener('scroll', setTop)
      window.removeEventListener('resize', setTop)
    }
  }, [])

  useEffect(() => {
    document.body.classList.add('is-locked')
    firstLinkRef.current?.focus({ preventScroll: true })

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <div className="menu" role="dialog" aria-modal="true" aria-label="Site menu">
      <nav aria-label="Mobile">
        <ul className="menu__list">
          {site.nav.map((item, index) => (
            <li className="menu__item" key={item.href}>
              <a
                className="menu__link"
                href={item.href}
                onClick={onClose}
                ref={index === 0 ? firstLinkRef : undefined}
              >
                {item.label}
                <span className="mono">{String(index + 1).padStart(2, '0')}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="menu__foot">
        <Button href="#contact" arrow onClick={onClose}>
          Start a Project
        </Button>
      </div>
    </div >
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      navRef.current?.classList.toggle('is-stuck', window.scrollY > 6)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const main = document.getElementById('main')
    if (!main) return

    const navIds = new Set(site.nav.map((item) => item.href.slice(1)))
    const blocks = Array.from(main.children) as HTMLElement[]

    const onScroll = () => {
      const probe = window.scrollY + window.innerHeight * 0.35
      let currentId = ''
      for (const block of blocks) {
        if (block.getClientRects().length === 0) continue
        if (block.getBoundingClientRect().top + window.scrollY <= probe) currentId = block.id
      }
      setActive(navIds.has(currentId) ? currentId : '')
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      <header className="nav" ref={navRef}>
        <div className="container nav__inner">
          <a href="#top" aria-label={`${site.name} — home`} onClick={() => setOpen(false)}>
            <Brand />
          </a>

          <nav aria-label="Primary">
            <ul className="nav__links">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    className={`nav__link${active === item.href.slice(1) ? ' is-active' : ''}`}
                    href={item.href}
                    aria-current={active === item.href.slice(1) ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav__actions">
            <Button href="#contact" size="sm" className="nav__cta">
              Start a Project
            </Button>
            <button
              className="nav__toggle"
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </>
  )
}
