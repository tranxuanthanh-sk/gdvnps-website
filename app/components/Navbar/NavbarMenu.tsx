import { useContext, useState } from 'react';
import clsx from 'clsx';
import { useTimeout } from 'usehooks-ts';
import { NavbarContext } from './NavbarContent';
import { LinkTag } from '../UI';
import { StarBG } from '../shared/StarBG';
import styles from './Navbar.module.scss';

type NavLinkObjType = {
  id: number;
  name: string;
  href: string;
}[];

export default function NavbarMenu() {
  const { navbarOpen, openNavbarMenu } = useContext(NavbarContext);
  const [loaded, setLoaded] = useState<boolean>(false);

  useTimeout(() => {
    setLoaded(!loaded);
  }, 100);

  const navLinks: NavLinkObjType = [
    { id: 1, name: 'TRANG CHỦ', href: '/' },
    { id: 2, name: 'TẢI XUỐNG', href: '/download' },
    { id: 3, name: 'FAQ', href: 'faq' },
  ];

  return (
    <div
      className={clsx(styles.navbar__menu, {
        [styles['navbar__menu--loaded']]: loaded,
        [styles['navbar__menu--opened']]: navbarOpen,
      })}
    >
      <div className="absolute left-0 top-0 flex h-full w-full max-w-screen-xl">
        <div
          className={clsx(styles['navbar__menu-wrap'], {
            [styles['navbar__menu-wrap--opened']]: navbarOpen,
          })}
        >
          {navLinks.map((navLink) => (
            <NavbarMenuLink
              key={navLink.id}
              toHref={navLink.href}
              onClick={openNavbarMenu}
            >
              {navLink.name}
            </NavbarMenuLink>
          ))}
        </div>

        <StarBG className="absolute top-0 grayscale" />
      </div>
    </div>
  );
}

interface NavbarMenuLinkPropsType {
  children?: React.ReactNode;
  onClick?: () => void;
  toHref?: string;
}

const NavbarMenuLink = ({
  children,
  onClick,
  toHref,
  ...props
}: NavbarMenuLinkPropsType) => {
  return (
    <>
      {
        <LinkTag
          tag="navlink"
          toHref={toHref}
          variant="navbar"
          onClick={onClick}
          className="my-6"
          {...props}
        >
          {children}
        </LinkTag>
      }
    </>
  );
};
