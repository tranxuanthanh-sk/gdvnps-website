import { Link, NavLink } from "@remix-run/react";
import clsx from "clsx";
// import styles from "~/style/UI/LinkTag.module.css";

interface LinkTagPropsType {
  tag?: "link" | "anchor" | "navlink";
  toHref?: string;
  variant?: "default" | "navbar" | "normal";
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function LinkTag({
  tag = "link",
  toHref,
  variant = "default",
  className,
  onClick,
  children,
  ...props
}: LinkTagPropsType) {
  const linkTagVariants = clsx(className, {
    "underline font-sans": variant === "default",
    "text-slate-300 font-sans font-semibold block w-full text-4xl duration-150 hover:text-orange-400":
      variant === "navbar",
  });

  switch (tag) {
    case "link":
      return (
        <Link
          to={`${toHref}`}
          className={linkTagVariants}
          onClick={onClick}
          {...props}
        >
          {children}
        </Link>
      );

    case "anchor":
      return (
        <a
          href={`${toHref}`}
          className={linkTagVariants}
          onClick={onClick}
          {...props}
        >
          {children}
        </a>
      );

    case "navlink":
      return (
        <NavLink
          to={`${toHref}`}
          className={linkTagVariants}
          onClick={onClick}
          {...props}
        >
          {children}
        </NavLink>
      );

    default:
      return null;
  }
}
