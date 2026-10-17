import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-espresso text-ivory">
      <div className="container-x py-40">
        <p className="eyebrow text-ivory/70">Page not found</p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-tight md:text-7xl">This page could not be found.</h1>
        <div className="mt-10">
          <Button href="/" variant="light">
            Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
