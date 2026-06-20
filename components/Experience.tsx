'use client';

import Section from './Section';
import Reveal from './Reveal';
import { BriefcaseIcon } from './Icons';
import { useLanguage } from './LanguageProvider';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <Section
      id="experience"
      eyebrow={t.ui.sections.experience.eyebrow}
      title={t.ui.sections.experience.title}
    >
      <div className="relative">
        {/* Timeline rail */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent md:left-5" />

        <div className="space-y-8">
          {t.experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 80} as="article">
              <div className="relative pl-12 md:pl-16">
                {/* Node */}
                <span className="absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-accent-soft md:h-10 md:w-10">
                  <BriefcaseIcon className="h-4 w-4 md:h-5 md:w-5" />
                </span>

                <div className="card-base p-6 hover:border-accent/40">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-xl font-bold text-ink">{exp.role}</h3>
                    <span
                      className={`chip ${
                        exp.current
                          ? 'chip-ok'
                          : ''
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 font-medium text-accent-soft">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {exp.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-body"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
