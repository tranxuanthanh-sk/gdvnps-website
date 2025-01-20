import { Icon } from '@iconify/react';
import { LinkButton } from '~/components/UI';

export default function DownloadButton({
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
        {children}
      </div>
    </LinkButton>
  );
}
