import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { TransitionProvider } from "@/components/motion/PageTransition";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Brand Guidelines v1.0, 04 Typography
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
const data = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-data" });

export const metadata: Metadata = {
  // Client preview with placeholder content: keep it out of search engines.
  robots: { index: false, follow: false },
  title: {
    default: "Jaya Coffee Nusantara | From Nusantara to the World",
    template: "%s | Jaya Coffee Nusantara",
  },
  description:
    "Jaya Coffee Nusantara connects Indonesian coffee origins with global market opportunities through professional sourcing, reliable trade practices, and long-term partnerships.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${data.variable}`}>
      <body>
        <SmoothScroll>
          <TransitionProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </TransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
