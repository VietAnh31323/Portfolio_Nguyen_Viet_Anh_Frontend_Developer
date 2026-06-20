'use client';

import Section from './Section';
import Reveal from './Reveal';
import { ArrowUpRightIcon, StarIcon, FigmaLogo } from './Icons';
import { useLanguage } from './LanguageProvider';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <Section
      id="projects"
      eyebrow={t.ui.sections.projects.eyebrow}
      title={t.ui.sections.projects.title}
    >
      {/* Development / web projects */}
      <div className="grid gap-6 md:grid-cols-2">
        {t.projects.map((project, i) => (
          <Reveal
            key={project.name}
            delay={i * 70}
            as="article"
            className={project.highlight ? 'md:col-span-2' : ''}
          >
            <div className="group card-base flex h-full flex-col p-6 hover:-translate-y-1 hover:border-accent/40">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {project.highlight && (
                    <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent-soft">
                      <StarIcon className="h-3.5 w-3.5" />
                      {t.ui.flagship}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-slate-500">{project.org}</p>
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.ui.liveSite}: ${project.name}`}
                    className="text-slate-600 transition-colors group-hover:text-accent-soft"
                  >
                    <ArrowUpRightIcon className="h-5 w-5 shrink-0" />
                  </a>
                )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent-soft transition-colors hover:text-cyan"
                >
                  {t.ui.liveSite}
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Figma / design work */}
      <Reveal className="mt-14">
        <div className="flex items-center gap-3">
          <FigmaLogo className="h-6 w-auto" />
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            {t.ui.designHeading}
          </h3>
        </div>
        <div className="mt-3 h-px w-full bg-gradient-to-r from-border to-transparent" />
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {t.designs.map((design, i) => (
          <Reveal key={design.name} delay={i * 70} as="article">
            <a
              href={design.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-base flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-surface">
                    <FigmaLogo className="h-5 w-auto" />
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {design.name}
                    </h4>
                    <p className="mt-0.5 text-sm text-slate-500">
                      {design.context}
                    </p>
                  </div>
                </div>
                <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-slate-600 transition-colors group-hover:text-accent-soft" />
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {design.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {design.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              <span className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent-soft transition-colors group-hover:text-cyan">
                {t.ui.openFigma}
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
