'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

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
  // Parse once per `value` — a fresh match() on every render would change the
  // effect's dependency identity and restart the animation forever.
  const { target, suffix, decimals, isNumeric } = useMemo(() => {
    const m = value.match(MATCH);
    if (!m) return { target: 0, suffix: '', decimals: 0, isNumeric: false };
    const dec = m[1].includes('.') ? m[1].split('.')[1].length : 0;
    return { target: parseFloat(m[1]), suffix: m[2], decimals: dec, isNumeric: true };
  }, [value]);

  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(() =>
    isNumeric ? (0).toFixed(decimals) + suffix : value
  );

  useEffect(() => {
    if (!isNumeric) {
      setDisplay(value);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const finalText = target.toFixed(decimals) + suffix;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(finalText);
      return;
    }

    let raf = 0;
    let start = 0;
    let started = false;

    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setDisplay((target * eased).toFixed(decimals) + suffix);
      if (p < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setDisplay(finalText);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
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
  }, [value, target, suffix, decimals, duration, isNumeric]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
