import { cn } from "~/lib/helpers";

export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn(className, "prose dark:prose-invert")}>{children}</div>;
}
