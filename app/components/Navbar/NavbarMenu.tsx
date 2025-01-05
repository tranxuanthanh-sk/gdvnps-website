import { useContext } from "react";
import clsx from "clsx";
import { NavbarContext } from "./NavbarContent";
import { LinkTag } from "../UI";
import { StarBG } from "../shared/StarBG";
import styles from "~/style/NavbarMenu.module.css";

export default function NavbarMenu() {
  const { navbarOpen, openNavbarMenu } = useContext(NavbarContext);

  return (
    <div
      className={clsx(styles.navbar__menu, {
        [styles["navbar__menu--opened"]]: navbarOpen,
      })}
    >
      <div className="w-full absolute h-full top-0 left-0 flex">
        <div className="flex mx-5 lg:mx-14 items-center flex-col bg-transparent w-fit justify-center">
          <LinkTag
            tag="link"
            variant="navbar"
            toHref="/"
            className="my-6"
            onClick={openNavbarMenu}
          >
            TRANG CHỦ
          </LinkTag>
          <LinkTag
            tag="link"
            variant="navbar"
            toHref="/download"
            className="my-6"
            onClick={openNavbarMenu}
          >
            TẢI XUỐNG
          </LinkTag>
        </div>

        <StarBG className="grayscale absolute top-0" styles={{}} />
      </div>
    </div>
  );
}
