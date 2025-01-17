import IntroduceViewLayout from '~/layouts/IntroduceViewLayout';
import { ViewTitle, Image } from '~/components/UI';
import ShowcaseImg1 from '~/assets/showcase-1.webp';

export default function AboutView() {
  return (
    <IntroduceViewLayout className="grid grid-cols-1 items-center justify-items-center lg:grid-cols-2">
      <div>
        <ViewTitle className="text-left">
          <span className="inline-block bg-gradient-to-bl from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
            GDVNPS
          </span>{' '}
          là gì?
        </ViewTitle>
        <p className="mt-5 font-medium leading-[1.85] text-slate-300">
          <span className="text-orange-400">GDVNPS</span> là{' '}
          <span className="text-orange-400">
            một dự án Geometry Dash Private Server (GDPS)
          </span>{' '}
          dành cho cộng đồng người chơi Geometry Dash tại Việt Nam với tiêu chí
          đặt <span className="text-orange-400">chất lượng lên hàng đầu</span>.{' '}
          <span className="text-orange-400">GDVNPS</span> cũng có trên các nền
          tảng như <span className="text-orange-400">Windows</span>,{' '}
          <span className="text-orange-400">Android</span> và{' '}
          <span className="text-orange-400">iOS</span>.
        </p>
      </div>

      <div className="mt-3.5 lg:mt-0">
        <Image
          src={ShowcaseImg1}
          alt="Showcase Image 1"
          width={500}
          loading="lazy"
        />
      </div>
    </IntroduceViewLayout>
  );
}
