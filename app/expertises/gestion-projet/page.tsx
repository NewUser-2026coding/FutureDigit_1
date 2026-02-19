"use client"

import SubpageHero from "@/components/subpage-hero"
import Contact from "@/components/contact"
import LogoCarousel from "@/components/logo-carousel"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FolderKanban, Users, CalendarDays, BarChart, CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

const services = [
  { icon: FolderKanban, title: "Pilotage de projet", description: "Direction et coordination de projets IT complexes avec rigueur et methode." },
  { icon: Users, title: "Management d'equipe", description: "Animation, motivation et coaching des equipes projet pour une performance optimale." },
  { icon: CalendarDays, title: "Planification strategique", description: "Gestion des delais, des ressources et du budget pour respecter vos engagements." },
  { icon: BarChart, title: "Reporting & KPIs", description: "Tableaux de bord temps reel et indicateurs de performance pour un pilotage eclaire." },
]

const methodologies = [
  { name: "Scrum", desc: "Sprints iteratifs et delivrance continue", accent: "bg-primary" },
  { name: "Kanban", desc: "Flux continu et optimisation des processus", accent: "bg-accent" },
  { name: "SAFe", desc: "Agilite a l'echelle pour les grands programmes", accent: "bg-primary" },
  { name: "Prince2", desc: "Gouvernance projet structuree", accent: "bg-accent" },
  { name: "PMP", desc: "Standards PMI et gestion rigoureuse", accent: "bg-primary" },
]

const reasons = [
  "Chefs de projet certifies PMP, Prince2, Scrum Master",
  "Approche Agile et méthodologies adaptées à votre contexte",
  "Gestion des risques proactive et anticipation",
  "Communication efficace et stakeholder management",
  "Budget maîtrisé et contrôle rigoureux des coûts",
  "Qualite garantie avec processus de validation stricts",
]

export default function GestionProjetPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          tag="Nos Expertises"
          title="Gestion de Projet"
          description="Nos chefs de projet certifiés pilotent vos initiatives IT avec rigueur et méthodologie pour garantir le succès de vos projets."
          ctaLabel="Discutons de votre projet"
          ctaHref="#contact"
        />

        {/* Image + Intro */}
        <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
          <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-accent/10 rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <img src="/gestprojet1.webp" alt="Équipe en session de planification agile" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card/90 backdrop-blur-xl p-5 shadow-2xl border border-primary/20">
                  <p className="font-serif text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">95%</p>
                  <p className="text-sm text-muted-foreground">Projets a l{"'"}heure</p>
                </motion.div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">Notre Approche</span>
                <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">Le pilotage qui fait la difference</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">{"Nos chefs de projet combinent expertise technique, compétences managériales et connaissance métier. Ils s'adaptent à votre contexte et déploient les méthodologies les plus adaptées pour délivrer vos projets dans les temps et le budget."}</p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { value: "300+", label: "Projets pilotes" },
                    { value: "95%", label: "Dans les delais" },
                    { value: "30+", label: "Chefs de projet" },
                  ].map((stat, idx) => (
                    <motion.div key={stat.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }} className="text-center rounded-xl border border-border bg-secondary/30 p-4">
                      <p className="font-serif text-xl font-bold text-primary">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Nos Services</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">Pilotage IT de bout en bout</h2>
            </motion.div>
            <div className="grid gap-8 sm:grid-cols-2">
              {services.map((service, index) => (
                <motion.div key={service.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-2xl transition-all duration-400 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/8 to-transparent rounded-bl-full" />
                  <div className="relative flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-400"><service.icon className="size-7" /></div>
                  <h3 className="relative mt-6 font-serif text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="relative mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodologies */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Methodologies</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">Certifications et referentiels</h2>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-6">
              {methodologies.map((m, index) => (
                <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="group flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)]">
                  <div className={`flex size-16 items-center justify-center rounded-2xl ${m.accent} text-white font-serif text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>{m.name.slice(0, 3).toUpperCase()}</div>
                  <h3 className="mt-4 font-semibold text-foreground">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">Nos engagements</span>
                <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">Pourquoi nous choisir?</h2>
                <div className="mt-8 flex flex-col gap-4">
                  {reasons.map((reason, idx) => (
                    <motion.div key={reason} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                      <p className="text-muted-foreground">{reason}</p>
                    </motion.div>
                  ))}
                </div>
                <Link href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                  Consulter nos experts <ArrowRight className="size-4" />
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <img src="/gestprojet2.webp" alt="Équipe de gestion de projet" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <LogoCarousel />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
