export default function IntroduceViewLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`my-40 w-full ${className}`}>{children}</div>;
}
