import { profile } from '@/lib/data';
import { GithubIcon, FacebookIcon, MailIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {profile.name} — Built with{' '}
          <span className="text-accent-soft">Next.js</span>,{' '}
          <span className="text-accent-soft">TypeScript</span> &{' '}
          <span className="text-accent-soft">Tailwind CSS</span>.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition-colors hover:text-white"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-slate-500 transition-colors hover:text-white"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-slate-500 transition-colors hover:text-white"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
