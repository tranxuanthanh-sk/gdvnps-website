import type { MetaFunction } from '@remix-run/node';
import { StarBG } from '~/components/shared/StarBG';
import {
  HeroHeader,
  AboutView,
  FeaturesView,
  JoinCommunityView,
  FeelInterested,
} from '~/components/views/home';

export const meta: MetaFunction = () => {
  return [
    { title: 'Trang chủ | GDVNPS' },
    {
      name: 'description',
      content:
        'GDVNPS là một dự án Geometry Dash Private Server (GDPS) dành cho cộng đồng người chơi Geometry Dash tại Việt Nam',
    },
  ];
};

export default function Index() {
  return (
    <>
      <main>
        <StarBG />
        <div className="flex h-[89.5vh] w-full items-center justify-center bg-transparent">
          <HeroHeader />
        </div>
        <div className="z-40 rounded-s-3xl border-t border-t-[#2f333d] bg-gradient-to-t from-[#0c0f19]/0 to-[#0c0f19] py-10">
          <div className="m-1 mt-36 gap-3.5 px-6 lg:m-20 xl:grid xl:justify-center">
            <AboutView />
            <FeaturesView />
            <JoinCommunityView />
            <FeelInterested />
          </div>
        </div>
      </main>
    </>
  );
}
