import { Icon } from '@iconify/react';
import IntroduceViewLayout from '~/layouts/IntroduceViewLayout';
import { ViewTitle, Dot, GridRow, Box } from '~/components/UI';

export default function FeaturesView() {
  return (
    <IntroduceViewLayout>
      <ViewTitle className="text-center">Có gì đặc biệt?</ViewTitle>
      <div>
        <div className="flex items-center justify-center">
          <p className="px-3.5 text-center text-base font-normal leading-[1.95] text-slate-300">
            Nhanh
          </p>
          <Dot />
          <p className="px-3.5 text-center text-base font-normal leading-[1.95] text-slate-300">
            Tiện lợi
          </p>
          <Dot />
          <p className="px-3.5 text-center text-base font-normal leading-[1.95] text-slate-300">
            Thân thiện
          </p>
        </div>
      </div>

      <GridRow>
        <Box>
          <IconItem icon="ri:24-hours-line" />
          <h1 className="my-2.5 text-left text-xl font-bold text-slate-300">
            Hoạt động 24/24
          </h1>
          <p className="text-slate-300/98 leading-[1.8] text-slate-300">
            GDVNPS được khởi chạy trên server hoạt động xuyên suốt 24/24.
          </p>
        </Box>

        <Box>
          <IconItem icon="ri:chat-smile-2-fill" />
          <h1 className="my-2.5 text-left text-xl font-bold text-slate-300">
            Moderators hoạt động tích cực
          </h1>
          <p className="text-slate-300/98 leading-[1.8] text-slate-300">
            Cộng đồng của chúng tôi được hỗ trợ bởi các moderators hoạt động
            tích cực.
          </p>
        </Box>

        <Box>
          <IconItem icon="ri:star-half-line" />
          <h1 className="my-2.5 text-left text-xl font-bold text-slate-300">
            Mid Standard Rating
          </h1>
          <p className="text-slate-300/98 leading-[1.8] text-slate-300">
            Không quá nghiêm ngặt như Geometry Dash, GDVNPS có tiêu chuẩn xếp
            hạng không quá cao cho các level.
          </p>
        </Box>

        <Box>
          <IconItem icon="rivet-icons:device" />
          <h1 className="my-2.5 text-left text-xl font-bold text-slate-300">
            Nhiều nền tảng
          </h1>
          <p className="text-slate-300/98 leading-[1.8] text-slate-300">
            GDVNPS được phát hành trên các nền tảng như <strong>Windows</strong>
            , <strong>Android</strong> và <strong>iOS</strong>. Kèm với đó là có
            hỗ trợ <strong>Geode</strong> tốt.
          </p>
        </Box>

        <Box>
          <IconItem icon="ic:twotone-balance" />
          <h1 className="my-2.5 text-left text-xl font-bold text-slate-300">
            Đảm bảo tính công bằng
          </h1>
          <p className="text-slate-300/98 leading-[1.8] text-slate-300">
            Chúng tôi đảm bảo tính công bằng và khách quan cho tất cả mọi người
            trong cộng đồng.
          </p>
        </Box>

        <Box>
          <IconItem icon="tdesign:happy-filled" />
          <h1 className="my-2.5 text-left text-xl font-bold text-slate-300">
            Cộng đồng thân thiện
          </h1>
          <p className="text-slate-300/98 leading-[1.8] text-slate-300">
            Cùng với những tính năng trên, GDVNPS còn có một cộng đồng rất hòa
            đồng và thân thiện.
          </p>
        </Box>
      </GridRow>
    </IntroduceViewLayout>
  );
}

function IconItem({ icon }: { icon: string }) {
  return (
    <div className="w-fit rounded-lg bg-slate-950 p-3">
      <Icon icon={icon} width="37" height="37" className="fill-slate-300" />
    </div>
  );
}
