"use client"

import SubpageHero from "@/components/subpage-hero"
import Contact from "@/components/contact"
import LogoCarousel from "@/components/logo-carousel"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Code2, Palette, Box, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

const services = [
  {
    icon: Code2,
    title: "Développement sur mesure",
    description: "Applications web et mobiles adaptées à vos besoins spécifiques avec les dernières technologies.",
  },
  {
    icon: Palette,
    title: "Architecture logicielle",
    description: "Conception de systemes scalables, maintenables et performants pour votre entreprise.",
  },
  {
    icon: Box,
    title: "Integration systemes",
    description: "Connexion fluide entre vos differentes applications et ecosystemes technologiques.",
  },
  {
    icon: RefreshCw,
    title: "Modernisation legacy",
    description: "Transformation progressive de vos applications existantes vers des architectures modernes.",
  },
]

const techStack = [
  { category: "Frontend", items: ["React", "Angular", "Vue.js", "Next.js", "TypeScript"] },
  { category: "Backend", items: ["Java / Spring", "Node.js", ".NET", "Python", "Go"] },
  { category: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { category: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Kafka"] },
]

const reasons = [
  "Équipes seniors certifiées avec +8 ans d'expérience moyenne",
  "Methodologies agiles : Scrum, Kanban, SAFe",
  "Code de haute qualite avec tests automatises",
  "Support continu et maintenance evolutive",
  "Livraison dans les delais avec engagements contractuels",
  "Technologies modernes et stack technique a jour",
]

export default function SoftwareEngineeringPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          tag="Nos Expertises"
          title="Software Engineering"
          description="Nous concevons et developpons des solutions logicielles innovantes et performantes, adaptees aux defis uniques de votre entreprise."
          ctaLabel="Discutons de votre projet"
          ctaHref="#contact"
        />

        {/* Image + Intro Split */}
        <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-accent/10 rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/swe1.webp"
                    alt="Équipe de développeurs travaillant ensemble"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                </div>
                {/* Floating stat */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card/90 backdrop-blur-xl p-5 shadow-2xl border border-primary/20"
                >
                  <p className="font-serif text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">500+</p>
                  <p className="text-sm text-muted-foreground">Projets livrés</p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Notre Approche
                </span>
                <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
                  Du concept au deploiement
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {"Notre équipe d'ingénieurs logiciels transforme vos idées en produits concrets. Nous adoptons une démarche agile et itérative pour garantir une livraison rapide et de qualité, en utilisant les technologies les plus adaptées à vos besoins."}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { value: "150+", label: "Developpeurs" },
                    { value: "98%", label: "Satisfaction client" },
                    { value: "15+", label: "Ans d'experience" },
                    { value: "24/7", label: "Support technique" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                      className="rounded-xl border border-border bg-secondary/30 p-4"
                    >
                      <p className="font-serif text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services - 4 Cards */}
        <section className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Nos Services</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Une gamme complete de services
              </h2>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-2xl transition-all duration-400 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/8 to-transparent rounded-bl-full" />
                  
                  <div className="relative flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-400">
                    <service.icon className="size-7" />
                  </div>
                  <h3 className="relative mt-6 font-serif text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="relative mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack - Visual grid */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Technologies</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Notre stack technique
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {techStack.map((stack, index) => (
                <motion.div
                  key={stack.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="font-serif text-lg font-bold text-primary">{stack.category}</h3>
                  <div className="mt-4 flex flex-col gap-2">
                    {stack.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-accent" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - with image */}
        <section className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">Nos engagements</span>
                <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
                  Pourquoi nous choisir?
                </h2>
                <div className="mt-8 flex flex-col gap-4">
                  {reasons.map((reason, idx) => (
                    <motion.div
                      key={reason}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                      <p className="text-muted-foreground">{reason}</p>
                    </motion.div>
                  ))}
                </div>
                <Link
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Demarrer un projet
                  <ArrowRight className="size-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/swe2.webp"
                    alt="Équipe de consultants en stratégie"
                    className="w-full h-full object-cover"
                  />
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
