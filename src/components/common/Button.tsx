import Link from "next/link";
import { cn } from "~/lib/helpers";

const variantStyles = {
  primary:
    "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70",
  secondary:
    "bg-white text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 ring ring-zinc-900",
};

interface Props {
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
  children: React.ReactNode;
}

export function Button({ variant = "primary", className, href, children, ...props }: Props) {
  className = cn(
    "inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 font-semibold text-sm outline-offset-2 transition active:transition-none",
    variantStyles[variant],
    className
  );

  return href ? (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  ) : (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
