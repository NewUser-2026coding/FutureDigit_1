"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, Landmark, Cog } from "lucide-react"

const units = [
  {
    icon: Landmark,
    title: "Business Unit Banque - Finance",
    description:
      "Le Pôle Banque - Finance s'adresse à tous les acteurs du secteur : Banque de Financement et d'Investissement, Gestion d'actifs, Banque de Détail, Banque Directe, Banque Privée, Assurances. Notre offre couvre : Gestion des Infrastructures / Production / DevSecOps ; MOE (développement et suivi de projets applicatifs) ; MOA et expertise métier.",
    bullets: [
      "BNP PARIBAS · BPCE - NATIXIS · SOCIÉTÉ GÉNÉRALE",
      "SCOR · CRÉDIT AGRICOLE · BFORBANK · S-Money",
    ],
    image: "/bu-finance1.webp",
    href: "/business-units/banque-finance",
  },
  {
    icon: Cog,
    title: "Business Unit Ingénierie",
    description:
      "Le Pôle Ingénierie s'adresse aux clients opérateurs, EPC (Ingénierie globale) et fournisseurs de services et d'équipements : Énergie / Oil and Gas, Aéronautique. Notre offre couvre : Conception mécanique ; Conception Hardware & Software ; Supply chain / industrialisation 4.0.",
    bullets: [
      "TECHNIP · TOTAL · SAIPEM · SCHLUMBERGER",
      "FORSEE POWER · EDF · ENGIE · EGIS · FLYING WHALES",
    ],
    image: "/bu-ingenierie1.webp",
    href: "/business-units/ingenierie",
  },
]

export default function BusinessUnits() {
  return (
    <section id="business-units" className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nos Business Units
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Expertises spécialisées par secteur
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Banque-Finance et Ingénierie : deux pôles pour accompagner vos métiers.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {units.map((unit, index) => (
            <motion.div
              key={unit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative group">
                  {/* Decorative background glow */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={unit.image}
                      alt={unit.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-foreground/10 to-transparent" />
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-lg">
                  <unit.icon className="size-6" />
                </div>

                <h3 className="mt-5 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                  {unit.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {unit.description}
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {unit.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <Link href={unit.href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300">
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
