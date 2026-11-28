export type NavLink = {
  label: string;
  href: string;
};

export type NavSection = {
  title: string;
  links: NavLink[];
};

export const footerSections: NavSection[] = [
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

export const socialLinks: NavLink[] = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
];
