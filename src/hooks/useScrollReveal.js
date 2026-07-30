import { useEffect, useRef } from 'react';

/**
 * Adds an "in-view" class to the returned ref's element the first time
 * it scrolls into the viewport, then stops observing.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <div className="reveal" ref={ref}>...</div>
 *
 * Pair with CSS like:
 *   .reveal { opacity: 0; transform: translateY(18px); transition: opacity .7s, transform .7s; }
 *   .reveal.reveal-visible { opacity: 1; transform: none; }
 */
export default function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('reveal-visible');
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}