import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CoffeeCatalog } from "@/components/CoffeeCatalog";
import { CtaBand } from "@/components/ui/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { brand, images } from "@/lib/data";

export const metadata: Metadata = { title: "Our Coffee" };

export default function CoffeePage() {
  return (
    <>
      <PageHero
        eyebrow="Our coffee"
        title="Indonesian origin profiles."
        intro="Arabica and Robusta from the main coffee-growing regions of Indonesia, supplied as green coffee for importers, roasters and distributors."
        image={images.greenBeans}
      />
      <section className="container-x py-24 md:py-32">
        <Reveal className="mb-14 grid gap-6 border-l border-tan pl-6 md:max-w-2xl">
          <p className="leading-relaxed text-stone-dark">
            The profiles below describe the typical character of each origin. {brand.lotNote} Tell us your requirements and we will share
            current lots that match.
          </p>
        </Reveal>
        <CoffeeCatalog />
      </section>
      <CtaBand title="Looking for a specific origin or grade?" image={images.greenBeanSack} />
    </>
  );
}
