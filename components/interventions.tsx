"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Briefcase, Users, ArrowRight } from "lucide-react"

const modes = [
  {
    icon: Users,
    title: "Régie",
    subtitle: "Extended Teams",
    tags: ["Talents", "Immersion", "Renfort d'équipes"],
    description:
      "Renforcer vos équipes pour réussir vos projets. Bénéficiez de l'expertise et du leadership d'un ou de plusieurs de nos talents, en immersion chez vous, pour renforcer vos équipes et vous accompagner dans votre développement.",
    href: "/modes/regie",
  },
  {
    icon: Briefcase,
    title: "Conseil",
    subtitle: "Prestations au forfait",
    tags: ["Forfait", "Équipe dédiée", "Itérations courtes"],
    description:
      "Concevoir vos solutions sur-mesure de l'idée au projet. Constituez une équipe pluridisciplinaire pour réaliser un projet complet. Nous maximisons la valeur des Projets / Produits par des blocs d'itérations courtes en équipes pluridisciplinaires.",
    href: "/modes/conseil",
  },
]

export default function Interventions() {
  return (
    <section id="intervention" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nos modes d&apos;intervention
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Régie et Conseil
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Renforcer vos équipes en régie ou concevoir vos solutions au forfait : deux approches pour accompagner vos projets.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {modes.map((mode, index) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 lg:p-10 hover:border-primary/30 hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-48 h-48 rounded-bl-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />

              <div className="relative">
                <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <mode.icon className="size-7" />
                </div>

                <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">
                  {mode.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {mode.subtitle}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {mode.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-muted-foreground leading-relaxed">
                  {mode.description}
                </p>

                <Link href={mode.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                  En savoir plus
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
