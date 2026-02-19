"use client"

import SubpageHero from "@/components/subpage-hero"
import Contact from "@/components/contact"
import LogoCarousel from "@/components/logo-carousel"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Database, GitMerge, ArrowUpCircle, Headphones, CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

const services = [
  { icon: Database, title: "Implementation SAP", description: "Deploiement et configuration de solutions SAP adaptees a votre organisation." },
  { icon: GitMerge, title: "Integration", description: "Connexion de SAP avec vos systemes existants pour un ecosysteme unifie." },
  { icon: ArrowUpCircle, title: "Migration S/4HANA", description: "Transition vers la nouvelle génération SAP avec une méthodologie éprouvée." },
  { icon: Headphones, title: "Support & Maintenance", description: "Assistance technique continue et evolution de vos solutions SAP." },
]

const modules = [
  { name: "SAP FI/CO", desc: "Finance et Controle de gestion" },
  { name: "SAP MM", desc: "Gestion des achats et stocks" },
  { name: "SAP SD", desc: "Ventes et distribution" },
  { name: "SAP PP", desc: "Planification de production" },
  { name: "SAP HCM", desc: "Gestion des ressources humaines" },
  { name: "SAP BW/BI", desc: "Business Intelligence" },
]

const reasons = [
  "Consultants certifiés SAP avec expertise multi-modules",
  "Méthodologie d'implémentation éprouvée et structurée",
  "Accompagnement de bout en bout : cadrage, réalisation, formation",
  "Support post-projet et maintenance évolutive",
  "Formation utilisateurs et transfert de compétences",
  "Respect des best practices SAP et standards qualité",
]

export default function SAPPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          tag="Nos Expertises"
          title="Expertise SAP"
          description="Nos consultants SAP certifies vous accompagnent dans l'implementation, l'integration et l'evolution de vos solutions SAP."
          ctaLabel="Discutons de votre projet"
          ctaHref="#contact"
        />

        {/* Image + Intro */}
        <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
          <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:order-2">
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">Notre Expertise</span>
                <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">{"L'ERP au coeur de votre transformation"}</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">{"Notre équipe de consultants SAP maîtrise l'ensemble des modules fonctionnels et techniques. De la phase de cadrage à la mise en production, nous déployons une méthodologie rigoureuse pour garantir le succès de vos projets SAP."}</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { value: "80+", label: "Consultants SAP" },
                    { value: "100+", label: "Projets SAP livres" },
                    { value: "6", label: "Modules maîtrisés" },
                    { value: "15+", label: "Ans d'expertise" },
                  ].map((stat, idx) => (
                    <motion.div key={stat.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }} className="rounded-xl border border-border bg-secondary/30 p-4">
                      <p className="font-serif text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-accent/10 rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <img src="/sap1.webp" alt="Consultants SAP en session de travail" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Nos Services</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">Accompagnement SAP complet</h2>
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

        {/* SAP Modules */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Modules</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">Expertise multi-modules</h2>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((mod, index) => (
                <motion.div key={mod.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white font-serif text-sm font-bold shadow-md">{mod.name.replace("SAP ", "")}</div>
                  <div>
                    <h3 className="font-semibold text-foreground">{mod.name}</h3>
                    <p className="text-sm text-muted-foreground">{mod.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
                  Evaluer votre projet SAP <ArrowRight className="size-4" />
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <img src="/sap2.webp" alt="Équipe SAP en consultation" className="w-full h-full object-cover" />
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
