import { Icon } from "@iconify/react";
import GDVNPS_Icon from "~/assets/gdvnps-no-bg.svg";

export default function NavbarContent() {
  return(
    <>
      <div className="h-fit w-fit">
        <a href="/" className="no-underline inline-block">
          <img src={GDVNPS_Icon} alt="GDVNPS's logo" width={58} height={58} className="pointer-events-none select-none" />
        </a>
      </div>
      <div>
        <button className="[unset:all]">
          <Icon icon="ri:menu-3-fill" width="30" height="30" className="fill-slate-200" />
        </button>
      </div>
    </>
  )
}