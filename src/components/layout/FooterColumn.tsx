import Link from "next/link";

export type FooterLink = {
    label: string;
    href: string;
};

export type FooterColumnProps = {
    title: string;
    links: FooterLink[];
};

const FooterColumn = ({ title, links }: FooterColumnProps) => {
    return (
        <div className="space-y-3">
            <h3 className="text-xs font-bold tracking-widest text-glacier-900 uppercase">{title}</h3>
            <ul className="space-y-2">
                {links.map((link) => (
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
