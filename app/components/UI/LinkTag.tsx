import { Link, NavLink } from '@remix-run/react';
import clsx from 'clsx';
// import styles from './styles/LinkTag.module.scss';

interface LinkTagPropsType {
  tag?: 'link' | 'anchor' | 'navlink';
  toHref?: string;
  target?: string;
  variant?: 'navbar' | 'normal';
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function LinkTag({
  tag = 'link',
  toHref,
  target,
  variant = 'normal',
  className,
  onClick,
  children,
  ...props
}: LinkTagPropsType) {
  const linkTagVariants = clsx(className, {
    'font-sans text-slate-300 underline': variant === 'normal',
    'block w-full text-4xl font-semibold text-slate-300 duration-150 hover:text-orange-400 no-underline':
      variant === 'navbar',
  });

  switch (tag) {
    case 'link':
      return (
        <Link
          to={`${toHref}`}
          target={target}
          className={linkTagVariants}
          onClick={onClick}
          {...props}
        >
          {children}
        </Link>
      );

    case 'anchor':
      return (
        <a
          href={`${toHref}`}
          target={target}
          className={linkTagVariants}
          onClick={onClick}
          {...props}
        >
          {children}
        </a>
      );

    case 'navlink':
      return (
        <NavLink
          to={`${toHref}`}
          target={target}
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
