import IntroduceViewLayout from '~/layouts/IntroduceViewLayout';
import { ViewTitle, LinkButton } from '~/components/UI';

export default function FeelInterested() {
  return (
    <IntroduceViewLayout className="flex flex-col items-center justify-center">
      <ViewTitle className="text-center">Cảm thấy háo hức?</ViewTitle>
      <p className="my-4 px-3.5 text-center text-base font-normal leading-[1.95] text-slate-300">
        Nếu muốn trải nghiệm, hãy{' '}
        <span className="text-orange-400">tải xuống GDVNPS</span> ngay bây giờ!
      </p>
      <div>
        <LinkButton
          tag="link"
          toHref="/download"
          variant="fill"
          className="transition-all duration-300 hover:[transform:translateY(-0.3rem)]"
        >
          <strong>Tải xuống GDVNPS</strong>
        </LinkButton>
      </div>
    </IntroduceViewLayout>
  );
}
