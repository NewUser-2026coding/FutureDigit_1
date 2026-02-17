"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"

type NavDropdown = {
  name: string
  items: { name: string; href: string; description: string }[]
}

type NavLink = {
  name: string
  href: string
}

type NavItem = NavLink | NavDropdown

function isDropdown(item: NavItem): item is NavDropdown {
  return "items" in item
}

const navItems: NavItem[] = [
  {
    name: "Modes d'intervention",
    items: [
      {
        name: "Conseil",
        href: "/modes/conseil",
        description: "Prestations au forfait - Solutions sur-mesure",
      },
      {
        name: "Régie",
        href: "/modes/regie",
        description: "Extended Teams - Renfort d'équipes",
      },
    ],
  },
  {
    name: "Expertises",
    items: [
      {
        name: "Software Engineering",
        href: "/expertises/software-engineering",
        description: "Developpement et architecture logicielle",
      },
      {
        name: "Infrastructure & DevOps",
        href: "/expertises/infrastructure-devops",
        description: "Automatisation et infrastructure cloud",
      },
      {
        name: "Cloud",
        href: "/expertises/cloud",
        description: "Solutions cloud AWS, Azure, GCP",
      },
      {
        name: "Expertise SAP",
        href: "/expertises/sap",
        description: "Implementation et integration SAP",
      },
      {
        name: "Gestion de Projet",
        href: "/expertises/gestion-projet",
        description: "Pilotage et management de projets IT",
      },
    ],
  },
  {
    name: "Business Units",
    items: [
      {
        name: "Pôle Banque - Finance",
        href: "/business-units/banque-finance",
        description: "BFI, gestion d'actifs, banque de détail, assurances",
      },
      {
        name: "Pôle Ingénierie",
        href: "/business-units/ingenierie",
        description: "Énergie, Oil & Gas, aéronautique",
      },
    ],
  },
]

function DesktopDropdown({ item }: { item: NavDropdown }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">
        {item.name}
        <ChevronDown
          className={`size-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
          >
            <div className="min-w-[260px] rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-xl p-2">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  onClick={() => setOpen(false)}
                  className="flex flex-col gap-0.5 rounded-lg px-4 py-3 hover:bg-secondary transition-colors"
                >
                  <span className="text-sm font-semibold text-foreground">{subItem.name}</span>
                  <span className="text-xs text-muted-foreground">{subItem.description}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileDropdown({ item, onNavigate }: { item: NavDropdown; onNavigate: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-sm font-medium text-foreground hover:text-primary transition-colors"
      >
        {item.name}
        <ChevronDown
          className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pt-2 pl-4">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  onClick={onNavigate}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`mx-auto max-w-7xl transition-all duration-500 ${
          scrolled
            ? "mt-2 mx-4 rounded-2xl bg-card/80 backdrop-blur-xl shadow-lg border border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo_no_background.png"
              alt="Future Digit"
              width={140}
              height={44}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              isDropdown(item) ? (
                <DesktopDropdown key={item.name} item={item} />
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Demander un devis
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-border/50"
            >
              <div className="flex flex-col gap-4 px-6 py-6 bg-card/95 backdrop-blur-xl rounded-b-2xl">
                {navItems.map((item) =>
                  isDropdown(item) ? (
                    <MobileDropdown key={item.name} item={item} onNavigate={() => setOpen(false)} />
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  )
                )}
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Demander un devis
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
