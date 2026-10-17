import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/ui/CtaBand";
import { Faq } from "@/components/Faq";
import { Parallax, Reveal } from "@/components/motion/Reveal";
import { brand, exportServices, images, importServices, inquiryChecklist, tradeSteps } from "@/lib/data";

export const metadata: Metadata = { title: "Export & Import" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Export & Import"
        title="Connecting origins, enabling trade."
        intro="Professional sourcing, transparent specifications and reliable trade practices, from Indonesian origin to your destination market."
        image={images.sacks}
      />

      {/* Export */}
      <section id="export" className="container-x scroll-mt-24 py-28 md:py-40">
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-6"
            eyebrow="01 · Export"
            title="Indonesian green coffee for global buyers."
            intro="We supply importers, roasters and distributors with Indonesian Arabica and Robusta, matched to their origin, grade and volume requirements."
          />
          <div className="grid gap-px self-end bg-line sm:grid-cols-2 lg:col-span-6">
            {exportServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06} className="bg-ivory p-8">
                <h3 className="font-serif text-2xl font-medium">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-dark">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-12 md:mt-32 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Parallax className="aspect-[4/5]">
              <Image src={images.sacksStack} alt="Bagged green coffee in storage" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </Parallax>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow">Starting an inquiry</p>
            <h3 className="mt-5 font-serif text-3xl font-medium leading-tight md:text-4xl">What to include in your request.</h3>
            <p className="mt-4 leading-relaxed text-stone-dark">{brand.inquiry}</p>
            <dl className="mt-8 border-b border-line">
              {inquiryChecklist.map((t) => (
                <div key={t.label} className="grid grid-cols-[7rem_1fr] gap-4 border-t border-line py-4 md:grid-cols-[9rem_1fr]">
                  <dt className="label pt-0.5 text-stone-dark">{t.label}</dt>
                  <dd className="font-mono text-sm">{t.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Trade process */}
      <section className="bg-espresso py-28 text-ivory md:py-40">
        <div className="container-x">
          <SectionHeading light eyebrow="Trade & supply chain" title="From sourcing to shipment." />
          <ol className="mt-16 grid gap-px bg-ivory/15 sm:grid-cols-2 lg:grid-cols-5">
            {tradeSteps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.06} className="bg-espresso p-8">
                <p className="font-mono text-xs text-ivory/60">Step 0{i + 1}</p>
                <h3 className="mt-8 font-serif text-2xl font-medium">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/75">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Import */}
      <section id="import" className="container-x scroll-mt-24 py-28 md:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Parallax className="aspect-[4/3]">
              <Image src={images.cuppingPour} alt="Coffee evaluation" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </Parallax>
          </Reveal>
          <div className="lg:col-span-5 lg:col-start-8">
            <SectionHeading
              eyebrow="02 · Import"
              title="Global sourcing for Indonesian buyers."
              intro="We support Indonesian roasters and businesses in sourcing coffee and related products from international markets."
            />
            <ul className="mt-10 border-b border-line">
              {importServices.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 0.06} className="border-t border-line py-6">
                  <h3 className="font-serif text-2xl font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-dark">{s.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory-deep py-28 md:py-40">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <SectionHeading className="lg:col-span-4" eyebrow="FAQ" title="Questions buyers ask." />
          <Reveal className="lg:col-span-7 lg:col-start-6">
            <Faq />
          </Reveal>
        </div>
      </section>

      <CtaBand image={images.dryingBeds} />
    </>
  );
}
