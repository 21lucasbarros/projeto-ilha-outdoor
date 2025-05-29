import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animation";
import { Check } from "lucide-react";

export default function Location() {
  const locations = [
    {
      id: 1,
      name: "Canal 1 - Santos",
      description:
        "Localizado em uma das principais vias de Santos, com alto fluxo de veículos e pedestres.",
      image: "../../assets/image/canal-1.jpeg",
      stats: {
        fluxoDiario: "50.000+",
        visibilidade: "Alta",
      },
      advantages: [
        "Fluxo diário de 50.000+ pessoas",
        "Alta visibilidade",
        "Localização estratégica",
      ],
    },
    {
      id: 2,
      name: "Teleférico - São Vicente",
      description:
        "Localizado próximo ao teleférico, ponto turístico com grande circulação de visitantes e moradores.",
      image: "../../assets/image/teleferico.jpeg",
      stats: {
        fluxoDiario: "45.000+",
        visibilidade: "Alta",
      },
      advantages: [
        "Grande circulação turística",
        "Ponto de referência da cidade",
        "Excelente visibilidade durante todo o dia",
      ],
    },
    {
      id: 3,
      name: "Campo de Pouso - São Vicente",
      description:
        "Área com vista privilegiada, muito frequentada por moradores e turistas para lazer e esportes.",
      image: "../../assets/image/campo-de-pouso.jpeg",
      stats: {
        fluxoDiario: "40.000+",
        visibilidade: "Média-Alta",
      },
      advantages: [
        "Público turista e local",
        "Movimento constante, especialmente nos finais de semana",
        "Visibilidade ampla em espaço aberto",
      ],
    },
    {
      id: 4,
      name: "Ilha Porchat - São Vicente",
      description:
        "Local turístico com acesso a mirantes e restaurantes, atraindo um público qualificado e diversificado.",
      image: "../../assets/image/ilha-porchat.jpeg",
      stats: {
        fluxoDiario: "60.000+",
        visibilidade: "Muito Alta",
      },
      advantages: [
        "Público de alto poder aquisitivo",
        "Visibilidade em pontos estratégicos da ilha",
        "Grande movimento turístico e local",
      ],
    },
  ];

  return (
    <section id="locations" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Locais Estratégicos
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#ff3a1a] mx-auto mb-5"></div>
          <p className="text-base sm:text-lg text-[#4B5563] max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
            Posicionamos sua marca em pontos de alta visibilidade em Santos e
            São Vicente, garantindo exposição máxima para o público-alvo.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12 md:space-y-16"
        >
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              variants={fadeIn(index % 2 === 0 ? "left" : "right", 0.2)}
              className={`flex flex-col gap-8 items-center md:items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/2 max-w-md sm:max-w-lg lg:max-w-none">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-md">
                      {location.name}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 max-w-md sm:max-w-lg lg:max-w-none">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {location.name}
                </h3>
                <p className="text-[#4B5563] mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {location.description}
                </p>
                <div className="bg-[#F9FAFB] p-5 sm:p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">
                    Vantagens:
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {location.advantages.map((advantage, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-[#374151]"
                      >
                        <Check
                          className="text-[#ff3a1a] mt-1 flex-shrink-0"
                          size={20}
                        />
                        <span>{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
