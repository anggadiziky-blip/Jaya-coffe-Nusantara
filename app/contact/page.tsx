import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/motion/Reveal";
import { brand, company, images } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Business inquiry"
        title="Let&rsquo;s discuss your requirements."
        intro="For business inquiries and coffee sourcing discussions, get in touch with our team."
        image={images.greenBeanSack}
        short
      />

      <section className="container-x py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow">How to inquire</p>
              <p className="mt-6 font-serif text-2xl leading-snug md:text-3xl">{brand.inquiry}</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-14 space-y-8 border-t border-line pt-8 text-sm">
              <div>
                <p className="label text-stone-dark">Email</p>
                <a href={`mailto:${company.email}`} className="link-underline mt-2 inline-block text-base">
                  {company.email}
                </a>
              </div>
              <div>
                <p className="label text-stone-dark">Phone</p>
                <p className="mt-2 font-mono">{company.phone}</p>
              </div>
              <div>
                <p className="label text-stone-dark">WhatsApp</p>
                <p className="mt-2 font-mono">{company.whatsapp}</p>
              </div>
              <div>
                <p className="label text-stone-dark">Office</p>
                <address className="mt-2 not-italic leading-relaxed">
                  {company.address.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <Suspense>
              <InquiryForm />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  );
}
