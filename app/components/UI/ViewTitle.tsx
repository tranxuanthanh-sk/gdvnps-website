export default function ViewTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <h1 className={`text-4xl font-bold text-slate-100 ${className}`}>
      {children}
    </h1>
  );
}
