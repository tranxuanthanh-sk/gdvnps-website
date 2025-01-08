import { useContext, useState } from "react";
import clsx from "clsx";
import { useTimeout } from "usehooks-ts";
import { NavbarContext } from "./NavbarContent";
import { LinkTag } from "../UI";
import { StarBG } from "../shared/StarBG";
import styles from "~/style/NavbarMenu.module.css";

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
    { id: 1, name: "TRANG CHỦ", href: "/" },
    { id: 2, name: "TẢI XUỐNG", href: "/download" },
    { id: 3, name: "FAQ", href: "faq" },
  ];

  return (
    <div
      className={clsx(styles.navbar__menu, {
        [styles["navbar__menu--loaded"]]: loaded,
        [styles["navbar__menu--opened"]]: navbarOpen,
      })}
    >
      <div className="w-full absolute h-full top-0 left-0 flex">
        <div
          className={clsx(styles["navbar__menu-wrap"], {
            [styles["navbar__menu-wrap--opened"]]: navbarOpen,
          })}
        >
          {navLinks.map((navLink) => (
            <LinkTag
              key={navLink.id}
              tag="link"
              toHref={navLink.href}
              variant="navbar"
              onClick={openNavbarMenu}
              className="my-6"
            >
              {navLink.name}
            </LinkTag>
          ))}
        </div>

        <StarBG className="grayscale absolute top-0" styles={{}} />
      </div>
    </div>
  );
}
