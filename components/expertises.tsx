"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Code2, Cloud, Database } from "lucide-react"

const expertises = [
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Frontend (Angular, React, Vue), Backend (API & microservices), développement embarqué (C/C++)",
    href: "/expertises/software-engineering",
  },
  {
    icon: Cloud,
    title: "Expertise Cloud",
    description: "Replatforming, landing zone, multi-cloud, foundations. GCP, Kubernetes, AWS, Docker, Azure, Terraform",
    href: "/expertises/cloud",
  },
  {
    icon: Database,
    title: "Expertise SAP",
    description: "S/4HANA, FI/CO, Supply Chain (MM/SD/PP), HR & SuccessFactors, Technical & Basis",
    href: "/expertises/sap",
  },
]

export default function Expertises() {
  return (
    <section id="expertises" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nos expertises
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Des compétences techniques et méthodologiques
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Frontend, Backend, Embedded, Cloud et SAP pour vos projets.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {expertises.map((expertise, index) => (
            <motion.div
              key={expertise.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <Link
                href={expertise.href}
                className="group relative block rounded-2xl border border-border bg-gradient-to-br from-card to-card/50 p-8 hover:border-primary/30 hover:shadow-2xl transition-all duration-400 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                
                <div className="relative flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-400">
                  <expertise.icon className="size-6" />
                </div>

                <h3 className="relative mt-5 font-serif text-lg font-bold text-foreground">
                  {expertise.title}
                </h3>
                <p className="relative mt-2 text-muted-foreground leading-relaxed">
                  {expertise.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
