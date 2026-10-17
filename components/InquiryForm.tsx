"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { products } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

const field =
  "w-full border-0 border-b border-espresso/25 bg-transparent px-0 py-3 text-base text-espresso placeholder:text-stone outline-none transition-colors focus:border-espresso";

function Field({ label, children, wide = false }: { label: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <label className={`block ${wide ? "sm:col-span-2" : ""}`}>
      <span className="label text-stone-dark">{label}</span>
      {children}
    </label>
  );
}

// Front-end only for the preview. Connect to email / CRM before going live.
export function InquiryForm() {
  const params = useSearchParams();
  const preset = products.find((p) => p.slug === params.get("origin"));
  const [sent, setSent] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="border-t border-espresso/25 pt-10"
          role="status"
        >
          <p className="eyebrow">Inquiry received</p>
          <h3 className="mt-6 font-serif text-4xl font-medium leading-tight">Thank you. Our team will be in touch.</h3>
          <p className="mt-4 max-w-md leading-relaxed text-stone-dark">
            We will review your requirements and reply with suitable sourcing options and the next steps.
          </p>
          <button type="button" onClick={() => setSent(false)} className="link-underline mt-8 text-sm font-medium">
            Send another inquiry
          </button>
        </motion.div>
      ) : (
        <motion.form
          key={`form-${preset?.slug ?? "none"}`}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="grid gap-x-8 gap-y-8 sm:grid-cols-2"
        >
          <Field label="Full name">
            <input required name="name" autoComplete="name" className={field} />
          </Field>
          <Field label="Company">
            <input required name="company" autoComplete="organization" className={field} />
          </Field>
          <Field label="Business email">
            <input required type="email" name="email" autoComplete="email" className={field} />
          </Field>
          <Field label="Phone / WhatsApp">
            <input type="tel" name="phone" autoComplete="tel" className={field} />
          </Field>
          <Field label="Inquiry type">
            <select name="type" className={field} defaultValue="Green coffee export">
              <option>Green coffee export</option>
              <option>Sample request</option>
              <option>Import sourcing</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Destination market">
            <input name="market" placeholder="Country / port" className={field} />
          </Field>
          <Field label="Preferred origin">
            <select name="origin" className={field} defaultValue={preset?.name ?? "Open to suggestions"}>
              <option>Open to suggestions</option>
              {products.map((p) => (
                <option key={p.slug}>{p.name}</option>
              ))}
            </select>
          </Field>
          <Field label="Estimated volume">
            <input name="volume" placeholder="e.g. 1 × 20 ft container per quarter" className={field} />
          </Field>
          <Field label="Grade, process & other requirements" wide>
            <textarea name="message" rows={4} className={`${field} resize-none`} />
          </Field>
          <div className="flex flex-col gap-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-xs leading-relaxed text-stone-dark">
              Your details are used only to respond to this inquiry.
            </p>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-espresso px-8 py-4 text-[0.8125rem] font-medium tracking-wide text-ivory transition-colors hover:bg-espresso-deep"
            >
              Send inquiry
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                <path d="M0 5h12.5M8.5 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
              </svg>
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
