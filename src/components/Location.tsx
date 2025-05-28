import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { fadeIn } from "../utils/animation";

export default function Location() {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      id: 1,
      name: "Canal 1 - Santos",
      description:
        "Localizado em uma das principais vias de Santos, com alto fluxo de veículos e pedestres.",
      image:
        "https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stats: {
        fluxoDiario: "50.000+",
        visibilidade: "Alta",
      },
    },
    {
      id: 2,
      name: "Av. Ana Costa - Santos",
      description:
        "Avenida comercial de grande movimento, conectando a praia ao centro da cidade.",
      image:
        "https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stats: {
        fluxoDiario: "45.000+",
        visibilidade: "Alta",
      },
    },
    {
      id: 3,
      name: "Av. Presidente Wilson - São Vicente",
      description:
        "Via litorânea com alta circulação de turistas e moradores durante todo o ano.",
      image:
        "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stats: {
        fluxoDiario: "40.000+",
        visibilidade: "Média-Alta",
      },
    },
    {
      id: 4,
      name: "Rodovia dos Imigrantes - Entrada Santos",
      description:
        "Ponto estratégico de entrada da cidade, atingindo visitantes e turistas.",
      image:
        "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stats: {
        fluxoDiario: "60.000+",
        visibilidade: "Muito Alta",
      },
    },
  ];

  return (
    <section id="locations" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Localizações Estratégicas</h2>
          <p className="section-subtitle mx-auto">
            Descubra nossos pontos de alta visibilidade em Santos e São Vicente
            para impulsionar sua marca.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Imagem */}
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src={locations[activeLocation].image}
              alt={locations[activeLocation].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {locations[activeLocation].name}
              </h3>
              <p className="text-white/90 mb-4">
                {locations[activeLocation].description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                  <p className="text-xs text-white/80">Fluxo Diário</p>
                  <p className="text-lg font-bold text-white">
                    {locations[activeLocation].stats.fluxoDiario}
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                  <p className="text-xs text-white/80">Visibilidade</p>
                  <p className="text-lg font-bold text-white">
                    {locations[activeLocation].stats.visibilidade}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lista de Localizações */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-900">
              Escolha um Local
            </h3>
            <div className="space-y-4">
              {locations.map((location, index) => {
                const isActive = activeLocation === index;
                return (
                  <motion.div
                    key={location.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      isActive
                        ? "bg-[#2d69b3] text-white shadow-lg"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveLocation(index)}
                    whileHover={{ x: !isActive ? 5 : 0 }}
                  >
                    <div className="flex items-center">
                      <MapPin
                        className={`mr-3 ${
                          isActive ? "text-white" : "text-primary-600"
                        }`}
                      />
                      <div className="flex-grow">
                        <h4
                          className={`font-medium ${
                            isActive ? "text-white" : "text-primary-900"
                          }`}
                        >
                          {location.name}
                        </h4>
                        <p
                          className={`text-sm truncate ${
                            isActive ? "text-white/80" : "text-gray-600"
                          }`}
                        >
                          {location.description.substring(0, 60)}...
                        </p>
                      </div>
                      <ArrowRight
                        className={isActive ? "text-white" : "text-primary-600"}
                        size={18}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-8">
              <a href="#contact" className="btn-primary">
                Solicitar Visita Técnica
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 bg-primary-50 p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4 text-primary-900 text-center">
            Por que estas localizações são estratégicas?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-2 text-primary-800">
                Alto Fluxo
              </h4>
              <p className="text-gray-700">
                Nossos painéis estão posicionados em vias de alta circulação,
                garantindo que sua mensagem alcance milhares de pessoas
                diariamente.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-2 text-primary-800">
                Visibilidade 24h
              </h4>
              <p className="text-gray-700">
                Painéis iluminados que funcionam dia e noite, ampliando o tempo
                de exposição da sua marca ao público.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-2 text-primary-800">
                Pontos Estratégicos
              </h4>
              <p className="text-gray-700">
                Localizações cuidadosamente selecionadas para atingir seu
                público-alvo de forma eficiente e impactante.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
