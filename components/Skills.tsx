import { skillGroups } from '@/lib/data';
import Section from './Section';
import Reveal from './Reveal';
import { SparkleIcon } from './Icons';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="04 — Toolbox" title="Skills & technologies">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 70}>
            <div className="card-base h-full p-6 hover:border-accent/40">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/10 text-accent-soft">
                  <SparkleIcon className="h-4 w-4" />
                </span>
                <h3 className="font-semibold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="chip transition-colors hover:border-accent/50 hover:text-white"
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
