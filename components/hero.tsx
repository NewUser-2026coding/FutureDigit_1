"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "motion/react"
import FloatingLines from "@/components/floating-lines"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-dvh flex items-center overflow-hidden">
      {/* Animated floating lines background */}
      <div className="absolute inset-0 z-0">
        <FloatingLines
          linesGradient={["#7C444F", "#9F5255", "#E16A54", "#F39E60"]}
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[6, 8, 5]}
          lineDistance={[5, 4, 6]}
          animationSpeed={0.8}
          interactive={true}
          bendRadius={5.0}
          bendStrength={-0.5}
          parallax={true}
          parallaxStrength={0.15}
          mixBlendMode="normal"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block rounded-full border border-[#F39E60]/40 bg-[#F39E60]/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
              Conseil & Régie IT / Ingénierie
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 text-balance font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Votre partenaire pour la{" "}
            <span className="text-[#F39E60]">transformation digitale</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80"
          >
            Future Digit, créée en 2020, est une société de conseil et régie avec 2 Business Units (IT et Ingénierie). Nous accompagnons les entreprises avec 45 consultants et une couverture nationale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="#expertises"
              className="inline-flex items-center gap-2 rounded-full bg-[#E16A54] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#E16A54]/90 transition-colors"
            >
              Découvrez Future Digit
              <ChevronRight className="size-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Demander un devis
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-md"
          >
            {[
              { value: "45", label: "Consultants" },
              { value: "4 M€", label: "Chiffre d'affaires 2024" },
              { value: "2020", label: "Création" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-bold text-[#F39E60] lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
