import { useState, useEffect } from "react";

export default function NavbarLayout({children}: {children: React.ReactNode}) {
	const [navbarOnScroll, setNavbarOnScroll] = useState<string>('');

	useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarOnScroll("navbar--active");
      } else {
        setNavbarOnScroll("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${navbarOnScroll}`}>
			<nav className="flex w-full items-center justify-between">
				{children}
			</nav>
		</nav>
  )
}