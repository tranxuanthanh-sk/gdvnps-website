import clsx from "clsx";
import { LinkButton } from "~/components/UI";
import styles from "./HeroHeader.module.scss"

export default function HeroHeader() {
  return (
    <div className="sm:max-w-screen-md flex flex-col font-sans text-center px-4 mx-auto gap-5">
      <div className={clsx(styles['font-hero'])}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Chào mừng đã đến với
        </h1>
        <h1 className="text-6xl md:text-7xl lg:text-[4.85rem] font-bold mt-0.5">
          GDVNPS
        </h1>
      </div>
      <p style={{wordWrap: "break-word"}} className="text-slate-300/90 text-base lg:text-lg tracking-wide font-normal leading-[1.85]">Được lập ra vào 2024, GDVNPS là máy chủ Geometry Dash Private Server dành cho <strong>cộng đồng người chơi Geometry Dash tại Việt Nam</strong></p>
      <div className="flex flex-row items-center justify-center gap-5 z-30">
        <LinkButton tag="link" toHref="/download" variant="fill" className="duration-300 transition-all hover:[transform:translateY(-0.3rem)]"><strong>Tải xuống</strong></LinkButton>
        <LinkButton tag="anchor" toHref="https://gdvnps.ps.fhgdps.com/dashboard/" variant="outline" className="duration-300 transition-all hover:[transform:translateY(-0.3rem)]"><strong>Dashboard</strong></LinkButton>
      </div>
    </div>
  );
}