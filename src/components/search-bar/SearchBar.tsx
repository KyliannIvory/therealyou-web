"use client";

import { type ReactElement } from "react";
import { MapPin, Scissors, Search } from "lucide-react";
import SearchBarField, { type SearchBarFieldProps } from "@/components/search-bar/SearchBarField";
import DateField from "@/components/search-bar/DateField";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const fields: SearchBarFieldProps[] = [
  {
    icon: Scissors,
    name: "prestation",
    title: "Prestation ou salon",
    placeholder: "Tresses, nattes, perruque, locks…",
  },
  { icon: MapPin, name: "lieu", title: "Où ?", placeholder: "Abidjan, Cocody, Marcory…" },
];

const SearchBar = (): ReactElement => {
  return (
    <form action="/recherche" className={styles.form}>
      <ul className={styles.fields}>
        {fields.map((field: SearchBarFieldProps): ReactElement => (
          <SearchBarField
            key={field.name}
            icon={field.icon}
            name={field.name}
            title={field.title}
            placeholder={field.placeholder}
          />
        ))}
        <DateField />
      </ul>

      <Button type="submit" size="lg" shape="rounded" className={styles.submit}>
        <Search className={styles.submitIcon} aria-hidden="true" />
        Trouver
      </Button>
    </form>
  );
};

export default SearchBar;

const styles = {
  form: cn(
    "flex w-full max-w-5xl flex-col gap-3 rounded-2xl p-3 glacier-frost",
    "sm:p-4 md:flex-row md:items-center",
  ),
  fields: "flex flex-1 flex-col gap-3 md:flex-row md:items-center",
  submit: "group w-full shrink-0 md:w-40",
  submitIcon: "size-5 text-glacier-300 transition group-hover:scale-110",
} as const;
