import type { MetaFunction } from "@remix-run/node";
import { StarBG } from "~/components/shared/StarBG";

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
      <div className="w-full h-full max-h-screen bg-transparent"></div>
    </>
  );
}
