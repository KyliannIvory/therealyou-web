"use client";
import { type ChangeEvent, type ReactElement, useId, useState } from "react";
import { type LucideIcon } from "lucide-react";

export type SearchBarFieldProps = {
  icon: LucideIcon;
  name: string;
  title: string;
  placeholder: string;
};

const SearchBarField = ({
  icon: Icon,
  name,
  title,
  placeholder,
}: SearchBarFieldProps): ReactElement => {
  const [value, setValue] = useState<string>("");
  const id: string = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <li className="search-divider md:flex-[3] md:first:flex-[4]">
      <label htmlFor={id} className="group search-field cursor-text">
        <span className="search-field-icon">
          <Icon className="size-[22px]" aria-hidden="true" />
        </span>
        <span className="search-field-label">{title}</span>
        <input
          id={id}
          name={name}
          className="search-field-value"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </label>
    </li>
  );
};

export default SearchBarField;
