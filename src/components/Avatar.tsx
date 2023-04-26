import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import avatarImage from "~/images/avatar.jpg";
import { cn } from "~/lib/helpers";

export function Avatar({ large = false, ...props }: ComponentPropsWithoutRef<"a"> & { large?: boolean }) {
  return (
    <Link {...props} href="/" aria-label="Home" className={cn(props.className, "pointer-events-auto")}>
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? "4rem" : "2.25rem"}
        className={cn("rounded-full bg-zinc-100 object-cover dark:bg-zinc-800", large ? "h-16 w-16" : "h-9 w-9")}
        priority
      />
    </Link>
  );
}

export function AvatarContainer(props: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        props.className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/50 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/50"
      )}
      {...props}
    />
  );
}
