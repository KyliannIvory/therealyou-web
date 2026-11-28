import type { ReactElement } from "react";
import Hero from "@/components/home/Hero";

export default function Home(): ReactElement {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center pt-28 pb-16">
      <Hero />
    </main>
  );
}
