import type { ReactElement } from "react";
import Link from "next/link";
import Logo from "@/components/layout/Logo";
import FooterColumn from "@/components/layout/FooterColumn";
import { footerSections, type NavLink, type NavSection, socialLinks } from "@/config/navigation";
import { cn } from "@/lib/cn";

const Footer = (): ReactElement => {
  return (
    <footer className="glass-footer mt-auto">
      <div className="page-container pt-14 pb-10">
        <div
          className={cn(
            "grid gap-10 border-b border-glacier-200/50 pb-12",
            "md:grid-cols-2 lg:grid-cols-5",
          )}
        >
          <div className="space-y-4 lg:col-span-2">
            <Logo tagline="Côte d'Ivoire" />
            <p className="max-w-sm text-sm leading-relaxed font-light text-ice-slate">
              La plateforme de référence en Côte d&apos;Ivoire qui réunit les meilleurs salons,
              maîtres barbiers et artisans capillaires d&apos;Abidjan.
            </p>
          </div>

          {footerSections.map((section: NavSection): ReactElement => (
            <FooterColumn key={section.title} title={section.title} links={section.links} />
          ))}
        </div>

        <div
          className={cn(
            "flex flex-col items-center justify-between gap-4 pt-8 text-xs text-ice-slate",
            "sm:flex-row",
          )}
        >
          <ul className="flex gap-6">
            {socialLinks.map((social: NavLink): ReactElement => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  className="flex items-center gap-1.5 transition hover:text-glacier-900"
                >
                  <span className="size-1.5 rounded-full bg-glacier-300" />
                  {social.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-slate-400">© 2026 The Real You. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
