export default function IntroduceViewLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`my-32 w-full ${className}`}>{children}</section>;
}
