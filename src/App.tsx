import { useEffect, useState } from 'react'
import type { PricingTier } from './data/pricing'
import { About } from './components/About'
import { AnnouncementBar } from './components/AnnouncementBar'
import { CTA } from './components/CTA'
import { Contact } from './components/Contact'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Pricing } from './components/Pricing'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { TechStack } from './components/TechStack'
import { TechStrip } from './components/TechStrip'
import { WhyMe } from './components/WhyMe'

export default function App() {
  const [plan, setPlan] = useState<PricingTier | null>(null)

  useEffect(() => {
    const revealAll = () =>
      document.querySelectorAll('[data-reveal], [data-reveal-group]').forEach((node) => node.classList.add('is-revealed'))

    if (!('IntersectionObserver' in window)) {
      revealAll()
      return
    }

    const seen = new WeakSet<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -60px 0px' },
    )

    const collect = () => {
      document.querySelectorAll('[data-reveal], [data-reveal-group]').forEach((node) => {
        if (seen.has(node)) return
        seen.add(node)
        observer.observe(node)
      })
    }

    collect()

    const mutation = new MutationObserver(collect)
    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [])

  const handleSelectPlan = (tier: PricingTier) => {
    setPlan({ ...tier })
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById('contact')?.scrollIntoView({
      behavior: reduced ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <AnnouncementBar />
      <Navbar />
      <main id="main">
        <Hero />
        <TechStrip />
        <Projects />
        <Services />
        <Pricing onSelect={handleSelectPlan} />
        <WhyMe />
        <Process />
        <About />
        <TechStack />
        <FAQ />
        <CTA />
        <Contact plan={plan} />
      </main>
      <Footer />
    </>
  )
}
