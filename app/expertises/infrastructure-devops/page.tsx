"use client"

import SubpageHero from "@/components/subpage-hero"
import Contact from "@/components/contact"
import LogoCarousel from "@/components/logo-carousel"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { GitBranch, Box, BarChart3, FileCode, CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

const services = [
  { icon: GitBranch, title: "Automatisation CI/CD", description: "Pipelines de deploiement continu automatises pour des livraisons rapides et fiables." },
  { icon: Box, title: "Containerisation", description: "Docker et Kubernetes pour orchestrer et scaler vos applications en production." },
  { icon: BarChart3, title: "Monitoring & Observabilite", description: "Surveillance proactive avec alertes intelligentes et dashboards temps reel." },
  { icon: FileCode, title: "Infrastructure as Code", description: "Terraform, Ansible et gestion de configuration pour une infra reproductible." },
]

const pipeline = [
  { step: "01", title: "Plan", desc: "Architecture et strategie infra" },
  { step: "02", title: "Build", desc: "CI/CD et automatisation" },
  { step: "03", title: "Deploy", desc: "Deploiement continu et rollback" },
  { step: "04", title: "Monitor", desc: "Observabilite et alerting" },
  { step: "05", title: "Optimize", desc: "Performance et cout" },
]

const reasons = [
  "Deploiements automatises zero-downtime",
  "Haute disponibilite et resilience garanties",
  "Infrastructure scalable et elastique",
  "Securite integree DevSecOps",
  "Monitoring avance et observabilite complete",
  "Support et assistance 24/7",
]

export default function InfraDevOpsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          tag="Nos Expertises"
          title="Infrastructure & DevOps"
          description="Automatisez vos deploiements, optimisez votre infrastructure et accelerez votre cycle de developpement avec nos experts DevOps."
          ctaLabel="Discutons de votre projet"
          ctaHref="#contact"
        />

        {/* Image + Intro */}
        <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
          <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:order-2"
              >
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">Notre Vision</span>
                <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
                  {"L'infrastructure au service de l'agilite"}
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {"Nos experts DevOps transforment vos pratiques de developpement et d'operations. De l'automatisation CI/CD a l'observabilite avancee, nous construisons des plateformes fiables et performantes."}
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { value: "99.9%", label: "Uptime" },
                    { value: "10x", label: "Deployments" },
                    { value: "60%", label: "Couts reduits" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                      className="text-center rounded-xl border border-border bg-secondary/30 p-4"
                    >
                      <p className="font-serif text-xl font-bold text-primary">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative lg:order-1"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-accent/10 rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <img src="/devops1.jpg" alt="Infrastructure DevOps et salle serveur" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Nos Services</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">Solutions DevOps completes</h2>
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

        {/* Pipeline Steps */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Pipeline</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">Notre processus DevOps</h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6">
              {pipeline.map((p, index) => (
                <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)]">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white font-serif text-xl font-bold shadow-lg">{p.step}</div>
                  <h3 className="mt-4 font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us with image */}
        <section className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
                  <img src="/team.jpg" alt="Equipe de consultants DevOps" className="w-full h-full object-cover" />
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
