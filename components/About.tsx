'use client';

import Section from './Section';
import Reveal from './Reveal';
import CountUp from './CountUp';
import { CodeIcon } from './Icons';
import { useLanguage } from './LanguageProvider';

export default function About() {
  const { t } = useLanguage();

  return (
    <Section
      id="about"
      eyebrow={t.ui.sections.about.eyebrow}
      title={t.ui.sections.about.title}
    >
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-slate-300">
            {t.profile.summary}
          </p>

          <div className="mt-8 card-base p-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-soft">
                <CodeIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-white">
                  {t.ui.languagesHeading}
                </h3>
                {t.languages.map((l) => (
                  <p key={l} className="mt-1 text-sm text-slate-400">
                    {l}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-4">
            {t.profile.highlights.map((h) => (
              <div
                key={h.label}
                className="card-base flex items-center gap-4 p-5 hover:border-accent/40"
              >
                <CountUp
                  value={h.value}
                  className="gradient-text min-w-[3.5rem] text-3xl font-extrabold tabular-nums"
                />
                <span className="text-sm leading-snug text-slate-400">
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
