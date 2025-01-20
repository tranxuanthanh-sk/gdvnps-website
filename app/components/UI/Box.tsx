export default function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full px-2 py-4 lg:p-2">
      <div className="block h-full rounded-lg border border-slate-800 bg-slate-900 duration-150 hover:border-slate-700">
        <article className="flex h-full flex-col p-6">{children}</article>
      </div>
    </div>
  );
}
