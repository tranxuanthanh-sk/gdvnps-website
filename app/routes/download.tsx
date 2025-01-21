import { useState, useEffect } from 'react';
import type { MetaFunction } from '@remix-run/node';
import { GridRow } from '~/components/UI';
import {
  SupportOS,
  OSDownloadBox,
  GeodeDownloadBox,
} from '~/components/views/download';

export const meta: MetaFunction = () => {
  return [
    { title: 'Tải xuống | GDVNPS' },
    {
      name: 'description',
      content: 'Tải xuống bản phát hành GDVNPS mới nhất cho các thiết bị',
    },
  ];
};

interface ReleaseDataType {
  tag_name: string;
  assets: {
    name: string;
    browser_download_url: string;
  }[];
}

export default function Download() {
  const [release, setRelease] = useState<ReleaseDataType | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/TacoEnjoyer/gdvnps/releases/194288434')
      .then((res) => res.json())
      .then((data: ReleaseDataType) => {
        console.log(data);
        setRelease(data);
      })
      .catch((error) => console.error('Error fetching release data:', error));
  }, []);

  const getDownloadLink = (osKeyword: string) => {
    return release?.assets.find((asset) =>
      asset.name.toLowerCase().includes(osKeyword.toLowerCase()),
    )?.browser_download_url;
  };

  return (
    <>
      <main className="flex h-[80vh] w-full items-center justify-center bg-transparent xl:max-h-[800px]">
        <div>
          <h1 className="text-center text-4xl font-bold text-gray-300 md:text-5xl lg:text-6xl">
            Tải xuống
          </h1>

          {release ? (
            <p className="z-30 text-center text-base font-normal leading-[1.85] tracking-wide text-slate-300/90 lg:text-lg">
              Phiên bản: <strong>{release.tag_name}</strong>
            </p>
          ) : (
            <p className="z-30 text-center text-base font-normal leading-[1.85] tracking-wide text-slate-300/90 lg:text-lg">
              Phiên bản: Đang kiểm tra...
            </p>
          )}
        </div>
      </main>
      <div className="z-40 flex items-center justify-center border-t border-t-[#2f333d] bg-gradient-to-t from-[#0c0f19]/0 to-[#0c0f19] py-10">
        <div className="m-1 mt-36 flex max-w-screen-xl flex-col items-center justify-center gap-4 px-6 lg:m-20">
          <SupportOS />

          <GridRow>
            <OSDownloadBox
              OS_name="Windows"
              OS_icon="ri:windows-fill"
              OS_downloadLink={getDownloadLink('zip')}
            />
            <OSDownloadBox
              OS_name="Android"
              OS_icon="material-symbols:android"
              OS_downloadLink={getDownloadLink('apk')}
            />
            <OSDownloadBox
              OS_name="iOS"
              OS_icon="ic:baseline-apple"
              OS_downloadLink={getDownloadLink('ipa')}
            />
            <GeodeDownloadBox />
          </GridRow>
        </div>
      </div>
    </>
  );
}
