import { site } from '../data/site'
import { ArrowRight } from './ui/icons'

export function AnnouncementBar() {
  return (
    <div className="announce" id="top">
      <div className="container announce__inner">
        <p className="announce__text">
          <span className="announce__dot" />
          <span className="announce__full">{site.announcement.full}</span>
          <span className="announce__short">{site.announcement.short}</span>
        </p>
        <a className="announce__cta" href={site.announcement.href}>
          {site.announcement.cta}
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}
