import Image from "next/image";
import { brand, images } from "@/lib/data";
import { Button } from "./Button";
import { Reveal, SplitText } from "../motion/Reveal";

export function CtaBand({
  title = "Looking for Indonesian green coffee supply?",
  image = images.dryingBeds,
}: {
  title?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-espresso text-ivory">
      <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/80 to-espresso/30" />
      <div className="container-x relative py-28 md:py-40">
        <Reveal>
          <p className="eyebrow text-ivory/75">Business inquiry</p>
        </Reveal>
        <h2 className="mt-6 max-w-3xl font-serif text-4xl font-medium leading-[1.08] md:text-6xl">
          <SplitText text={title} inView />
        </h2>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl leading-relaxed text-ivory/75">{brand.inquiry}</p>
        </Reveal>
        <Reveal delay={0.25} className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="light">
            Start an inquiry
          </Button>
          <Button href="/coffee" variant="outline-light">
            View origin profiles
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
