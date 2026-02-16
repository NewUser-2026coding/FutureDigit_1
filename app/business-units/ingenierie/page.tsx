"use client"

import Navbar from "@/components/navbar"
import SubpageHero from "@/components/subpage-hero"
import LogoCarousel from "@/components/logo-carousel"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import { motion } from "motion/react"
import { Flame, Plane, Wrench, Cpu, Factory, CheckCircle2 } from "lucide-react"

const domains = [
  { icon: Flame, title: "Energie / Oil & Gas", description: "Accompagnement des majors petrolieres et energeticiennes dans leurs projets d'ingenierie complexes, de la conception a la mise en service." },
  { icon: Plane, title: "Aeronautique", description: "Expertise dans la conception et le developpement de systemes aeronautiques pour les equipementiers et constructeurs du secteur." },
]

const services = [
  { icon: Wrench, title: "Conception mecanique", description: "Notre equipe d'ingenieurs mecaniciens intervient sur l'ensemble du cycle de conception, de l'avant-projet a l'industrialisation.", tags: ["Modelisation 3D et simulation", "Calculs de structure", "Design industriel", "Prototypage rapide", "Documentation technique"] },
  { icon: Cpu, title: "Conception Hardware & Software", description: "Developpement de systemes embarques et de solutions logicielles industrielles pour repondre aux exigences les plus strictes.", tags: ["Systemes embarques", "Electronique de puissance", "Logiciels temps reel", "Interfaces homme-machine", "Tests et validation"] },
  { icon: Factory, title: "Supply Chain / Industrialisation 4.0", description: "Optimisation de vos processus industriels et de votre chaine d'approvisionnement avec les technologies de l'industrie 4.0.", tags: ["Optimisation des flux", "Automatisation", "IoT industriel", "Maintenance predictive", "Digital twin"] },
]

const stats = [
  { value: "40+", label: "Ingenieurs specialises" },
  { value: "150+", label: "Projets industriels" },
  { value: "12+", label: "Annees d'experience" },
  { value: "100%", label: "Projets livres" },
]

export default function IngenieriePage() {
  return (
    <div className="relative min-h-dvh w-full bg-background">
      <Navbar />

      <SubpageHero
        tag="Business Unit"
        title="Pole Ingenierie"
        description="Notre pole ingenierie accompagne les operateurs, EPC et fournisseurs d'equipements dans les secteurs de l'energie, de l'aeronautique et de l'industrie avancee."
        ctaLabel="Parlons de votre projet"
        ctaHref="#contact"
        secondaryLabel="Explorer nos competences"
        secondaryHref="#domaines"
      />

      {/* Image + Intro */}
      <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
        <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:order-2">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Notre Expertise</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">{"L'ingenierie de pointe au service de l'industrie"}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">{"Le pole Ingenierie s'adresse aux clients operateurs, EPC et fournisseurs de services dans les secteurs de l'energie, de l'aeronautique et de l'industrie avancee. Notre equipe d'ingenieurs experimentes intervient sur l'ensemble du cycle de vie de vos projets."}</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
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
                <img src="/bu-ingenierie2.jpg" alt="Ingenierie industrielle et conception avancee" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card/90 backdrop-blur-xl p-5 shadow-2xl border border-primary/20">
                <p className="font-serif text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">150+</p>
                <p className="text-sm text-muted-foreground">Projets industriels</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <LogoCarousel />

      {/* Domains - Visual cards with gradient backgrounds */}
      <section id="domaines" className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Nos Domaines d{"'"}Intervention</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">Expertise industrielle sectorielle</h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {domains.map((domain, index) => (
              <motion.div key={domain.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group rounded-2xl border border-border bg-gradient-to-br from-card to-card/50 p-8 lg:p-10 hover:border-primary/30 hover:shadow-2xl transition-all duration-400 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/8 to-transparent rounded-bl-full" />
                <div className="relative flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-400">
                  <domain.icon className="size-7" />
                </div>
                <h3 className="relative mt-6 font-serif text-2xl font-bold text-foreground">{domain.title}</h3>
                <p className="relative mt-3 text-muted-foreground leading-relaxed">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Notre Offre de Services</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">Trois grands domaines de competences</h2>
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

      {/* Engineering image + commitments */}
      <section className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-accent/10 rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <img src="/bu-ingenierie1.jpg" alt="Ingenierie avancee et industrie" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Notre Engagement</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">{"L'excellence industrielle au service de vos projets"}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">{"Notre equipe d'ingenieurs experimentes intervient sur l'ensemble du cycle de vie de vos projets industriels. De la conception a l'industrialisation, nous mettons notre savoir-faire au service de votre performance."}</p>
              <div className="mt-8 flex flex-col gap-3">
                {["Ingenieurs experimentes et specialises par secteur", "Maitrise des outils de conception CAO/DAO", "Approche pluridisciplinaire mecanique, electronique, logiciel", "Conformite aux normes industrielles et certifications"].map((item, idx) => (
                  <motion.div key={item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">{item}</p>
                  </motion.div>
                ))}
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
