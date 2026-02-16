"use client"

import Link from "next/link"
import { motion } from "motion/react"
import FloatingLines from "@/components/floating-lines"

type SubpageHeroProps = {
  tag: string
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function SubpageHero({
  tag,
  title,
  description,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: SubpageHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FloatingLines
          linesGradient={["#7C444F", "#9F5255", "#E16A54", "#F39E60"]}
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[4, 6, 3]}
          lineDistance={[5, 4, 6]}
          animationSpeed={0.6}
          interactive={true}
          bendRadius={5.0}
          bendStrength={-0.5}
          parallax={true}
          parallaxStrength={0.15}
          mixBlendMode="normal"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block rounded-full border border-[#F39E60]/40 bg-[#F39E60]/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
              {tag}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 text-balance font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-[#E16A54] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#E16A54]/90 transition-colors"
            >
              {ctaLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                {secondaryLabel}
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
