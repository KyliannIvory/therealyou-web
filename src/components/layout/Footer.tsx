import Link from "next/link";
import Logo from "@/components/layout/Logo";
import FooterColumn, {type FooterColumnProps, type FooterLink} from "@/components/layout/FooterColumn";

const footerColumns: FooterColumnProps[] = [
    {
        title: "Salons & Prestations",
        links: [
            { label: "Braids & Nattes Stylisées", href: "#" },
            { label: "Tissage & Confection de perruque", href: "#" },
            { label: "Rituels Nappy & Hydratation", href: "#" },
            { label: "Barbier & Rasage Traditionnel", href: "#" },
            { label: "Soins Profonds & Défrisage Doux", href: "#" },
        ],
    },
    {
        title: "Zones & Quartiers",
        links: [
            { label: "Cocody (Angré, Riviera)", href: "#" },
            { label: "Marcory & Zone 4", href: "#" },
            { label: "Plateau & Deux-Plateaux", href: "#" },
            { label: "Yopougon & Koumassi", href: "#" },
            { label: "Services Privés à Domicile", href: "#" },
        ],
    },
    {
        title: "The Real You & Légal",
        links: [
            { label: "Rejoindre le réseau Partenaires", href: "#" },
            { label: "Espace Professionnels", href: "#" },
            { label: "Politique de Confidentialité", href: "#" },
            { label: "Conditions Générales", href: "#" },
            { label: "Contact & Support WhatsApp", href: "#" },
        ],
    },
];

const socialLinks: FooterLink[] = [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
];

const Footer = () => {
    return (
        <footer className="glass-footer mt-auto">
            <div className="page-container pt-14 pb-10">

                <div className="grid gap-10 border-b border-glacier-200/50 pb-12 md:grid-cols-2 lg:grid-cols-5">
                    <div className="space-y-4 lg:col-span-2">
                        <Logo tagline="Côte d'Ivoire"/>
                        <p className="max-w-sm text-sm leading-relaxed font-light text-ice-slate">
                            La plateforme de référence en Côte d&apos;Ivoire qui réunit les meilleurs salons,
                            maîtres barbiers et artisans capillaires d&apos;Abidjan.
                        </p>
                    </div>

                    {footerColumns.map((column) => (
                        <FooterColumn key={column.title} title={column.title} links={column.links}/>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-ice-slate sm:flex-row">
                    <ul className="flex gap-6">
                        {socialLinks.map((social) => (
                            <li key={social.label}>
                                <Link href={social.href} className="flex items-center gap-1.5 transition hover:text-glacier-900">
                                    <span className="size-1.5 rounded-full bg-glacier-300"/>
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
}
export default Footer;
