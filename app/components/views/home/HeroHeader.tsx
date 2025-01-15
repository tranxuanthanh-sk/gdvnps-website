import clsx from "clsx";
import styles from "./HeroHeader.module.scss"

export default function HeroHeader() {
  return (
    <div className={clsx(styles['font-hero'], "font-sans text-center px-4 mx-6 lg:mx-36")}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        Chào mừng đã đến với
      </h1>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-0.5">
        GDVNPS
      </h1>
      <p style={{wordWrap: "break-word"}} className="text-slate-300/90 py-6 px-20 text-base lg:text-lg tracking-wide font-normal leading-[1.85]">Lập ra vào 2024, GDVNPS là máy chủ Geometry Dash Private Server dành cho <strong>cộng đồng người chơi Geometry Dash tại Việt Nam</strong></p>
    </div>
  );
}
