import { ComponentPropsWithoutRef } from "react";
import { NavItem } from "~/components/NavItem";
import { navLinks } from "~/lib/constants";
import { cn } from "~/lib/helpers";

export function DesktopNavigation(props: ComponentPropsWithoutRef<"nav">) {
  return (
    <nav {...props} className={cn("pointer-events-auto hidden md:block", props.className)}>
      <ul className="flex rounded bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring ring-zinc-900 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/50">
        {navLinks.map((link) => (
          <NavItem key={link.href} href={link.href}>
            {link.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
