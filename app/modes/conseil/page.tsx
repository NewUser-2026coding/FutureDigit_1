"use client"

import Navbar from "@/components/navbar"
import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import CtaBanner from "@/components/cta-banner"
import { motion } from "motion/react"
import { Lightbulb, Users, IterationCcw, Package, ArrowRight, CheckCircle2 } from "lucide-react"

const approach = [
  {
    icon: Lightbulb,
    title: "Cadrage et Conception",
    description: "De l'idee au projet structure, nous definissons ensemble vos besoins et concevons la solution adaptee.",
  },
  {
    icon: Users,
    title: "Equipe pluridisciplinaire",
    description: "Constituez une equipe dediee avec les competences necessaires pour mener a bien votre projet.",
  },
  {
    icon: IterationCcw,
    title: "Iterations courtes",
    description: "Nous maximisons la valeur par des cycles de developpement agiles et des livraisons incrementales.",
  },
  {
    icon: Package,
    title: "Livraison au forfait",
    description: "Engagement sur les resultats avec un budget maitrise et des delais definis.",
  },
]

const process = [
  {
    step: 1,
    title: "Analyse des Besoins",
    description: "Etude approfondie de vos objectifs metier et contraintes techniques pour definir le perimetre du projet.",
  },
  {
    step: 2,
    title: "Conception de la Solution",
    description: "Architecture et design de la solution sur mesure repondant a vos enjeux specifiques.",
  },
  {
    step: 3,
    title: "Realisation iterative",
    description: "Developpement en sprints avec demos regulieres pour valider chaque increment fonctionnel.",
  },
  {
    step: 4,
    title: "Livraison et Accompagnement",
    description: "Mise en production, transfert de competences et support pour garantir le succes.",
  },
]

const projectTypes = [
  {
    title: "Applications metier",
    description: "Developpement d'applications sur mesure pour digitaliser vos processus et ameliorer votre efficacite operationnelle.",
  },
  {
    title: "Transformation digitale",
    description: "Accompagnement dans la modernisation de votre SI et l'adoption de nouvelles technologies.",
  },
  {
    title: "Produits numeriques",
    description: "Conception et realisation de produits digitaux innovants, de l'idee au lancement sur le marche.",
  },
  {
    title: "Integration de systemes",
    description: "Interconnexion de vos applications et systemes pour fluidifier vos echanges de donnees.",
  },
]

const forfaitAdvantages = [
  "Garantie de conformite aux specifications",
  "Planning de livraison garanti",
  "Prix fixe sans depassement",
  "Perimetre fonctionnel defini et valide",
]

const whyForfait = [
  "Budget maitrise et previsible",
  "Delais de livraison garantis",
  "Equipe dediee a votre projet",
  "Methodologie agile eprouvee",
  "Transparence totale sur l'avancement",
  "Accompagnement de bout en bout",
]

export default function ConseilPage() {
  return (
    <div className="relative min-h-dvh w-full bg-background">
      <Navbar />

      <SubpageHero
        tag="Mode d'Intervention"
        title="Conseil"
        description="Concevoir vos solutions sur mesure de l'idee au projet. Constituez une equipe pluridisciplinaire dediee pour realiser un projet complet. Nous maximisons la valeur de vos projets et produits par des blocs d'iterations courtes en equipes pluridisciplinaires."
        ctaLabel="Discutons de votre projet"
        ctaHref="/#contact"
      />

      {/* Approach */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Notre Approche Conseil
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Une methodologie eprouvee
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Pour transformer vos idees en solutions performantes
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-400"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-400">
                  <item.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Notre Processus
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              De la conception a la livraison
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Un accompagnement structure pour garantir le succes de votre projet
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative"
              >
                <div className="font-serif text-6xl font-bold text-primary/15">{item.step}</div>
                <h3 className="mt-2 font-serif text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Types de Projets
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Notre expertise couvre un large spectre
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {projectTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-400"
              >
                <h3 className="font-serif text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Forfait Section */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Prestations au Forfait
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Un engagement ferme sur les livrables
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Avec notre mode forfait, vous beneficiez d{"'"}un engagement ferme sur les livrables, les delais et le budget. Nous partageons les risques et nous engageons sur les resultats.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {forfaitAdvantages.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="size-5 shrink-0 text-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="/mode-consulting.jpg"
                  alt="Equipe conseil en reunion de projet"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Forfait */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Pourquoi Choisir le Forfait?
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Le mode forfait vous offre visibilite et maitrise de votre investissement tout en beneficiant de notre expertise et de notre engagement qualite.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyForfait.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4"
              >
                <CheckCircle2 className="size-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Pret a lancer votre projet ?"
        description="Contactez-nous pour une etude gratuite de votre besoin et decouvrez comment notre approche conseil peut concretiser vos ambitions numeriques."
        ctaLabel="Contactez-nous"
        ctaHref="/#contact"
      />

      <Footer />
    </div>
  )
}
