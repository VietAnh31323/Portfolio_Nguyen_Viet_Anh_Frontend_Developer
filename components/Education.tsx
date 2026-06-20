'use client';

import Section from './Section';
import Reveal from './Reveal';
import { GraduationIcon, StarIcon } from './Icons';
import { useLanguage } from './LanguageProvider';

export default function Education() {
  const { t } = useLanguage();
  const education = t.education;

  return (
    <Section
      id="education"
      eyebrow={t.ui.sections.education.eyebrow}
      title={t.ui.sections.education.title}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="card-base h-full p-6 hover:border-accent/40">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent-soft">
              <GraduationIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink">
              {education.school}
            </h3>
            <p className="mt-1 text-accent-soft">{education.degree}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="chip">{education.period}</span>
              <span className="chip border-accent/40 bg-accent/10 text-accent-soft">
                {education.gpa}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="card-base h-full p-6 hover:border-accent/40">
            <span className="chip-gold grid h-11 w-11 place-items-center rounded-xl">
              <StarIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink">
              {t.ui.awardsHeading}
            </h3>
            <p className="mt-1 text-muted">{education.award}</p>
            <div className="mt-4">
              <span className="chip chip-gold">
                {t.ui.scholarshipChip}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
