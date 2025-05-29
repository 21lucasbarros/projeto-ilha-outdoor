import { BadgeCheck, Instagram, Linkedin, ArrowUp, Github } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer className="bg-[#1a1b21] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BadgeCheck className="text-[#ff3a1a] mr-2" size={24} />
                <h2 className="text-xl font-bold">
                  R&A <span className="text-[#ff3a1a]">Comunicação Visual</span>
                </h2>
              </div>
              <p className="text-white/70 mb-6">
                Fundada em 1999, oferecemos soluções inovadoras em mídia
                exterior com foco em impacto social e ambiental positivo.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/21lucasbarros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Github className="text-white" size={20} />
                </a>
                <a
                  href="https://www.instagram.com/21lucasbarros/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="text-white" size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/lucasbarrossimon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-white" size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {[
                  "home",
                  "about",
                  "services",
                  "locations",
                  "values",
                  "contact",
                ].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {section === "home"
                        ? "Início"
                        : section === "about"
                        ? "Sobre"
                        : section === "services"
                        ? "Serviços"
                        : section === "locations"
                        ? "Locais Estratégicos"
                        : section === "values"
                        ? "Diferenciais"
                        : section === "contact"
                        ? "Contato"
                        : section}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Serviços</h3>
              <ul className="space-y-2">
                {[
                  "Painéis Publicitários",
                  "Mídia Exterior",
                  "Gestão de Eventos",
                  "Comunicação Visual",
                ].map((service) => (
                  <li key={service} className="text-white/70">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="text-white/70">
                  Email: agenciaracomunicacaovisual@gmail.com
                </li>
                <li className="text-white/70">Telefone: (13) 99806-1936</li>
                <li className="text-white/70">Santos e São Vicente, SP</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              &copy; {new Date().getFullYear()} R&A Comunicação Visual. Todos os
              direitos reservados.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-[#2d496d] hover:bg-[#335784] p-2 rounded-full transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="text-white" size={20} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
