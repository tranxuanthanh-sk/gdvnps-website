import { Link } from '@remix-run/react';
import clsx from 'clsx';

interface LinkButtonPropsType {
  tag?: 'link' | 'anchor';
  toHref?: string;
  target: string;
  variant?: 'fill' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export default function LinkButton({
  tag = 'link',
  toHref,
  target,
  variant = 'fill',
  className,
  children,
  ...props
}: LinkButtonPropsType) {
  const linkButtonVariants = clsx(className, {
    'rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-600 text-slate-200 no-underline':
      variant === 'fill',
    'inline-block rounded-full border-2 border-orange-500 bg-transparent text-slate-200 no-underline':
      variant === 'outline',
  });

  switch (tag) {
    case 'link':
      return (
        <Link
          to={`${toHref}`}
          target={target}
          className={`inline-block px-3.5 py-4 font-sans ${linkButtonVariants}`}
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
          className={`inline-block px-3.5 py-4 font-sans ${linkButtonVariants}`}
          {...props}
        >
          {children}
        </a>
      );

    default:
      return null;
  }
}
