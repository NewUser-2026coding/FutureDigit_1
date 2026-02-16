"use client"

import Navbar from "@/components/navbar"
import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import CtaBanner from "@/components/cta-banner"
import { motion } from "motion/react"
import { UserPlus, Award, Heart, Maximize2, Code2, FolderKanban, Server, BarChart3, CheckCircle2, Handshake } from "lucide-react"

const offer = [
  {
    icon: UserPlus,
    title: "Renfort d'equipe",
    description: "Integrez un ou plusieurs de nos experts au sein de vos equipes existantes.",
  },
  {
    icon: Award,
    title: "Expertise garantie",
    description: "Des profils qualifies et evalues pour repondre a vos exigences techniques.",
  },
  {
    icon: Heart,
    title: "Immersion complete",
    description: "Nos consultants s'integrent a votre culture et vos methodes de travail.",
  },
  {
    icon: Maximize2,
    title: "Flexibilite maximale",
    description: "Adaptez vos ressources en fonction de l'evolution de vos projets.",
  },
]

const profiles = [
  {
    icon: Code2,
    title: "Developpeurs",
    items: ["DevOps", "Mobile", "Backend", "Frontend", "Fullstack"],
  },
  {
    icon: FolderKanban,
    title: "Chefs de Projet",
    items: ["Delivery Manager", "Project Manager", "Product Owner", "Scrum Master"],
  },
  {
    icon: Server,
    title: "Architectes",
    items: ["Securite", "Data", "Cloud", "Technique", "Solution"],
  },
  {
    icon: BarChart3,
    title: "Experts Fonctionnels",
    items: ["Data Analyst", "MOA", "Consultant SAP", "Business Analyst"],
  },
]

const engagements = [
  {
    title: "Acces aux talents",
    description: "Un vivier de plus de 500 consultants qualifies dans tous les domaines IT.",
  },
  {
    title: "Reactivite",
    description: "Proposition de profils sous 48 h et demarrage possible sous 2 semaines.",
  },
  {
    title: "Qualite",
    description: "Des consultants formes et certifies, evalues sur leurs competences techniques et soft skills.",
  },
  {
    title: "Engagement",
    description: "Un suivi regulier pour garantir la satisfaction client et l'epanouissement du consultant.",
  },
]

const partnershipPoints = [
  "Remplacement garanti en cas d'indisponibilite",
  "Formations continues pour maintenir l'excellence technique",
  "Points de suivi reguliers avec le client et le consultant",
  "Entretiens techniques approfondis avant chaque mission",
]

const whyRegie = [
  "Selection rigoureuse des profils",
  "Integration rapide en quelques jours",
  "Suivi de mission personnalise",
  "Flexibilite contractuelle",
  "Continuite de service assuree",
  "Accompagnement RH dedie",
]

export default function RegiePage() {
  return (
    <div className="relative min-h-dvh w-full bg-background">
      <Navbar />

      <SubpageHero
        tag="Extended Teams"
        title="Regie"
        description="Renforcer vos equipes pour reussir vos projets. Beneficiez de l'expertise et du leadership d'un ou de plusieurs de nos talents, en immersion au sein de votre organisation, pour renforcer vos equipes et vous accompagner dans votre developpement."
        ctaLabel="Renforcez votre equipe"
        ctaHref="/#contact"
      />

      {/* Offer */}
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
              Notre Offre Regie
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Des experts qualifies integres a vos equipes
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Pour accelerer vos projets
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offer.map((item, index) => (
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

      {/* Profiles */}
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
              Nos Profils
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Un large eventail de competences
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Pour repondre a tous vos besoins IT
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <profile.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-foreground">{profile.title}</h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {profile.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="block size-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
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
              Nos Engagements
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Le succes de votre mission, notre priorite
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {engagements.map((item, index) => (
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

          {/* Partnership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
          >
            <div>
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Handshake className="size-6" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-bold text-foreground">Un Partenariat Gagnant</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Notre approche regie va au-dela de la simple mise a disposition de ressources. Nous construisons un veritable partenariat pour garantir la reussite de vos projets.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {partnershipPoints.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="size-5 shrink-0 text-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/mode-regie.jpg"
                alt="Equipe de consultants IT en immersion"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Regie */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Pourquoi choisir la regie ?
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              La regie vous offre flexibilite et acces immediat a des competences pointues pour repondre a vos besoins ponctuels ou recurrents.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyRegie.map((item, index) => (
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
        title="Besoin de renforcer vos equipes ?"
        description="Contactez-nous pour discuter de vos besoins et decouvrir comment nos experts peuvent contribuer au succes de vos projets."
        ctaLabel="Contactez-nous"
        ctaHref="/#contact"
      />

      <Footer />
    </div>
  )
}
