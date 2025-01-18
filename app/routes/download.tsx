import { useState, useEffect } from 'react';
import type { MetaFunction } from '@remix-run/node';

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
  name: string;
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

  return (
    <>
      <main className="flex h-[80vh] w-full items-center justify-center bg-transparent xl:max-h-[800px]">
        <div>
          <h1 className="text-4xl font-bold text-gray-300 md:text-5xl lg:text-6xl">
            Tải xuống
          </h1>
          {release ? (
            <p className="z-30 text-base font-normal leading-[1.85] tracking-wide text-slate-300/90 lg:text-lg">
              Phiên bản: <strong>{release.tag_name}</strong>
            </p>
          ) : (
            <p className="z-30 text-base font-normal leading-[1.85] tracking-wide text-slate-300/90 lg:text-lg">
              Phiên bản: Đang kiểm tra...
            </p>
          )}
        </div>
      </main>
    </>
  );
}
