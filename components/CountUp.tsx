'use client';

import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
  /** Raw value like "1.5+", "3.4/4" or "ERP". Leading number animates; the rest is kept as a suffix. */
  value: string;
  duration?: number;
  className?: string;
};

const MATCH = /^(\d+(?:\.\d+)?)(.*)$/s;

export default function CountUp({
  value,
  duration = 1300,
  className = '',
}: CountUpProps) {
  const match = value.match(MATCH);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0;

  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(match ? '0' : value);

  useEffect(() => {
    // No leading number (e.g. "ERP") — render as-is.
    if (!match) {
      setDisplay(value);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finalText = target.toFixed(decimals) + suffix;

    if (reduced) {
      setDisplay(finalText);
      return;
    }

    let raf = 0;
    let start = 0;
    let done = false;

    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setDisplay((target * eased).toFixed(decimals) + suffix);
      if (p < 1) raf = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done) {
          done = true;
          raf = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, target, suffix, decimals, duration, match]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
