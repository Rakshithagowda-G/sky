'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useAnimationControls } from 'framer-motion';

export default function CustomCursor() {
  // Motion values for cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring animations for smooth following
  const springConfig = { damping: 25, stiffness: 300 };
  const dotX = useSpring(cursorX, springConfig);
  const dotY = useSpring(cursorY, springConfig);
  const ringX = useSpring(cursorX, { damping: 20, stiffness: 150 });
  const ringY = useSpring(cursorY, { damping: 20, stiffness: 150 });
  
  // Animation controls for ring scale
  const ringControls = useAnimationControls();
  
  useEffect(() => {
    // Don't show custom cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }
    
    // Interactive element selectors
    const interactiveSelectors = [
      'a',
      'button',
      'input',
      'textarea',
      'select',
      '[role="button"]',
      '[tabindex]:not([tabindex="-1"])',
      '.cursor-pointer',
    ].join(', ');

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Check if element under cursor is interactive
      const element = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
      if (!element) return;
      
      // Check if target or any parent matches interactive selectors
      let current: HTMLElement | null = element;
      let isInteractive = false;
      
      while (current && current !== document.body) {
        if (current.matches(interactiveSelectors)) {
          isInteractive = true;
          break;
        }
        current = current.parentElement;
      }
      
      if (isInteractive) {
        ringControls.start({ scale: 1.5 });
      } else {
        ringControls.start({ scale: 1 });
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = '';
    };
  }, [cursorX, cursorY, ringControls]);

  // Don't render on server or touch devices
  if (typeof window === 'undefined') {
    return null;
  }
  
  // Don't show on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    return null;
  }

  return (
    <>
      {/* Small filled dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Larger outlined ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={ringControls}
        initial={{ scale: 1 }}
      />
    </>
  );
}

