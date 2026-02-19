import type { Metadata, Viewport } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'

const _montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const _openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })

export const metadata: Metadata = {
  title: 'Future Digit - Conseil & Régie IT | Ingénierie & Banque-Finance',
  description: 'Future Digit accompagne les entreprises dans leur transformation numérique. Conseil, Régie IT, Ingénierie et Banque-Finance.',
}

export const viewport: Viewport = {
  themeColor: '#c2623a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans antialiased ${_montserrat.variable} ${_openSans.variable}`}>
        {children}
      </body>
    </html>
  )
}
