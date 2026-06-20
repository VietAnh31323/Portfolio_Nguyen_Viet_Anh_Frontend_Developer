'use client';

import Section from './Section';
import Reveal from './Reveal';
import { ArrowUpRightIcon, StarIcon } from './Icons';
import { useLanguage } from './LanguageProvider';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <Section
      id="projects"
      eyebrow={t.ui.sections.projects.eyebrow}
      title={t.ui.sections.projects.title}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {t.projects.map((project, i) => (
          <Reveal
            key={project.name}
            delay={i * 80}
            as="article"
            className={project.highlight ? 'md:col-span-2' : ''}
          >
            <div className="group card-base h-full p-6 hover:-translate-y-1 hover:border-accent/40">
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
                <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-slate-600 transition-colors group-hover:text-accent-soft" />
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
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
