import type {ReactNode} from "react";
import Link from "next/link";
import Logo from "@/components/layout/Logo";
import UserMenu from "@/components/layout/UserMenu";

type NavbarProps = {
    children? : ReactNode;
};

const Navbar = ({children} : NavbarProps) => {
    
    return (
        <header className="glass-bar fixed inset-x-0 top-0 z-50">
            <div className="page-container flex h-navbar items-center justify-between gap-6">
                <Link href="/" className="shrink-0">
                    <Logo tagline="Beauté & bien-être"/>
                </Link>
                <div className="flex-1">
                    {children}
                </div>
                {/* Bureau : les deux boutons visibles */}
                <nav className="hidden items-center gap-4 md:flex">
                    <Link href="#" className ="btn-ghost px-3 py-2">Se connecter</Link>
                    <Link href="#" className="btn-ice px-5 py-2.5">S&apos;inscrire</Link>
                </nav>

                {/* Mobile : une icône qui ouvre le menu */}
                <div className="md:hidden">
                    <UserMenu/>
                </div>

            </div>
        </header>
    );
}
export default Navbar;