import IntroduceViewLayout from '~/layouts/IntroduceViewLayout';
import { ViewTitle, Dot } from '~/components/UI';

export default function FeaturesView() {
  return (
    <IntroduceViewLayout>
      <ViewTitle className="text-center">Có gì đặc biệt?</ViewTitle>
      <div>
        <div className="flex items-center justify-center">
          <p className="px-3.5 leading-[1.85] text-slate-300">Nhanh</p>
          <Dot />
          <p className="px-3.5 leading-[1.85] text-slate-300">Tiện lợi</p>
          <Dot />
          <p className="px-3.5 leading-[1.85] text-slate-300">Thân thiện</p>
        </div>
      </div>
    </IntroduceViewLayout>
  );
}
