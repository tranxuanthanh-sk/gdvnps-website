import IntroduceViewLayout from '~/layouts/IntroduceViewLayout';
import { ViewTitle, LinkButton } from '~/components/UI';

export default function JoinCommunityView() {
  return (
    <IntroduceViewLayout className="grid grid-cols-1 items-center justify-items-center lg:grid-cols-2">
      <div>
        <ViewTitle className="text-left">Cộng đồng</ViewTitle>
        <p className="mb-4 mt-5 font-medium leading-[1.85] text-slate-300">
          Chúng tôi cũng có một nơi để mà mọi người trong cộng đồng có thể{' '}
          <span className="text-orange-400">giao lưu một cách dễ dàng hơn</span>
          , đó chính là{' '}
          <span className="text-orange-400">Server Discord Chính thức</span> của
          chúng tôi. Bạn có thể tham gia nếu muốn.
        </p>
        <LinkButton
          tag="anchor"
          variant="outline"
          className="transition-all duration-300 hover:[transform:translateY(-0.3rem)]"
          toHref="https://discord.gg/SmBs7xGSWM"
        >
          <strong>Tham gia vào Discord</strong>
        </LinkButton>
      </div>

      <div className="mt-3.5 rounded-lg lg:mt-0">
        <div className="h-fit w-fit">
          <iframe
            title="Discord Community Widget"
            src="https://discord.com/widget?id=1259422494012735538&theme=dark"
            width="500"
            height="400"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            style={{ backgroundColor: 'transparent' }}
          ></iframe>
        </div>
      </div>
    </IntroduceViewLayout>
  );
}
