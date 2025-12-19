'use client';

import { useEffect } from 'react';
import { initLenis, destroyLenis } from '@/lib/lenis';

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = initLenis();

    if (!lenis) {
      return;
    }

    // RequestAnimationFrame loop
    function raf(time: number) {
      if (lenis) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      destroyLenis();
    };
  }, []);

  return <>{children}</>;
}

