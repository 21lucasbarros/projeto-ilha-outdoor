import { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToElement } from "../utils/scrollToElement";

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

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Localizações", href: "#locations" },
    { name: "Diferenciais", href: "#values" },
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
            {/* Logo + Icon */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsOpen(false);
              }}
              aria-label="Ir para o topo"
            >
              <MapPin
                size={28}
                className={`font-bold text-xl ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              />
              <span
                className={`font-bold text-xl ml-2 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                R&A Comunicação Visual
              </span>
            </motion.div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={scrollToElement}
                  className={`group relative font-medium hover:text-zinc-400 transition-colors ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#ff3a1a] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary whitespace-nowrap"
                onClick={scrollToElement}
              >
                Fale Conosco
              </a>
            </nav>

            {/* Botão Mobile */}
            <button
              className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff3a1a]"
              onClick={toggleMenu}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
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

          {/* Menu Mobile com animação */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white mt-2 rounded-lg shadow-lg overflow-hidden"
                role="menu"
                aria-label="Menu de navegação mobile"
              >
                <div className="py-2 flex flex-col">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-3 text-[#4b5563] hover:bg-[#f3f4f6] transition-colors"
                      onClick={(e) => {
                        scrollToElement(e);
                        setIsOpen(false);
                      }}
                      role="menuitem"
                    >
                      {link.name}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    className="block px-4 py-3 mt-2 bg-[#1a4b8c] text-white font-medium text-center rounded-md mx-4"
                    onClick={(e) => {
                      scrollToElement(e);
                      setIsOpen(false);
                    }}
                    role="menuitem"
                  >
                    Fale Conosco
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
