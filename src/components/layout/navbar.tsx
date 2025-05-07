import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "../theme-toggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "الرئيسية", path: "/" },
    { name: "عني", path: "/about" },
    { name: "المدونة", path: "/blog" },
    { name: "تواصل معي", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="page-container flex items-center justify-between h-16 sm:h-20">
        <Link to="/" className="text-lg sm:text-xl font-medium">
          <span className="text-primary">أدهم سيد</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-md transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex md:hidden items-center">
          <ThemeToggle />
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  );
}

function MobileNav({ navItems }: { navItems: { name: string; path: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile nav when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="ml-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-2"
        aria-label="Toggle mobile menu"
      >
        <div className="w-5 flex flex-col items-end space-y-1.5">
          <span 
            className={`block h-0.5 bg-current transform transition-all duration-300 ${
              isOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'
            }`}>
          </span>
          <span 
            className={`block h-0.5 bg-current transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100 w-3'
            }`}>
          </span>
          <span 
            className={`block h-0.5 bg-current transform transition-all duration-300 ${
              isOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-4'
            }`}>
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-16 inset-x-0 bg-background border-b shadow-lg animate-fade-in">
          <div className="page-container py-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 rounded-md ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
