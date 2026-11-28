import type { ReactElement, ReactNode } from "react";
import Link from "next/link";
import Logo from "@/components/layout/Logo";
import UserMenu from "@/components/layout/UserMenu";
import { buttonVariants } from "@/components/ui/Button";

type NavbarProps = {
  children?: ReactNode;
};

const Navbar = ({ children }: NavbarProps): ReactElement => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 glass-bar">
      <div className="page-container flex h-navbar items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <Logo tagline="Beauté & bien-être" />
        </Link>
        <div className="flex-1">{children}</div>
        <nav className="hidden items-center gap-4 md:flex">
          <Link href="#" className={buttonVariants({ intent: "ghost", size: "sm" })}>
            Se connecter
          </Link>
          <Link href="#" className={buttonVariants()}>
            S&apos;inscrire
          </Link>
        </nav>

        <div className="md:hidden">
          <UserMenu />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
