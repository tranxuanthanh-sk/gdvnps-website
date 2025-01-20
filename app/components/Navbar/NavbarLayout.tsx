import { useState } from 'react';
import { useEventListener } from 'usehooks-ts';
import clsx from 'clsx';
import styles from './Navbar.module.scss';

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navbarOnScroll, setNavbarOnScroll] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavbarOnScroll(true);
    } else {
      setNavbarOnScroll(false);
    }
  };

  useEventListener('scroll', handleScroll);

  return (
    <nav
      className={clsx(styles.navbar, {
        [styles['navbar--active']]: navbarOnScroll,
      })}
    >
      <nav className="flex w-full max-w-screen-xl items-center justify-between">
        {children}
      </nav>
    </nav>
  );
}
