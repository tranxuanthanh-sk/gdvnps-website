import { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Navbar.module.scss';

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navbarOnScroll, setNavbarOnScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarOnScroll(true);
      } else {
        setNavbarOnScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
