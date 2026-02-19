"use client"

import Navbar from "@/components/navbar"
import SubpageHero from "@/components/subpage-hero"
import LogoCarousel from "@/components/logo-carousel"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import { motion } from "motion/react"
import { Landmark, PiggyBank, CreditCard, Smartphone, ShieldCheck, Umbrella, Server, Code2, Users, CheckCircle2 } from "lucide-react"

const domains = [
  { icon: Landmark, title: "Banque de Financement et d'Investissement", bullets: ["Optimisation des processus Front-to-Back", "Intégration des solutions RegTech et conformité", "Transformation digitale des opérations de marché", "Modernisation des systèmes de trading et gestion des risques"] },
  { icon: PiggyBank, title: "Gestion d'Actifs", bullets: ["Automatisation des opérations Middle et Back Office", "Intégration des outils d'analyse quantitative", "Solutions de reporting et conformité réglementaire", "Optimisation des processus de gestion de portefeuilles"] },
  { icon: CreditCard, title: "Banque de Détail", bullets: ["Expérience client et fidélisation digitale", "Solutions de crédit et de scoring automatisé", "Digitalisation des services bancaires", "Transformation des parcours clients omnicanaux"] },
  { icon: Smartphone, title: "Banque Directe", bullets: ["Intégration des services de paiement instantané", "Parcours d'onboarding client simplifié", "Applications mobiles et web banking innovantes", "Conception de solutions bancaires 100% digitales"] },
  { icon: ShieldCheck, title: "Banque Privee", bullets: ["Conformite et gestion des risques clients", "Reporting client et tableaux de bord", "Solutions de conseil financier augmente", "Outils de gestion de patrimoine personnalises"] },
  { icon: Umbrella, title: "Assurances", bullets: ["Conformité Solvabilité II et reporting réglementaire", "Solutions de tarification et souscription en ligne", "Gestion des sinistres et indemnisation digitale", "Transformation numérique des processus métier"] },
]

const services = [
  { icon: Server, title: "Gestion des Infrastructures / Production / DevSecOps", description: "Notre équipe d'experts infrastructure accompagne les établissements financiers dans la gestion, la sécurisation et l'automatisation de leurs environnements de production critiques.", tags: ["Infrastructure as Code", "CI/CD sécurisé", "Monitoring avancé", "Cloud hybride", "Sécurité Zero Trust"] },
  { icon: Code2, title: "MOE : Développement et Suivi de Projets Applicatifs", description: "Nos équipes de développement interviennent sur l'ensemble du cycle de vie des applications métier, de la conception à la maintenance évolutive.", tags: ["Architectures modernes", "APIs et microservices", "Applications temps reel", "Migration legacy", "Tests automatises"] },
  { icon: Users, title: "MOA et Expertise Métier", description: "Nos consultants fonctionnels apportent leur expertise métier pour cadrer vos projets et assurer l'adéquation entre les besoins utilisateurs et les solutions déployées.", tags: ["Analyse fonctionnelle", "Gestion de projet", "Conduite du changement", "Formation utilisateurs", "Support métier"] },
]

const stats = [
  { value: "80+", label: "Consultants financiers" },
  { value: "200+", label: "Projets bancaires" },
  { value: "15+", label: "Années d'expérience" },
  { value: "100%", label: "Clients satisfaits" },
]

export default function BanqueFinancePage() {
  return (
    <div className="relative min-h-dvh w-full bg-background">
      <Navbar />

      <SubpageHero
        tag="Business Unit"
        title="Pole Banque - Finance"
        description="Notre pole Banque-Finance accompagne tous les acteurs du secteur financier dans leur transformation digitale et leurs projets technologiques critiques."
        ctaLabel="Parlons de votre projet"
        ctaHref="#contact"
        secondaryLabel="Explorer nos compétences"
        secondaryHref="#domaines"
      />

      {/* Image + Intro section */}
      <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-accent/10 rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <img src="/bu-finance2.webp" alt="Salle de trading et opérations financières" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card/90 backdrop-blur-xl p-5 shadow-2xl border border-primary/20">
                <p className="font-serif text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">200+</p>
                <p className="text-sm text-muted-foreground">Projets bancaires</p>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Notre Expertise</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Au cœur de la finance digitale
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {"Nos consultants sont des professionnels expérimentés de la Finance, appliquée au secteur bancaire et à la finance de marché. Ils interviennent sur un périmètre large, des sujets comptables jusqu'au contrôle de gestion."}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
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

      <LogoCarousel />

      {/* Domains */}
      <section id="domaines" className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Nos Domaines d{"'"}Intervention</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">Expertise financière sectorielle</h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain, index) => (
              <motion.div key={domain.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-2xl transition-all duration-400 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/8 to-transparent rounded-bl-full" />
                <div className="relative flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-400">
                  <domain.icon className="size-6" />
                </div>
                <h3 className="relative mt-5 font-serif text-lg font-bold text-foreground">{domain.title}</h3>
                <ul className="relative mt-4 flex flex-col gap-2">
                  {domain.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services with side image */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Notre Offre de Services</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">Trois grands domaines de compétences</h2>
          </motion.div>

          <div className="flex flex-col gap-8">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group rounded-2xl border border-border bg-gradient-to-br from-card to-card/50 p-8 lg:p-10 hover:border-primary/30 hover:shadow-xl transition-all duration-400 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative flex items-start gap-6">
                  <div className="hidden sm:flex size-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-lg group-hover:scale-110 transition-transform duration-400">
                    <service.icon className="size-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-foreground lg:text-2xl">{service.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Finance image banner */}
      <section className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Notre Engagement</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">{"L'excellence financière au service de vos ambitions"}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">{"Notre équipe de consultants expérimentés intervient auprès des plus grands établissements financiers. De la stratégie à l'implémentation, nous mettons notre expertise sectorielle au service de votre performance."}</p>
              <div className="mt-8 flex flex-col gap-3">
                {["Expertise métier finance et bancaire approfondie", "Équipe dédiée et scalable selon vos besoins", "Conformité réglementaire et gestion des risques", "Innovation continue et veille technologique"].map((item, idx) => (
                  <motion.div key={item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <img src="/bu-finance1.webp" alt="Opérations financières et technologie bancaire" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  )
}
