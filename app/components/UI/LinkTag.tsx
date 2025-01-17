import { Link, NavLink } from "@remix-run/react";
import clsx from "clsx";
import styles from "./styles/LinkTag.module.scss";

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
    [styles.navbar]: variant === "navbar",
    [styles.normal]: variant === "normal",
  });

  switch (tag) {
    case "link":
      return (
        <Link
          to={`${toHref}`}
          className={`${clsx(styles.link)} ${linkTagVariants}`}
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
          className={`${clsx(styles.link)} ${linkTagVariants}`}
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
          className={`${clsx(styles.link)} ${linkTagVariants}`}
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
