"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  ctaLabel?: string
  ctaHref?: string
}

export function Hero({
  eyebrow = "Innovate Without Limits",
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-40 px-6 text-center md:px-8 
      min-h-[calc(100vh-40px)] overflow-hidden 
      bg-gradient-to-b from-background via-background/50 to-muted/88
      dark:bg-gradient-to-b dark:from-background dark:via-background/30 dark:to-muted/78 
      rounded-b-xl"
    >
      {/* Grid BG */}
      <div
        className="absolute -z-10 inset-0 opacity-60 dark:opacity-40 h-[600px] w-full 
        bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] 
        dark:bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      {/* Radial Accent */}
      <div
        className="absolute left-1/2 bottom-0
        h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%] 
        -translate-x-1/2 translate-y-[50%] rounded-[100%] border-primary/30 bg-background 
        bg-[radial-gradient(closest-side,hsl(var(--background))_82%,hsl(var(--primary))_15%)] 
        dark:bg-[radial-gradient(closest-side,hsl(var(--background))_82%,hsl(var(--primary))_15%)] 
        animate-fade-up"
        style={{ opacity: 0, animationFillMode: 'forwards' }}
      />

      {/* Eyebrow */}
      {eyebrow && (
        <a href="#" className="group">
          <span
            className="text-sm text-muted-foreground mx-auto px-5 py-2 
            bg-gradient-to-tr from-muted/5 via-muted/5 to-transparent  
            border-[2px] border-border/20 
            rounded-3xl w-fit tracking-tight uppercase flex items-center justify-center"
          >
            {eyebrow}
            <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </a>
      )}

      {/* Title */}
      <h1
        className="animate-fade-in -translate-y-4 text-balance 
        bg-gradient-to-br from-foreground from-30% to-foreground/40 
        bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter 
        text-transparent opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
        style={{ animationFillMode: 'forwards' }}
      >
        {title}
      </h1>

      {/* Subtitle */}
      <p
        className="animate-fade-in mb-12 -translate-y-4 text-balance 
        text-lg tracking-tight text-muted-foreground 
        opacity-0 md:text-xl [animation-delay:0.2s]"
        style={{ animationFillMode: 'forwards' }}
      >
        {subtitle}
      </p>

      {/* CTA */}
      {ctaLabel && (
        <div className="flex justify-center animate-fade-in opacity-0 [animation-delay:0.4s]" style={{ animationFillMode: 'forwards' }}>
          <Button
            asChild
            className="mt-[-20px] w-fit md:w-52 z-20 tracking-tighter text-center text-lg"
          >
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        </div>
      )}

      {/* Bottom Fade */}
      <div
        className="animate-fade-up relative mt-32 opacity-0 [perspective:2000px] 
        after:absolute after:inset-0 after:z-50 
        after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)]"
        style={{ animationFillMode: 'forwards' }}
      />
    </section>
  )
}
