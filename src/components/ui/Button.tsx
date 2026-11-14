import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-60 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background shadow-soft hover:-translate-y-0.5 hover:shadow-lift hover:bg-accent hover:text-accent-contrast",
  secondary:
    "border border-border-strong bg-surface text-foreground hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent",
  ghost: "text-muted hover:bg-surface-2 hover:text-foreground",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

interface StyleProps {
  variant?: Variant;
  size?: Size;
}

export function buttonClasses({ variant = "primary", size = "md" }: StyleProps = {}, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

/** Anchor styled as a button. External links automatically open in a new tab. */
export function ButtonLink({
  variant,
  size,
  className,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & StyleProps & { href: string }) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={buttonClasses({ variant, size }, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    />
  );
}

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & StyleProps) {
  return <button type={type} className={buttonClasses({ variant, size }, className)} {...props} />;
}
