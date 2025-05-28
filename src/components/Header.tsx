import { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Localizações", href: "#locations" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="flex items-center gap-2">
                <MapPin
                  size={28}
                  className={`font-bold text-xl ${
                    scrolled ? "text-[#1a4b8c]" : "text-white"
                  }`}
                />
                <span
                  className={`font-bold text-xl ${
                    scrolled ? "text-[#1a4b8c]" : "text-white"
                  }`}
                >
                  R&A Comunicação
                </span>
              </div>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium hover:text-[#2d69b3] transition-colors ${
                    scrolled ? "text-[#4b5563]" : "text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="btn-primary">
                Fale Conosco
              </a>
            </nav>

            <button
              className="md:hidden p-2 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X
                  size={24}
                  className={scrolled ? "text-[#1a4b8c]" : "text-white"}
                />
              ) : (
                <Menu
                  size={24}
                  className={scrolled ? "text-[#1a4b8c]" : "text-white"}
                />
              )}
            </button>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white mt-2 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2 text-[#4b5563] hover:bg-[#f3f4f6]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="block px-4 py-2 mt-2 bg-[#1a4b8c] text-white font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Fale Conosco
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </header>
    </>
  );
}
