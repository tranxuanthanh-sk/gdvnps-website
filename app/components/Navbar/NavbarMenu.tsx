import { Link } from "@remix-run/react";

interface NavbarMenuPropsType {
  toHref?: string;
  content?: string;
}

export default function NavbarMenu({ toHref, content }: NavbarMenuPropsType) {
  return (
    <li className="mx-5">
      <Link
        to={`${toHref}`}
        className="relative block p-2.5 px-0 py-[.2rem] text-center font-sans font-medium text-slate-300 no-underline duration-150 hover:text-slate-200 max-md:py-3.5"
      >
        {content}
      </Link>
    </li>
  );
}
