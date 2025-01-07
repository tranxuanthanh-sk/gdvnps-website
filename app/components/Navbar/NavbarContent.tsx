import { useState, createContext } from "react";
import { Link } from "@remix-run/react";
import { Icon } from "@iconify/react";
import GDVNPS_Icon from "~/assets/gdvnps-no-bg.svg";
import NavbarMenu from "./NavbarMenu";

interface NavbarContextType {
  navbarOpen: boolean;
  openNavbarMenu: () => void;
}

export const NavbarContext = createContext<NavbarContextType>({
  navbarOpen: false,
  openNavbarMenu: () => {},
});

export default function NavbarContent() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  const openNavbarMenu = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <NavbarContext.Provider value={{ navbarOpen, openNavbarMenu }}>
      <div className="h-fit w-fit z-30">
        <Link to="/" className="no-underline inline-block">
          <img
            src={GDVNPS_Icon}
            alt="GDVNPS's logo"
            width={58}
            height={58}
            className="pointer-events-none select-none"
          />
        </Link>
      </div>
      <div className="z-50">
        <button onClick={openNavbarMenu} className="cursor-pointer">
          <Icon
            icon={!navbarOpen ? "ri:menu-3-fill" : "ri:close-large-line"}
            width="30"
            height="30"
            className="fill-slate-200"
          />
        </button>
      </div>
      <NavbarMenu />
    </NavbarContext.Provider>
  );
}
