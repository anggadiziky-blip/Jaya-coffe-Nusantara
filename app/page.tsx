import Image from "next/image";
import { HomeHero } from "@/components/home/HomeHero";
import { ProcessShowcase } from "@/components/home/ProcessShowcase";
import { ProductCard } from "@/components/ProductCard";
import { GlobeLines } from "@/components/GlobeLines";
import { Parallax, Reveal, SplitText } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Arrow, Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { brand, images, origins, pillars, products, values } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Positioning */}
      <section className="relative overflow-hidden">
        <GlobeLines className="pointer-events-none absolute -right-48 top-10 hidden w-[40rem] text-tan/20 lg:block" />
        <div className="container-x relative py-28 md:py-40">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-3">
              <p className="eyebrow">Who we are</p>
            </Reveal>
            <div className="lg:col-span-9">
              <p className="font-serif text-[1.9rem] leading-[1.22] tracking-tight md:text-5xl md:leading-[1.15]">
                <SplitText inView text={brand.positioning} />
              </p>
              <Reveal delay={0.2} className="mt-12">
                <TransitionLink href="/about" className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide">
                  <span className="link-underline">About the company</span>
                  <Arrow />
                </TransitionLink>
              </Reveal>
            </div>
          </div>

          <div className="mt-24 grid gap-12 md:mt-32 md:grid-cols-3 md:gap-8">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1} className="border-t border-espresso/25 pt-8">
                <p className="font-mono text-xs text-tan">0{i + 1}</p>
                <h3 className="mt-5 font-serif text-3xl font-medium">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-stone-dark">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Origin imagery */}
      <section className="container-x pb-28 md:pb-40">
        <div className="grid gap-4 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-7">
            <Parallax className="aspect-[4/5] md:aspect-[5/6]">
              <Image src={images.picking} alt="Selective harvesting of ripe coffee cherries" fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
            </Parallax>
          </Reveal>
          <div className="grid gap-4 md:col-span-5 md:gap-6">
            <Reveal delay={0.1}>
              <Parallax className="aspect-[4/3]" amount={6}>
                <Image src={images.dryingRake} alt="Coffee drying after harvest" fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover" />
              </Parallax>
            </Reveal>
            <Reveal delay={0.2} className="flex flex-col justify-between gap-8 bg-ivory-deep p-8 md:p-10">
              <p className="font-serif text-2xl leading-snug md:text-[1.75rem]">&ldquo;{brand.belief}&rdquo;</p>
              <p className="label text-stone-dark">Jaya Coffee Nusantara</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Origin profiles */}
      <section className="bg-ivory-deep py-28 md:py-40">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our coffee"
              title="Indonesian origins, clearly specified."
              intro={`Arabica and Robusta profiles from across the archipelago. ${brand.lotNote}`}
            />
            <Reveal>
              <Button href="/coffee" variant="outline-dark">
                All origin profiles
              </Button>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trade process */}
      <section className="bg-espresso py-28 text-ivory md:py-40">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="Trade & supply chain"
            title="From sourcing to shipment."
            intro="How a lot moves from an Indonesian growing region to your destination port, with clear information at each step."
          />
          <ProcessShowcase />
        </div>
      </section>

      {/* Export & import */}
      <section className="container-x py-28 md:py-40">
        <SectionHeading eyebrow="What we do" title="Export and import, handled professionally." />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Export",
              text: "Indonesian green coffee for importers, roasters and distributors, with transparent specifications and documentation.",
              image: images.sacksStack,
              href: "/services#export",
            },
            {
              title: "Import",
              text: "Sourcing support for Indonesian businesses looking for international coffee origins, equipment and supplies.",
              image: images.cuppingPour,
              href: "/services#import",
            },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <TransitionLink href={s.href} className="group relative block aspect-[4/5] overflow-hidden bg-espresso text-ivory md:aspect-[5/6]">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-80 transition-transform duration-[1.6s] ease-out-expo group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/92 via-espresso/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                  <p className="font-mono text-xs text-ivory/70">0{i + 1}</p>
                  <h3 className="mt-3 font-serif text-5xl font-medium md:text-6xl">{s.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/80">{s.text}</p>
                  <span className="mt-8 inline-flex items-center gap-3 text-sm font-medium">
                    <span className="link-underline">Learn more</span>
                    <Arrow />
                  </span>
                </div>
              </TransitionLink>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Origins */}
      <section className="border-t border-line">
        <div className="container-x py-28 md:py-40">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <SectionHeading eyebrow="Origins" title="One archipelago, many coffee origins." />
            <Reveal>
              <Button href="/origins" variant="outline-dark">
                Explore the origins
              </Button>
            </Reveal>
          </div>
          <ul className="mt-16 border-b border-line">
            {origins.map((o, i) => (
              <Reveal as="li" key={o.slug} delay={i * 0.04}>
                <TransitionLink
                  href={`/origins#${o.slug}`}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 border-t border-line py-6 md:grid-cols-[4rem_1fr_12rem_12rem] md:py-8"
                >
                  <span className="font-mono text-xs text-stone-dark">0{i + 1}</span>
                  <span className="font-serif text-3xl font-medium transition-all duration-500 ease-out-expo group-hover:translate-x-3 group-hover:italic group-hover:text-tan md:text-5xl">
                    {o.name}
                  </span>
                  <span className="text-sm text-stone-dark">{o.island}</span>
                  <span className="hidden font-mono text-xs text-stone-dark md:block">{o.altitude}</span>
                </TransitionLink>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory-deep">
        <div className="container-x py-20 md:py-24">
          <Reveal>
            <p className="eyebrow">Brand values</p>
          </Reveal>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.06}>
                <p className="font-serif text-2xl font-medium">{v.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-dark">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
