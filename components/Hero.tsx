'use client';

import { useEffect, useRef } from 'react';
import { shared } from '@/lib/data';
import { asset } from '@/lib/asset';
import { useLanguage } from './LanguageProvider';
import TypeWriter from './TypeWriter';
import {
  ArrowDownIcon,
  DownloadIcon,
  GithubIcon,
  FacebookIcon,
  MailIcon,
  MapPinIcon,
} from './Icons';

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const orbARef = useRef<HTMLDivElement | null>(null);
  const orbBRef = useRef<HTMLDivElement | null>(null);

  // Subtle mouse parallax (disabled for reduced motion / touch).
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (cardRef.current) {
          cardRef.current.style.transform = `translate3d(${x * 18}px, ${y * 18}px, 0)`;
        }
        if (orbARef.current) {
          orbARef.current.style.transform = `translate3d(${x * 40}px, ${y * 40}px, 0)`;
        }
        if (orbBRef.current) {
          orbBRef.current.style.transform = `translate3d(${x * -32}px, ${y * -32}px, 0)`;
        }
      });
    };

    section.addEventListener('mousemove', onMove);
    return () => {
      section.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Animated aurora orbs */}
      <div
        ref={orbARef}
        className="pointer-events-none absolute -left-20 top-32 h-72 w-72 animate-drift rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        ref={orbBRef}
        className="pointer-events-none absolute -right-10 bottom-20 h-72 w-72 animate-drift-2 rounded-full bg-cyan/10 blur-[120px]"
      />
      <div className="pointer-events-none absolute left-1/2 top-10 h-60 w-60 -translate-x-1/2 animate-drift rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="container-page relative grid items-center gap-12 py-20 lg:grid-cols-[1.4fr_1fr]">
        <div className="animate-fade-up">
          <p className="section-eyebrow font-mono">{t.ui.helloEyebrow}</p>
          <h1 className="text-4xl font-extrabold leading-tight text-ink sm:text-6xl">
            {shared.name}
          </h1>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            <span className="gradient-text animate-gradient-pan">
              {t.profile.title}
            </span>
          </h2>

          {/* Typewriter specialties */}
          <p className="mt-3 font-mono text-sm text-muted sm:text-base">
            {t.ui.specialtiesPrefix}{' '}
            <TypeWriter
              words={shared.specialties}
              className="font-semibold text-cyan"
            />
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {t.profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="btn-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-cyan px-6 py-3 font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              <MailIcon className="h-5 w-5" />
              {t.ui.contactMe}
            </a>
            <a
              href={asset(shared.resume)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-accent/50"
            >
              <DownloadIcon className="h-5 w-5" />
              {t.ui.downloadCV}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <SocialLink href={shared.github} label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={shared.facebook} label="Facebook">
              <FacebookIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={`mailto:${shared.email}`} label="Email">
              <MailIcon className="h-5 w-5" />
            </SocialLink>
            <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-subtle">
              <MapPinIcon className="h-4 w-4" />
              {t.profile.location}
            </span>
          </div>
        </div>

        {/* Code-card visual */}
        <div className="animate-fade-up [animation-delay:150ms]">
          <div
            ref={cardRef}
            className="card-base mx-auto max-w-sm animate-float p-1 shadow-2xl shadow-accent/5 transition-transform duration-200 ease-out"
          >
            <div className="rounded-[14px] bg-[#0b0b14] p-5 font-mono text-sm text-slate-300">
              <div className="mb-4 flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed">
                <span className="text-violet-400">const</span>{' '}
                <span className="text-[#22d3ee]">dev</span>{' '}
                <span className="text-slate-500">=</span>{' '}
                <span className="text-slate-500">{'{'}</span>
                {'\n  '}
                <span className="text-[#818cf8]">name</span>
                <span className="text-slate-500">:</span>{' '}
                <span className="text-emerald-300">&apos;Viet Anh&apos;</span>
                <span className="text-slate-500">,</span>
                {'\n  '}
                <span className="text-[#818cf8]">role</span>
                <span className="text-slate-500">:</span>{' '}
                <span className="text-emerald-300">&apos;Frontend&apos;</span>
                <span className="text-slate-500">,</span>
                {'\n  '}
                <span className="text-[#818cf8]">stack</span>
                <span className="text-slate-500">:</span>{' '}
                <span className="text-slate-500">[</span>
                <span className="text-emerald-300">&apos;React&apos;</span>
                <span className="text-slate-500">,</span>{' '}
                <span className="text-emerald-300">&apos;Next.js&apos;</span>
                <span className="text-slate-500">,</span>{' '}
                <span className="text-emerald-300">&apos;TS&apos;</span>
                <span className="text-slate-500">],</span>
                {'\n  '}
                <span className="text-[#818cf8]">focus</span>
                <span className="text-slate-500">:</span>{' '}
                <span className="text-emerald-300">&apos;performance&apos;</span>
                <span className="text-slate-500">,</span>
                {'\n'}
                <span className="text-slate-500">{'};'}</span>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label={t.ui.scrollAria}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-subtle transition-colors hover:text-accent-soft"
      >
        <ArrowDownIcon className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-ink"
    >
      {children}
    </a>
  );
}
