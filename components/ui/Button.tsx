import { TransitionLink } from "../motion/TransitionLink";

type Variant = "light" | "dark" | "outline-light" | "outline-dark";

const styles: Record<Variant, string> = {
  light: "bg-ivory text-espresso hover:bg-sand",
  dark: "bg-espresso text-ivory hover:bg-espresso-deep",
  "outline-light": "border border-ivory/50 text-ivory hover:border-ivory hover:bg-ivory hover:text-espresso",
  "outline-dark": "border border-espresso/30 text-espresso hover:border-espresso hover:bg-espresso hover:text-ivory",
};

export function Button({ href, children, variant = "dark" }: { href: string; children: React.ReactNode; variant?: Variant }) {
  return (
    <TransitionLink
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[0.8125rem] font-medium tracking-wide transition-colors duration-300 ${styles[variant]}`}
    >
      {children}
      <Arrow />
    </TransitionLink>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden
      className={`transition-transform duration-500 ease-out-expo group-hover:translate-x-1 ${className}`}
    >
      <path d="M0 5h12.5M8.5 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
