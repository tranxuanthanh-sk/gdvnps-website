import { Icon } from '@iconify/react';
import { Box, LinkButton } from '~/components/UI';

interface OSDownloadBoxPropsType {
  OS_name: string;
  OS_icon: string;
  OS_downloadLink: string | undefined;
}

export default function OSDownloadBox({
  OS_name,
  OS_icon,
  OS_downloadLink,
}: OSDownloadBoxPropsType) {
  return (
    <Box>
      <div className="flex items-center">
        <Icon icon={OS_icon} width={48} height={48} className="pr-3.5" />
        <h1 className="my-2.5 text-left text-xl font-bold text-slate-300">
          {OS_name}
        </h1>
      </div>
      <p className="text-slate-300/98 pb-3.5 leading-[1.8] text-slate-300">
        Tải xuống GDVNPS cho <strong>{OS_name}</strong>.
      </p>
      <div>
        <OSDownloadButton link={OS_downloadLink}>Tải xuống</OSDownloadButton>
      </div>
    </Box>
  );
}

function OSDownloadButton({
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
