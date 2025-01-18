import clsx from 'clsx';
import { LinkButton } from '~/components/UI';
import styles from './HeroHeader.module.scss';

export default function HeroHeader() {
  return (
    <div className="mx-auto flex flex-col gap-5 px-4 text-center font-sans sm:max-w-screen-md">
      <div className={clsx(styles['font-hero'])}>
        <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
          Chào mừng đã đến với
        </h1>
        <h1 className="mt-0.5 text-6xl font-bold md:text-7xl lg:text-[4.85rem]">
          GDVNPS
        </h1>
      </div>
      <p
        style={{ wordWrap: 'break-word' }}
        className="z-30 text-base font-normal leading-[1.85] tracking-wide text-slate-300/90 lg:text-lg"
      >
        Được lập ra vào 2024, GDVNPS là máy chủ Geometry Dash Private Server
        dành cho{' '}
        <strong>
          cộng đồng người chơi Geometry Dash{' '}
          <span className="text-orange-400">tại Việt Nam</span>
        </strong>
      </p>
      <div className="z-30 flex flex-row items-center justify-center gap-5">
        <LinkButton
          tag="link"
          toHref="/download"
          variant="fill"
          className="transition-all duration-300 hover:[transform:translateY(-0.3rem)]"
        >
          <strong>Tải xuống</strong>
        </LinkButton>
        <LinkButton
          tag="anchor"
          toHref="https://gdvnps.ps.fhgdps.com/dashboard/"
          variant="outline"
          className="transition-all duration-300 hover:[transform:translateY(-0.3rem)]"
        >
          <strong>Dashboard</strong>
        </LinkButton>
      </div>
    </div>
  );
}
