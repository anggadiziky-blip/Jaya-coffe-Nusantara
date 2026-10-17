import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/ui/CtaBand";
import { Logo } from "@/components/Logo";
import { Parallax, Reveal, SplitText } from "@/components/motion/Reveal";
import { brand, images, logoMeaning, pillars, values } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title={brand.essence} intro={brand.intro} image={images.farmer} />

      <section className="container-x py-28 md:py-40">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading eyebrow="Brand philosophy" title="A trading company, not just a label." />
            </div>
          </div>
          <div className="space-y-10 lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="text-lg leading-relaxed">
                Jaya Coffee Nusantara is an Indonesia-rooted coffee commodity trading company, built to communicate confidence and credibility to
                global markets. We serve importers, roasters, distributors and coffee industry buyers.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed">
                Our role is to connect the diversity of Indonesian coffee origins with international demand: sourcing carefully, communicating
                clearly in English, and building relationships that last beyond a single shipment.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="border-l border-tan pl-8">
              <p className="label text-stone-dark">Positioning statement</p>
              <p className="mt-4 font-serif text-2xl leading-snug md:text-3xl">&ldquo;{brand.positioning}&rdquo;</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x">
        <Reveal>
          <Parallax className="aspect-[16/10] md:aspect-[21/9]">
            <Image src={images.plantationHills} alt="Coffee-growing hills in Indonesia" fill sizes="100vw" className="object-cover" />
          </Parallax>
        </Reveal>
      </section>

      <section className="container-x py-28 md:py-40">
        <SectionHeading eyebrow="Brand pillars" title="What guides our work." />
        <div className="mt-16 border-b border-line">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8">
              <p className="font-mono text-xs text-tan md:col-span-1 md:pt-3">0{i + 1}</p>
              <h3 className="font-serif text-3xl font-medium md:col-span-4 md:text-4xl">{p.title}</h3>
              <p className="leading-relaxed text-stone-dark md:col-span-6 md:col-start-7 md:pt-2">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-espresso py-28 text-ivory md:py-40">
        <div className="container-x">
          <SectionHeading light eyebrow="Brand values" title="How we do business." />
          <ul className="mt-16 grid gap-px bg-ivory/15 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.06} className="bg-espresso p-8">
                <p className="font-mono text-xs text-ivory/60">0{i + 1}</p>
                <h3 className="mt-8 font-serif text-2xl font-medium">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/75">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-28 md:py-40">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="flex justify-center bg-ivory-deep px-10 py-16 lg:col-span-5">
            {/* Primary application: full emblem and wordmark on ivory */}
            <Logo className="w-full max-w-xs" />
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading eyebrow="Logo philosophy" title="The meaning behind the mark." />
            <dl className="mt-10 border-b border-line">
              {logoMeaning.map((m, i) => (
                <Reveal key={m.element} delay={i * 0.05} className="grid gap-2 border-t border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="font-medium">{m.element}</dt>
                  <dd className="text-stone-dark">{m.text}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-x py-24 text-center md:py-32">
          <Reveal>
            <p className="eyebrow justify-center">Guiding principle</p>
          </Reveal>
          <p className="mx-auto mt-8 max-w-4xl font-serif text-4xl font-medium leading-[1.1] md:text-6xl">
            <SplitText inView text={brand.principle} />
          </p>
        </div>
      </section>

      <CtaBand title="Let&rsquo;s build a long-term coffee partnership." image={images.farmerField} />
    </>
  );
}
