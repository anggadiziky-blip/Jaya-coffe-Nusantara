// Placeholder photos come from Unsplash, which resizes on its own CDN.
export default function unsplashLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  return `${src}&w=${width}&q=${quality ?? 75}`;
}
