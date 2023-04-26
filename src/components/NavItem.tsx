import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cn } from "~/lib/helpers";

export function NavItem({ href, children }: LinkProps & { children: React.ReactNode }) {
  let isActive = useRouter().pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "relative block px-3 py-2 font-bold transition",
          isActive ? "text-indigo-500 dark:text-indigo-400" : "hover:text-indigo-500 dark:hover:text-indigo-400"
        )}
      >
        {children}
      </Link>
    </li>
  );
}
