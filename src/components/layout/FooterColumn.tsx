import type { ReactElement } from "react";
import Link from "next/link";
import { type NavLink, type NavSection } from "@/config/navigation";

type FooterColumnProps = NavSection;

const FooterColumn = ({ title, links }: FooterColumnProps): ReactElement => {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-bold tracking-widest text-glacier-900 uppercase">{title}</h3>
      <ul className="space-y-2">
        {links.map((link: NavLink): ReactElement => (
          <li key={link.label}>
            <Link href={link.href} className="footer-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
