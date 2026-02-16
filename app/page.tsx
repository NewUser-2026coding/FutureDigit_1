"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import LogoCarousel from "@/components/logo-carousel"
import Interventions from "@/components/interventions"
import About from "@/components/about"
import Expertises from "@/components/expertises"
import BusinessUnits from "@/components/business-units"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-dvh w-full bg-background">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <About />
      <Interventions />
      <Expertises />
      <BusinessUnits />
      <Contact />
      <Footer />
    </div>
  )
}
