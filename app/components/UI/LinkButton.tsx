import { Link } from "@remix-run/react";
import clsx from "clsx";

interface LinkButtonPropsType {
  tag?: "link" | "anchor";
  toHref?: string;
  variant?: "fill" | "outline";
  className?: string;
  children?: React.ReactNode;
}

export default function LinkButton({
  tag = "link",
  toHref,
  variant = "fill",
  className,
  children,
  ...props
}: LinkButtonPropsType) {
  const linkButtonVariants = clsx(className, {
    "no-underline text-slate-200 px-3.5 py-4 inline-block rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-600":
      variant === "fill",
    "no-underline bg-clip-border border-orange-500 border-2 border-transparent text-slate-200 px-3.5 py-4 inline-block rounded-full bg-transparent":
      variant === "outline",
  });

  switch (tag) {
    case "link":
      return (
        <Link to={`${toHref}`} className={linkButtonVariants} {...props}>
          {children}
        </Link>
      );

    case "anchor":
      return (
        <a href={`${toHref}`} className={linkButtonVariants} {...props}>
          {children}
        </a>
      );

    default:
      return null;
  }
}
