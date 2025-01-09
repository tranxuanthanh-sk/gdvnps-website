type GDVNPSCharType = {
  id: number;
  char: string;
}[];

export default function HeroHeader() {
  const GDVNPSChar: GDVNPSCharType = [
    { id: 1, char: "G" },
    { id: 2, char: "D" },
    { id: 3, char: "V" },
    { id: 4, char: "N" },
    { id: 5, char: "P" },
    { id: 6, char: "S" },
  ];

  return (
    <div className="font-sans">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        Chào mừng đã đến với
      </h1>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-0.5">
        {/* GDVNPS */}
        {GDVNPSChar.map((textChar) => (
          <span key={textChar.id}>{textChar.char}</span>
        ))}
      </h1>
    </div>
  );
}
