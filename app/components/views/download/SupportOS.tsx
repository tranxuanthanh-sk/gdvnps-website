import { Icon } from '@iconify/react';

export default function SupportOS() {
  return (
    <div className="mt-5 grid w-full grid-cols-3 items-center justify-center justify-items-center gap-5">
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
  title: string;
}

function OSIcon({ key, icon, title }: OSIconPropsType) {
  return (
    <Icon icon={icon} key={key} aria-label={title} width={30} height={30} />
  );
}
