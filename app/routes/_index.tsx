import type { MetaFunction } from "@remix-run/node";
import { StarBG } from "~/components/shared/StarBG";
import { HeroHeader } from "~/components/views/home";

export const meta: MetaFunction = () => {
  return [
    { title: "Trang chủ | GDVNPS" },
    {
      name: "description",
      content:
        "GDVNPS là một dự án Geometry Dash Private Server (GDPS) dành cho cộng đồng người chơi Geometry Dash tại Việt Nam",
    },
  ];
};

export default function Index() {
  return (
    <>
      <StarBG />
      <main className="w-full flex items-center justify-center h-screen bg-transparent">
        <HeroHeader />
      </main>
    </>
  );
}
