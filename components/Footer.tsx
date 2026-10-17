import { TransitionLink } from "./motion/TransitionLink";
import { Logo } from "./Logo";
import { GlobeLines } from "./GlobeLines";
import { brand, company, nav } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-ivory">
      <GlobeLines className="pointer-events-none absolute -right-40 -top-40 w-[42rem] text-ivory/[0.06]" />
      <div className="container-x relative pt-24 pb-10 md:pt-32">
        <div className="grid gap-16 border-b border-ivory/15 pb-20 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow text-ivory/60">Business inquiries</p>
            <h2 className="mt-6 max-w-lg font-serif text-5xl leading-[1.05] md:text-6xl">
              Let&rsquo;s discuss your coffee requirements.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ivory/70">{brand.inquiry}</p>
            <a
              href={`mailto:${company.email}`}
              className="link-underline mt-8 inline-block text-lg text-ivory hover:text-ivory md:text-xl"
            >
              {company.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3 lg:col-span-6">
            <div>
              <p className="label mb-5 text-ivory/45">Navigate</p>
              <ul className="space-y-3">
                {nav.map((n) => (
                  <li key={n.href}>
                    <TransitionLink href={n.href} className="link-underline text-ivory/80 hover:text-ivory">
                      {n.label}
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label mb-5 text-ivory/45">Office</p>
              <address className="space-y-1 not-italic text-ivory/80">
                {company.address.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </address>
            </div>
            <div>
              <p className="label mb-5 text-ivory/45">Contact</p>
              <ul className="space-y-3 text-ivory/80">
                <li>{company.phone}</li>
                <li>WhatsApp {company.whatsapp}</li>
              </ul>
              <p className="label mt-8 mb-5 text-ivory/45">Follow</p>
              <ul className="space-y-3">
                {["LinkedIn", "Instagram"].map((s) => (
                  <li key={s}>
                    <a href="#" className="link-underline text-ivory/80 hover:text-ivory">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-10 pt-12 md:flex-row md:items-end">
          {/* Dark background: ivory one-colour version */}
          <Logo tone="ivory" className="w-44 md:w-52" />
          <div className="space-y-2 text-xs text-ivory/50 md:text-right">
            <p className="font-serif text-lg italic text-ivory/80">{brand.tagline}</p>
            <p>
              &copy; {new Date().getFullYear()} {company.legal}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
