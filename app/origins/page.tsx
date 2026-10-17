import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Parallax, Reveal, SplitText } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { Arrow } from "@/components/ui/Button";
import { images, origins, products } from "@/lib/data";

export const metadata: Metadata = { title: "Origins" };

export default function OriginsPage() {
  return (
    <>
      <PageHero
        eyebrow="Origin intelligence"
        title="Rooted in the diversity of Nusantara."
        intro="Indonesia is home to a diverse range of coffee origins, each with its own character, growing conditions, and potential."
        image={images.mountainsMist}
      />

      <section className="container-x py-28 md:py-36">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <p className="eyebrow">The archipelago</p>
          </Reveal>
          <div className="lg:col-span-9">
            <p className="font-serif text-3xl leading-[1.2] tracking-tight md:text-5xl">
              <SplitText
                inView
                text="Altitude, soil, variety and post-harvest method shape every Indonesian coffee. Understanding the origin is where meaningful trade begins."
              />
            </p>
            <Reveal delay={0.2}>
              <p className="mt-10 max-w-2xl text-sm leading-relaxed text-stone-dark">
                Regional descriptions below are general origin characteristics. Specific lots are described with their own verified specifications
                upon inquiry.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {origins.map((o, i) => {
        const related = products.filter((p) => p.originSlug === o.slug);
        const flip = i % 2 === 1;
        return (
          <section key={o.slug} id={o.slug} className="container-x scroll-mt-24 border-t border-line py-20 md:py-28">
            <div className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
              <Reveal className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
                <Parallax className="aspect-[4/3]">
                  <Image src={o.image} alt={`${o.name}, ${o.region}`} fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
                </Parallax>
              </Reveal>
              <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
                <Reveal>
                  <p className="label text-stone-dark">
                    <span className="font-mono text-tan">0{i + 1}</span> &middot; {o.island}
                  </p>
                  <h2 className="mt-5 font-serif text-4xl font-medium leading-tight md:text-6xl">{o.name}</h2>
                  <p className="mt-6 leading-relaxed">{o.description}</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-6">
                    <div>
                      <dt className="label text-stone-dark">Region</dt>
                      <dd className="mt-2 font-mono text-sm">{o.region}</dd>
                    </div>
                    <div>
                      <dt className="label text-stone-dark">Typical altitude</dt>
                      <dd className="mt-2 font-mono text-sm">{o.altitude}</dd>
                    </div>
                  </dl>
                  {related.length > 0 && (
                    <ul className="mt-8 space-y-3">
                      {related.map((p) => (
                        <li key={p.slug}>
                          <TransitionLink href={`/coffee/${p.slug}`} className="group inline-flex items-center gap-3 text-sm font-medium">
                            <span className="link-underline">{p.name} profile</span>
                            <Arrow />
                          </TransitionLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand title="Not sure which origin fits your requirements?" image={images.cherries} />
    </>
  );
}
