import type { ComponentProps, ReactElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 text-sm font-medium transition",
  {
    variants: {
      intent: {
        primary: [
          "border border-white/30 text-white",
          "bg-linear-to-r from-glacier-900 via-slate-800 to-glacier-900",
          "hover:scale-[1.02] hover:shadow-glacier-glow active:scale-[0.98]",
        ],
        ghost: "text-ice-slate hover:bg-white/60 hover:text-glacier-900",
      },
      size: {
        sm: "px-3 py-2",
        md: "px-5 py-2.5",
        lg: "h-14 px-6 font-semibold tracking-wide",
      },
      shape: {
        pill: "rounded-full",
        rounded: "rounded-xl",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      shape: "pill",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = ComponentProps<"button"> & ButtonVariants;

const Button = ({
  intent,
  size,
  shape,
  className,
  type = "button",
  ...props
}: ButtonProps): ReactElement => {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ intent, size, shape }), className)}
      {...props}
    />
  );
};

export default Button;
