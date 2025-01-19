import { HashLink } from 'react-router-hash-link';
import { Icon } from '@iconify/react';

export default function SupportOS() {
  return (
    <div className="my-5 grid w-full grid-cols-3 items-center justify-center justify-items-center gap-5">
      <OSIcons />
    </div>
  );
}

type OSListObjType = {
  id: number;
  icon_name: string;
  title: string;
}[];

function OSIcons() {
  const OSList: OSListObjType = [
    { id: 1, icon_name: 'ri:windows-fill', title: 'Windows' },
    { id: 2, icon_name: 'material-symbols:android', title: 'Android' },
    { id: 3, icon_name: 'simple-icons:ios', title: 'iOS' },
  ];

  return (
    <>
      {OSList.map((OSListItems) => (
        <OSIcon
          key={OSListItems.id}
          hashHref={`#${OSListItems.title.toLowerCase()}`}
          icon={OSListItems.icon_name}
          title={OSListItems.title}
        />
      ))}
    </>
  );
}

interface OSIconPropsType {
  key?: number;
  icon: string;
  hashHref: string;
  title: string;
}

function OSIcon({ key, icon, hashHref, title }: OSIconPropsType) {
  return (
    <HashLink key={key} to={hashHref} title={title} className="inline-block">
      <Icon icon={icon} width={55} height={55} />
    </HashLink>
  );
}
