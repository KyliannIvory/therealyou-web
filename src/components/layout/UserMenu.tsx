import Link from "next/link";
import { CircleUserRound } from "lucide-react";

// Menu du compte, affiché uniquement sur mobile.
// L'ouverture et la fermeture sont gérées par le navigateur grâce à
// l'attribut HTML `popover` : pas besoin de useState.
const UserMenu = () => {
    return (
        <>
            {/* Le bouton : popoverTarget pointe vers l'id du menu à ouvrir */}
            <button
                type="button"
                popoverTarget="user-menu"
                aria-label="Ouvrir le menu du compte"
                className="glacier-pill flex size-10 items-center justify-center rounded-full text-glacier-900"
            >
                <CircleUserRound className="size-5" aria-hidden="true" />
            </button>

            {/* Le menu : caché tant que le bouton n'a pas été cliqué */}
            <div id="user-menu" popover="auto" className="popover-panel">
                <nav className="flex flex-col gap-1">
                    <Link href="#" className="btn-ghost px-4 py-2.5">
                        Se connecter
                    </Link>
                    <Link href="#" className="btn-ice py-2.5">
                        S&apos;inscrire
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default UserMenu;
