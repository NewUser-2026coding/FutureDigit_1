"use client"

import { motion } from "motion/react"

export default function About() {
  return (
    <section className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl -z-10 blur-2xl" />
            
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/mode-consulting.webp"
                alt="Équipe Future Digit en réunion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>

            {/* Floating card with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-gradient-to-br from-card to-card/80 backdrop-blur-xl p-5 shadow-2xl border border-primary/20"
            >
              <p className="font-serif text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">45</p>
              <p className="text-sm text-muted-foreground">Consultants</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Panorama
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Future Digit en quelques chiffres
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Créée en 2020, Future Digit compte 2 Business Units (IT et Ingénierie), 45 consultants et une couverture nationale. Notre évolution reflète une croissance solide : d&apos;un chiffre d&apos;affaires de 116 k€ en 2020 à 4 M€ en 2024, et d&apos;une personne à 45 en 2025.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { value: "116 k€ → 4 M€", label: "Chiffre d'affaires (2020-2024)" },
                { value: "1 → 45", label: "Effectifs (2020-2025)" },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  className="group relative rounded-xl bg-gradient-to-br from-card to-card/50 p-5 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="relative font-serif text-2xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="relative mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
