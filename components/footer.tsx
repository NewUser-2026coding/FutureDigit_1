import Link from "next/link"

const footerLinks = {
  Expertises: [
    { name: "Software Engineering", href: "/#expertises" },
    { name: "Cloud", href: "/#expertises" },
    { name: "Infrastructure & DevOps", href: "/#expertises" },
    { name: "Gestion de projet", href: "/#expertises" },
    { name: "Expertise SAP", href: "/#expertises" },
  ],
  "Modes d'intervention": [
    { name: "Conseil - Forfait", href: "/modes/conseil" },
    { name: "Régie - Extended Teams", href: "/modes/regie" },
  ],
  "Business Units": [
    { name: "Pôle Banque - Finance", href: "/business-units/banque-finance" },
    { name: "Pôle Ingénierie", href: "/business-units/ingenierie" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-serif text-xl font-bold">
                Future<span className="text-accent">Digit</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Conseil & Régie IT / Ingénierie. Créée en 2020, 45 consultants, couverture nationale.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider">
                {category}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            2026 Future Digit. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
