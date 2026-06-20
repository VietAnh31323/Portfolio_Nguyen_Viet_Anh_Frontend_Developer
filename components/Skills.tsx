'use client';

import Section from './Section';
import Reveal from './Reveal';
import { SparkleIcon } from './Icons';
import { useLanguage } from './LanguageProvider';

export default function Skills() {
  const { t } = useLanguage();

  return (
    <Section
      id="skills"
      eyebrow={t.ui.sections.skills.eyebrow}
      title={t.ui.sections.skills.title}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 70}>
            <div className="card-base h-full p-6 hover:border-accent/40">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/10 text-accent-soft">
                  <SparkleIcon className="h-4 w-4" />
                </span>
                <h3 className="font-semibold text-ink">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="chip transition-colors hover:border-accent/50 hover:text-ink"
                  >
                    {item}
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
