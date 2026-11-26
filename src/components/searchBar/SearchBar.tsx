'use client'
// Client Component : les icônes lucide sont des composants (des fonctions),
// on ne peut pas les envoyer d'un Server Component vers un Client Component.
import {Calendar, MapPin, Scissors} from "lucide-react";
import SearchBarField, {type SearchBarFieldProps} from "@/components/searchBar/SearchBarField";

const fields : SearchBarFieldProps[] = [
    {icon : Scissors, title : "Prestation ou salon", placeholder : "Tresses, nattes, perruque, locks…"},
    {icon : MapPin, title : "Où ?", placeholder : "Abidjan, Cocody, Marcory…"},
    {icon : Calendar, title : "Quand ?", placeholder : "Aujourd'hui & Demain" }
]

const SearchBar = () => {
    return (
        <div className="glacier-frost w-full max-w-5xl rounded-2xl p-3 sm:p-4">
            <ul className="flex flex-col gap-3 md:flex-row">
                {fields.map((field) => (
                    <SearchBarField key={field.title} icon={field.icon} title={field.title} placeholder={field.placeholder}/>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;
