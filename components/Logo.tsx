import Image from "next/image";

// Approved artwork only (brief: do not retype the brand name in a similar font).
// Raster extracted from Brand Guidelines v1.0; swap for the vector master when available.
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const files = {
  full: { color: `${base}/brand/logo-full.png`, ivory: `${base}/brand/logo-full-ivory.png`, w: 1296, h: 963 },
  emblem: { color: `${base}/brand/emblem.png`, ivory: `${base}/brand/emblem-ivory.png`, w: 400, h: 413 },
};

export function Logo({
  variant = "full",
  tone = "color",
  className = "",
  priority = false,
}: {
  variant?: "full" | "emblem";
  tone?: "color" | "ivory";
  className?: string;
  priority?: boolean;
}) {
  const f = files[variant];
  return (
    <Image
      src={f[tone]}
      alt="Jaya Coffee Nusantara"
      width={f.w}
      height={f.h}
      priority={priority}
      unoptimized
      className={`h-auto ${className}`}
    />
  );
}
