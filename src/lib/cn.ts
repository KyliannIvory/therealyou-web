import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["label"],
      shadow: ["glacier-sm", "glacier-glow", "glacier-up"],
      spacing: ["navbar"],
    },
  },
});

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
