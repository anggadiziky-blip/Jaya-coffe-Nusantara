import { Reveal, SplitText } from "../motion/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal>
        <p className={`eyebrow ${light ? "text-ivory/70" : "text-espresso"}`}>{eyebrow}</p>
      </Reveal>
      <h2 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight md:text-6xl">
        <SplitText text={title} inView />
      </h2>
      {intro && (
        <Reveal delay={0.15}>
          <p className={`mt-6 max-w-xl leading-relaxed ${light ? "text-ivory/75" : "text-stone-dark"}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
