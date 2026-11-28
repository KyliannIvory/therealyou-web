import type { ReactElement } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Scissors, Search } from "lucide-react";

const palette = [
  { name: "glacier-50", className: "bg-glacier-50" },
  { name: "glacier-100", className: "bg-glacier-100" },
  { name: "glacier-200", className: "bg-glacier-200" },
  { name: "glacier-300", className: "bg-glacier-300" },
  { name: "glacier-400", className: "bg-glacier-400" },
  { name: "glacier-500", className: "bg-glacier-500" },
  { name: "glacier-600", className: "bg-glacier-600" },
  { name: "glacier-700", className: "bg-glacier-700" },
  { name: "glacier-800", className: "bg-glacier-800" },
  { name: "glacier-900", className: "bg-glacier-900" },
  { name: "ice-slate", className: "bg-ice-slate" },
  { name: "ice-dark", className: "bg-ice-dark" },
];

const glassEffects = ["glacier-frost", "glacier-card", "glacier-pill"];

export default function ThemePage(): ReactElement {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl space-y-16 p-10 pt-navbar">
      <section className="flex items-center gap-6">
        <Image
          src="/images/logo-therealyou.png"
          alt="The Real You"
          width={48}
          height={48}
          className="size-12 rounded-full border border-glacier-100 object-contain"
          priority
        />
        <div className="flex gap-4 text-glacier-500">
          <Scissors className="size-6" aria-hidden="true" />
          <Calendar className="size-6" aria-hidden="true" />
          <Search className="size-6" aria-hidden="true" />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold tracking-widest text-ice-slate uppercase">Polices</h2>
        <p className="font-display text-5xl">
          Bodoni Moda <span className="italic">— font-display</span>
        </p>
        <p className="font-body text-lg text-ice-slate">
          Plus Jakarta Sans — font-body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold tracking-widest text-ice-slate uppercase">Palette</h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {palette.map((color) => (
            <li key={color.name} className="space-y-2">
              <div className={`h-16 rounded-xl border border-black/5 ${color.className}`} />
              <p className="text-xs text-ice-slate">{color.name}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold tracking-widest text-ice-slate uppercase">
          Effets de verre
        </h2>
        <div className="flex flex-wrap gap-10">
          {glassEffects.map((effect) => (
            <div key={effect} className="relative h-48 w-72">
              <div className="absolute top-0 left-6 size-32 rounded-full bg-glacier-400" />
              <div className={`absolute inset-x-0 bottom-0 rounded-2xl p-4 ${effect}`}>
                {effect}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
