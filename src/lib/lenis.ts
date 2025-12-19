import Lenis from '@studio-freight/lenis';

let lenisInstance: Lenis | null = null;

export const getLenis = (): Lenis | null => {
  return lenisInstance;
};

export const initLenis = (): Lenis | null => {
  if (typeof window === 'undefined') {
    // Return null for SSR
    return null;
  }

  if (lenisInstance) {
    return lenisInstance;
  }

  lenisInstance = new Lenis({
    duration: 1.4, // Between 1.2-1.5 as requested
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
    smoothWheel: true,
    smoothTouch: true, // Enabled as requested
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  return lenisInstance;
};

export const destroyLenis = (): void => {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
};

