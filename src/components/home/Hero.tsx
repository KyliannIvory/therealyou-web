import type { ReactElement } from "react";
import SearchBar from "@/components/search-bar/SearchBar";
import { cn } from "@/lib/cn";

const Hero = (): ReactElement => {
  return (
    <section className={styles.section}>
      <p className={styles.badge}>
        <span className={styles.badgeDot} aria-hidden="true" />
        Réservation beauté &amp; salons • Côte d&apos;Ivoire
      </p>

      <div className={styles.intro}>
        <h1 className={styles.title}>
          Révélez votre éclat naturel, <br className="hidden sm:inline" />
          <span className={styles.titleAccent}>la beauté qui vous ressemble.</span>
        </h1>
        <p className={styles.description}>
          Trouvez les meilleurs coiffeurs, locks branchés, tresses signatures, barbiers et instituts
          d&apos;exception à Abidjan. Réservez votre créneau en un clic.
        </p>
      </div>

      <div className={styles.search}>
        <SearchBar />
      </div>
    </section>
  );
};

export default Hero;

const styles = {
  section: "mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-10 sm:px-8",
  badge: cn(
    "mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 shadow-sm glacier-pill",
    "text-xs font-semibold tracking-widest text-glacier-900 uppercase",
  ),
  badgeDot: "size-2 animate-pulse rounded-full bg-glacier-400",
  intro: "max-w-4xl space-y-4 text-center",
  title: cn(
    "font-display text-4xl tracking-tight text-ice-dark",
    "sm:text-6xl md:text-[68px] md:leading-[1.12]",
  ),
  titleAccent: cn(
    "font-normal italic drop-shadow-sm",
    "bg-linear-to-r from-glacier-500 via-sky-600 to-teal-600 bg-clip-text text-transparent",
  ),
  description: "mx-auto max-w-2xl text-base leading-relaxed font-light text-ice-slate sm:text-lg",
  search: "mt-12 flex w-full justify-center",
} as const;
