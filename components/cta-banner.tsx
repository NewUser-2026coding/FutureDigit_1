"use client"

import Link from "next/link"
import { motion } from "motion/react"

type CtaBannerProps = {
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
}

export default function CtaBanner({ title, description, ctaLabel, ctaHref }: CtaBannerProps) {
  return (
    <section className="py-24 lg:py-32 bg-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
            {title}
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">
            {description}
          </p>
          <Link
            href={ctaHref}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {ctaLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
