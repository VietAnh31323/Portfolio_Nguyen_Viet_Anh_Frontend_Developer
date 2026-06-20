import { education } from '@/lib/data';
import Section from './Section';
import Reveal from './Reveal';
import { GraduationIcon, StarIcon } from './Icons';

export default function Education() {
  return (
    <Section id="education" eyebrow="05 — Background" title="Education & awards">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="card-base h-full p-6 hover:border-accent/40">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent-soft">
              <GraduationIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-white">
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
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-500/10 text-amber-300">
              <StarIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-white">Awards</h3>
            <p className="mt-1 text-slate-400">{education.award}</p>
            <div className="mt-4">
              <span className="chip border-amber-500/40 bg-amber-500/10 text-amber-300">
                Scholarship
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
