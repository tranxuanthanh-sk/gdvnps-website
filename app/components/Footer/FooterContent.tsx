export default function FooterContent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center text-base font-normal text-slate-300">
        © Copyright GDVNPS Community 2024-present
      </p>
      <a
        className="pt-4 text-center text-slate-300 underline"
        href="https://github.com/tranxuanthanh-sk/gdvnps-website"
        target="_blank"
        rel="noreferrer"
      >
        Website source code
      </a>
    </div>
  );
}
