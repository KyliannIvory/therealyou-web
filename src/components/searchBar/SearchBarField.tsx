'use client'
import {useId, useState} from "react";
import {type LucideIcon} from "lucide-react";

export type SearchBarFieldProps = {
  icon : LucideIcon;
  title : string;
  placeholder : string;
};

// La prop « icon » est renommée « Icon » : une majuscule est obligatoire pour l'utiliser comme composant <Icon/>
const SearchBarField = ({icon : Icon, title, placeholder} : SearchBarFieldProps) => {

    const [value, setValue] = useState("");
    // id unique qui relie le <label> à son <input>
    const id = useId();

    return (
        // Grille 2 colonnes : l'icône à gauche (sur 2 lignes), le titre et le champ empilés à droite
        <li className="group grid flex-1 cursor-text grid-cols-[auto_1fr] items-center gap-x-3.5 rounded-xl border border-transparent p-3 transition hover:border-glacier-200 hover:bg-white/80">
            <div className="row-span-2 flex size-11 items-center justify-center rounded-xl border border-glacier-100 bg-white/90 text-glacier-900 shadow-sm transition group-hover:scale-105 group-hover:text-glacier-500">
                <Icon className="size-[22px]" aria-hidden="true"/>
            </div>
            <label htmlFor={id} className="text-label font-semibold tracking-wider text-ice-slate/80 uppercase">{title}</label>
            <input
                id={id}
                className="w-full truncate bg-transparent text-sm font-medium text-ice-dark placeholder:text-slate-400 focus:outline-none sm:text-base"
                placeholder={placeholder}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </li>
    );
}

export default SearchBarField;
