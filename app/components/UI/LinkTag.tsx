import { Link } from "@remix-run/react";
import clsx from "clsx";
import styles from "~/style/UI/LinkTag.module.css";

interface LinkTagPropsType {
  tag?: "link" | "anchor";
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
    [styles.default]: variant === "default",
    [styles.navbar]: variant === "navbar",
  });

  if (tag === "link") {
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
  } else if (tag === "anchor") {
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
  }
}
