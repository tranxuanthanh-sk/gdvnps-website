export default function FooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <footer className="relative mt-20 border-t border-t-gray-800 px-3 py-7">
      {children}
    </footer>
  );
}
