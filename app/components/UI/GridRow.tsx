export default function GridRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-3.5">
      <div className="grid grid-cols-1 md:lg:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
}
