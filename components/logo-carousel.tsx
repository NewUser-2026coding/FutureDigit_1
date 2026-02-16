"use client"

import Image from "next/image"

const LOGOS = [
  "BFB.png",
  "BNP.png",
  "BPCE.png",
  "CA.png",
  "EDF.png",
  "TE.png",
  "EGS.png",
  "ENG.png",
  "FLW.png",
  "FSP.png",
  "SBG.png",
  "SCOOR.png",
  "SG.png",
  "SMT.png",
  "SPM.png",
]

export default function LogoCarousel() {
  return (
    <section className="py-16 bg-secondary/50 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-10">
          Ils nous font confiance
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-secondary/50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-secondary/50 to-transparent" />

        <div className="flex animate-marquee gap-3">
          {LOGOS.map((src, i) => (
            <div
              key={i}
              className="h-24 w-40 shrink-0 rounded-lg overflow-hidden shadow-none bg-transparent flex items-center justify-center"
            >
              <Image
                src={`/${src}`}
                alt=""
                width={160}
                height={96}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
