import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "FAQ | GDVNPS" },
    {
      name: "description",
      content: "Trả lời các câu hỏi thường gặp",
    },
  ];
};

export default function FAQ() {
  return <h1>faq</h1>;
}
