import { Icon } from '@iconify/react';
import { Box, LinkButton } from '~/components/UI';

export default function GeodeDownloadBox() {
  return (
    <Box className="lg:[grid-column:1/4]">
      <div className="flex items-center">
        <Icon
          icon="material-symbols:android"
          width={48}
          height={48}
          className="pr-3.5"
        />
        <h1 className="my-2.5 text-left text-xl font-bold text-slate-300">
          Geode cho GDVNPS Android
        </h1>
      </div>
      <p className="text-slate-300/98 pb-3.5 leading-[1.8] text-slate-300">
        Tải xuống Geode <strong>dành riêng cho GDVNPS trên Android</strong>.
      </p>
      <div>
        <GeodeDownloadButton link="https://github.com/TacoEnjoyer/gdvnps/releases/download/geode/geode-launcher-v1.4.2-gdvnps-build.apk">
          Tải xuống
        </GeodeDownloadButton>
      </div>
    </Box>
  );
}

function GeodeDownloadButton({
  link,
  children,
}: {
  link: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <LinkButton tag="anchor" target="_blank" toHref={link}>
      <div className="flex h-full w-full items-center">
        <span>
          <Icon
            icon="line-md:download"
            width={25}
            height={25}
            aria-hidden="true"
          />
        </span>
        <span className="font-medium">{children}</span>
      </div>
    </LinkButton>
  );
}
