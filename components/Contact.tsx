import { profile } from '@/lib/data';
import Reveal from './Reveal';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  FacebookIcon,
} from './Icons';

export default function Contact() {
  const contacts = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: MailIcon,
    },
    {
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`,
      Icon: PhoneIcon,
    },
    {
      label: 'Facebook',
      value: 'anh.v',
      href: profile.facebook,
      Icon: FacebookIcon,
    },
    {
      label: 'GitHub',
      value: 'VietAnh31323',
      href: profile.github,
      Icon: GithubIcon,
    },
    {
      label: 'Location',
      value: profile.location,
      href: undefined,
      Icon: MapPinIcon,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="container-page">
        <Reveal>
          <div className="card-base relative overflow-hidden p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-cyan/10 blur-[100px]" />

            <div className="relative">
              <p className="section-eyebrow">06 — Contact</p>
              <h2 className="section-title">Let&apos;s build something</h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-400">
                I&apos;m open to frontend and full-stack opportunities, freelance
                work, and collaborations. Reach out — I usually reply quickly.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {contacts.map(({ label, value, href, Icon }) => {
                  const inner = (
                    <div className="flex items-center gap-4 rounded-xl border border-border bg-surface/60 p-4 transition-all hover:border-accent/50 hover:bg-surface">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-soft">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                          {label}
                        </p>
                        <p className="truncate font-medium text-white">
                          {value}
                        </p>
                      </div>
                    </div>
                  );

                  return href ? (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={label}>{inner}</div>
                  );
                })}
              </div>

              <div className="mt-10">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-cyan px-7 py-3.5 font-semibold text-bg transition-transform hover:scale-[1.03]"
                >
                  <MailIcon className="h-5 w-5" />
                  Say hello
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
