import Link, { LinkProps } from "next/link";
type Icon = (props: any) => JSX.Element;

export function SocialLink({ icon: Icon, href, ...props }: { icon: Icon; href: string } & LinkProps) {
  return (
    <Link href={href} className="group -m-1 rounded p-1" {...props}>
      <Icon className="h-6 w-6 text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
    </Link>
  );
}
