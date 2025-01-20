import { LinkTag } from '../UI';

export default function FooterContent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center text-base font-normal text-slate-300">
        © Copyright GDVNPS Community 2024-present
      </p>
      <LinkTag
        className="pt-4 text-center"
        toHref="https://github.com/tranxuanthanh-sk/gdvnps-website"
        target="_blank"
      >
        Website source code
      </LinkTag>
    </div>
  );
}
