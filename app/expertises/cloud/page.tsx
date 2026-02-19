"use client"

import SubpageHero from "@/components/subpage-hero"
import Contact from "@/components/contact"
import LogoCarousel from "@/components/logo-carousel"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Cloud, Boxes, Shield, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

const services = [
  { icon: Cloud, title: "Migration Cloud", description: "Transition fluide de vos applications vers le cloud avec une strategie adaptee a votre contexte." },
  { icon: Boxes, title: "Architecture Cloud", description: "Conception d'infrastructures cloud natives, optimisees pour la performance et les couts." },
  { icon: Shield, title: "Securite Cloud", description: "Protection avancée de vos données et applications avec des solutions Zero Trust." },
  { icon: TrendingUp, title: "Optimisation FinOps", description: "Amélioration continue des performances et maîtrise des coûts cloud." },
]

const providers = [
  { name: "AWS", desc: "Amazon Web Services - Leader mondial du cloud", color: "from-[#FF9900]/20 to-[#FF9900]/5" },
  { name: "Azure", desc: "Microsoft Azure - Integration entreprise native", color: "from-[#0078D4]/20 to-[#0078D4]/5" },
  { name: "GCP", desc: "Google Cloud Platform - Data et IA avancées", color: "from-[#4285F4]/20 to-[#4285F4]/5" },
]

const reasons = [
  "Consultants certifies AWS, Azure et GCP",
  "Haute disponibilite 99.99% garantie",
  "Scalabilite automatique des ressources",
  "Securite renforcee et conformite",
  "Monitoring et alerting 24/7",
  "Accompagnement FinOps et optimisation des couts",
]

export default function CloudPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          tag="Nos Expertises"
          title="Cloud"
          description="Accelerez votre transformation digitale avec nos solutions cloud sur mesure, securisees et performantes."
          ctaLabel="Discutons de votre projet"
          ctaHref="#contact"
        />

        {/* Image + Intro */}
        <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-accent/10 rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <img src="/cloud1.webp" alt="Infrastructure cloud et data center" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card/90 backdrop-blur-xl p-5 shadow-2xl border border-primary/20">
                  <p className="font-serif text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">99.9%</p>
                  <p className="text-sm text-muted-foreground">Disponibilite</p>
                </motion.div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">Notre Vision</span>
                <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">Le cloud au coeur de votre strategie</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">{"Nos architectes cloud certifies concevoivent des solutions multi-cloud securisees et performantes. De la migration a l'optimisation FinOps, nous vous accompagnons a chaque etape de votre parcours cloud."}</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { value: "200+", label: "Migrations reussies" },
                    { value: "40%", label: "Economies moyennes" },
                    { value: "50+", label: "Experts cloud" },
                    { value: "3", label: "Clouds majeurs" },
                  ].map((stat, idx) => (
                    <motion.div key={stat.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }} className="rounded-xl border border-border bg-secondary/30 p-4">
                      <p className="font-serif text-2xl font-bold text-primary">{stat.value}</p>
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
          <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Nos Services</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">Solutions Cloud completes</h2>
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

        {/* Cloud Providers */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Multi-Cloud</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">Expertise multi-cloud certifiée</h2>
            </motion.div>
            <div className="grid gap-8 lg:grid-cols-3">
              {providers.map((provider, index) => (
                <motion.div key={provider.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`rounded-2xl border border-border p-8 bg-gradient-to-br ${provider.color}`}>
                  <h3 className="font-serif text-2xl font-bold text-foreground">{provider.name}</h3>
                  <p className="mt-3 text-muted-foreground">{provider.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us with image */}
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
                  Demarrer un projet <ArrowRight className="size-4" />
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <img src="/cloud2.webp" alt="Équipe cloud certifiée" className="w-full h-full object-cover" />
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
