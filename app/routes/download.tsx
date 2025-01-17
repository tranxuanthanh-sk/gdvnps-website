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

export default function Download() {
  return <h1>download</h1>;
}
