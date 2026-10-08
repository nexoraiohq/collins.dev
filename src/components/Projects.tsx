import { useEffect, useRef, useState, type RefObject } from 'react'
import { projects, type Project } from '../data/projects'
import { Button } from './ui/Button'
import { Section } from './ui/Section'
import { Check, CloseIcon } from './ui/icons'

function BrowserBar({ url }: { url: string }) {
  return (
    <div className="mock-browser__bar">
      <span className="mock-dot" />
      <span className="mock-dot" />
      <span className="mock-dot" />
      <span className="mock-browser__url">{url}</span>
    </div>
  )
}

function ProjectCard({
  project,
  flip,
  onView,
}: {
  project: Project
  flip: boolean
  onView: () => void
}) {
  const preview = project.preview === 'nexora' ? 'nexora' : 'barbershop'
  const url = preview === 'nexora' ? 'nexoraio.vercel.app' : 'states-barbershop.vercel.app'
  const dims = { w: 1440, h: 810 }

  return (
    <article className={`project${flip ? ' project--flip' : ''}`} data-reveal>
      <div className="project__body">
        <div className="project__meta">
          <span className="project__index">{project.index}</span>
          <span className="project__category">{project.category}</span>
        </div>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__desc">{project.description}</p>
        <div className="project__tags">
          {project.tags.map((tag) => (
            <span className="chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project__actions">
          <Button variant="outline" arrow onClick={onView}>
            View Project
          </Button>
        </div>
      </div>

      <div className="project__media">
        <BrowserBar url={url} />
        <img
          className="project__img"
          src={`images/project-${preview}.jpg`}
          width={dims.w}
          height={dims.h}
          alt={`${project.title} website preview`}
          loading="lazy"
          onLoad={(event) => event.currentTarget.classList.add('is-loaded')}
          onError={(event) => event.currentTarget.classList.add('is-loaded')}
        />
      </div>
    </article>
  )
}

function ComingSoonCard({ project }: { project: Project }) {
  return (
    <article className="project" data-reveal>
      <div className="project__body">
        <div className="project__meta">
          <span className="project__index">{project.index}</span>
          <span className="project__category">{project.category}</span>
        </div>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__desc">{project.description}</p>
        <div className="project__tags">
          {project.tags.map((tag) => (
            <span className="chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project__actions">
          <Button href="#contact" variant="outline" arrow>
            Start a Project
          </Button>
        </div>
      </div>

      <div className="project-soon">
        <span className="project-soon__plus" aria-hidden="true">
          +
        </span>
        <p className="project-soon__label">In development</p>
        <h4 className="project-soon__title">React &amp; TypeScript builds</h4>
        <p className="project-soon__text">
          New projects are being built now. Working together? This space could feature yours.
        </p>
        <div className="project-soon__tags">
          <span className="chip">React</span>
          <span className="chip">TypeScript</span>
          <span className="chip">Client work</span>
        </div>
      </div>
    </article>
  )
}

function ProjectDialog({
  project,
  dialogRef,
}: {
  project: Project | null
  dialogRef: RefObject<HTMLDialogElement | null>
}) {
  return (
    <dialog className="project-dialog" ref={dialogRef} aria-labelledby="project-dialog-title">
      <div className="project-dialog__inner">
        <button
          className="project-dialog__close"
          type="button"
          aria-label="Close project details"
          onClick={() => dialogRef.current?.close()}
        >
          <CloseIcon size={16} />
        </button>

        {project && (
          <div className="project-dialog__grid">
            <div className="project-dialog__main">
              <p className="eyebrow">{project.category}</p>
              <h3 className="project-dialog__title" id="project-dialog-title">
                {project.title}
              </h3>
              <p className="project-dialog__overview">{project.overview}</p>
            </div>

            <div className="project-dialog__side">
              {project.features.length > 0 && (
                <>
                  <p className="label project-dialog__label">What was built</p>
                  <ul className="project-dialog__list">
                    {project.features.map((feature) => (
                      <li key={feature}>
                        <Check />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <p className="label project-dialog__label">Stack</p>
              <div className="project-dialog__tags">
                {project.stack.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-dialog__foot">
                {project.href && (
                  <Button href={project.href} arrow>
                    Visit Live Site
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </dialog>
  )
}

export function Projects() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [current, setCurrent] = useState<Project | null>(null)

  const openProject = (project: Project) => {
    setCurrent(project)
    window.requestAnimationFrame(() => dialogRef.current?.showModal())
  }

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const onBackdropClick = (event: MouseEvent) => {
      if (event.target === dialog) dialog.close()
    }

    dialog.addEventListener('click', onBackdropClick)
    return () => dialog.removeEventListener('click', onBackdropClick)
  }, [])

  return (
    <>
      <Section
        id="work"
        eyebrow="Portfolio"
        index="01"
        title="Selected Work"
        sub="A selection of websites, interfaces and digital products I've designed and developed."
      >
        <div className="projects">
          {projects.map((project, index) =>
            project.preview === 'soon' ? (
              <ComingSoonCard key={project.id} project={project} />
            ) : (
              <ProjectCard
                key={project.id}
                project={project}
                flip={index % 2 === 1}
                onView={() => openProject(project)}
              />
            ),
          )}
        </div>
      </Section>

      <ProjectDialog project={current} dialogRef={dialogRef} />
    </>
  )
}
