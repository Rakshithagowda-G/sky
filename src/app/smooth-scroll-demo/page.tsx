'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components';

export default function SmoothScrollDemo() {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to vertical movement
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  
  // Transform scroll progress to opacity
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  
  // Transform scroll progress to scale
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.8]);

  return (
    <div className="relative w-full">
      {/* Example section with 200vh height */}
      <section className="relative h-[200vh] w-full overflow-hidden">
        {/* Parallax title that moves vertically as user scrolls */}
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <Container>
            <motion.div
              style={{ y, opacity, scale }}
              className="text-center"
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Smooth Scrolling
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Scroll to see the parallax effect
              </motion.p>
            </motion.div>
          </Container>
        </div>

        {/* Additional parallax elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full blur-xl opacity-50"
          />
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], ['0%', '-100%']),
            }}
            className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500 rounded-full blur-xl opacity-50"
          />
        </div>
      </section>

      {/* Additional content section to demonstrate continuous scrolling */}
      <section className="min-h-screen w-full bg-background py-20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Framer Motion Integration
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                This page demonstrates the seamless integration between Lenis smooth scrolling
                and Framer Motion scroll animations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-lg border border-border bg-card"
            >
              <h3 className="text-2xl font-semibold mb-3">useScroll() Hook</h3>
              <p className="text-muted-foreground">
                The useScroll() hook tracks scroll progress and provides scrollYProgress
                that we can use with useTransform() to create dynamic animations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-lg border border-border bg-card"
            >
              <h3 className="text-2xl font-semibold mb-3">useTransform() Hook</h3>
              <p className="text-muted-foreground">
                useTransform() maps scroll progress to any value, enabling smooth parallax
                effects, opacity changes, and scale transformations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 rounded-lg border border-border bg-card"
            >
              <h3 className="text-2xl font-semibold mb-3">Parallax motion.div</h3>
              <p className="text-muted-foreground">
                The title above moves vertically as you scroll, creating a beautiful parallax
                effect that works seamlessly with Lenis smooth scrolling.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}

