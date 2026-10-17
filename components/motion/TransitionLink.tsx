"use client";

import Link, { type LinkProps } from "next/link";
import { usePageTransition } from "./PageTransition";

type Props = LinkProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & { href: string };

export function TransitionLink({ href, onClick, target, children, ...rest }: Props) {
  const { navigate } = usePageTransition();
  return (
    <Link
      href={href}
      target={target}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        const external = /^(https?:|mailto:|tel:)/.test(href);
        if (external || target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        navigate(href);
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}
