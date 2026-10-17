import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { Arrow, Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brand, origins, products } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  return p ? { title: p.name, description: p.summary } : {};
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const origin = origins.find((o) => o.slug === product.originSlug);
  const profile = [
    ["Origin", product.origin],
    ["Species", product.species],
    ["Common varieties", product.varieties],
    ["Common processes", product.processes],
    ["Typical altitude", product.altitude],
    ["Main harvest", product.harvest],
  ];
  const onInquiry = ["Lot ID & crop year", "Grade & screen size", "Moisture & defect count", "Available volume", "Packaging", "Price & Incoterms"];
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={`${product.species} · ${product.origin}`} title={product.name} intro={product.summary} image={product.image} short />

      <section className="container-x py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Typical cup profile</p>
              <ul className="mt-6 space-y-1">
                {product.notes.map((n) => (
                  <li key={n} className="font-serif text-4xl italic leading-tight md:text-5xl">
                    {n}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-stone-dark">Cup character varies by lot, process and crop year.</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-3">
              <Button href={`/contact?origin=${product.slug}`}>Request lot specifications</Button>
            </Reveal>
            {origin && (
              <Reveal delay={0.15} className="mt-8">
                <TransitionLink href={`/origins#${origin.slug}`} className="group inline-flex items-center gap-3 text-sm font-medium">
                  <span className="link-underline">About the {origin.name} origin</span>
                  <Arrow />
                </TransitionLink>
              </Reveal>
            )}
          </div>

          <div className="space-y-14 lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <p className="eyebrow">Origin profile</p>
              <dl className="mt-6 border-b border-line">
                {profile.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[9rem_1fr] gap-4 border-t border-line py-4 md:grid-cols-[12rem_1fr]">
                    <dt className="label pt-0.5 text-stone-dark">{k}</dt>
                    <dd className="font-mono text-sm">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.15} className="bg-ivory-deep p-8">
              <p className="eyebrow">Shared upon inquiry</p>
              <ul className="mt-6 grid gap-3 font-mono text-sm sm:grid-cols-2">
                {onInquiry.map((x) => (
                  <li key={x} className="border-t border-line pt-3">
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-stone-dark">{brand.lotNote}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x">
        <Reveal className="relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
          <Image src={origin?.image ?? product.image} alt="" fill sizes="100vw" className="object-cover" />
        </Reveal>
      </section>

      <section className="container-x py-24 md:py-32">
        <SectionHeading eyebrow="More origins" title="Explore other profiles." />
        <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProductCard product={p} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
