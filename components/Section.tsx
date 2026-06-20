import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-24 ${className}`}>
      <div className="container-page">
        <Reveal>
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          <div className="section-underline mt-4" />
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
