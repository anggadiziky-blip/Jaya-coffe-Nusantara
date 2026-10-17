import Image from "next/image";
import type { Product } from "@/lib/data";
import { TransitionLink } from "./motion/TransitionLink";

export function ProductCard({ product, sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" }: { product: Product; sizes?: string }) {
  return (
    <TransitionLink href={`/coffee/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.05]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-ivory/92 px-3 py-1 text-[0.6875rem] font-medium tracking-wide text-espresso backdrop-blur">
          {product.species}
        </span>
      </div>
      <div className="mt-5">
        <p className="label text-stone-dark">{product.origin}</p>
        <h3 className="mt-2 font-serif text-2xl font-medium leading-tight md:text-[1.75rem]">{product.name}</h3>
        <p className="mt-2 text-sm text-stone-dark">{product.notes.join(" · ")}</p>
      </div>
    </TransitionLink>
  );
}
