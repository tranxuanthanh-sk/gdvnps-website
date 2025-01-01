import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Trang chủ | GDVNPS" },
    { name: "description", content: "GDVNPS là một dự an Geometry Dash Private Server (GDPS) dành cho cộng đồng người chơi Geometry Dash tại Việt Nam" },
  ];
};


export default function Index() {
  return(
      <h1>Hello</h1>
  )
}