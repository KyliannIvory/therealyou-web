import type { ReactElement } from "react";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const UserMenu = (): ReactElement => {
  return (
    <>
      <button
        type="button"
        popoverTarget="user-menu"
        aria-label="Ouvrir le menu du compte"
        className={cn(
          "flex size-10 items-center justify-center rounded-full",
          "text-glacier-900 glacier-pill",
        )}
      >
        <CircleUserRound className="size-5" aria-hidden="true" />
      </button>

      <div id="user-menu" popover="auto" className="popover-panel">
        <nav className="flex flex-col gap-1">
          <Link href="#" className={cn(buttonVariants({ intent: "ghost" }), "justify-start px-4")}>
            Se connecter
          </Link>
          <Link href="#" className={buttonVariants()}>
            S&apos;inscrire
          </Link>
        </nav>
      </div>
    </>
  );
};

export default UserMenu;
