'use client';

import { useEffect, useState } from 'react';

type TypeWriterProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function TypeWriter({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1400,
  className = '',
}: TypeWriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (reduced || words.length === 0) return;

    const current = words[index % words.length];
    let delay = deleting ? deletingSpeed : typingSpeed;

    if (!deleting && text === current) {
      delay = pause;
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
        return;
      }
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause, reduced]);

  // With reduced motion, just show the first word statically.
  if (reduced) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-cyan align-middle" style={{ height: '1em' }} />
    </span>
  );
}
