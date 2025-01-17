import { Link } from '@remix-run/react';
import clsx from 'clsx';
import styles from './styles/LinkButton.module.scss';

interface LinkButtonPropsType {
  tag?: 'link' | 'anchor';
  toHref?: string;
  variant?: 'fill' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export default function LinkButton({
  tag = 'link',
  toHref,
  variant = 'fill',
  className,
  children,
  ...props
}: LinkButtonPropsType) {
  const linkButtonVariants = clsx(className, {
    [styles.fill]: variant === 'fill',
    [styles.outline]: variant === 'outline',
  });

  switch (tag) {
    case 'link':
      return (
        <Link
          to={`${toHref}`}
          className={`${clsx(styles['button-link'])} ${linkButtonVariants}`}
          {...props}
        >
          {children}
        </Link>
      );

    case 'anchor':
      return (
        <a
          href={`${toHref}`}
          className={`${clsx(styles['button-link'])} ${linkButtonVariants}`}
          {...props}
        >
          {children}
        </a>
      );

    default:
      return null;
  }
}
