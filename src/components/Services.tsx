import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animation";
import { Lightbulb, MapPin, Target, TrendingUp } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <MapPin size={40} />,
      title: "Painéis Estratégicos",
      description:
        "Outdoors e painéis em locais de alto fluxo e visibilidade em Santos e São Vicente.",
    },
    {
      id: 2,
      icon: <TrendingUp size={40} />,
      title: "Gestão de Campanhas",
      description:
        "Planejamento, produção e manutenção completa de sua campanha publicitária.",
    },
    {
      id: 3,
      icon: <Target size={40} />,
      title: "Análise de Impacto",
      description:
        "Relatórios detalhados sobre o alcance e impacto de sua comunicação visual.",
    },
    {
      id: 4,
      icon: <Lightbulb size={40} />,
      title: "Consultoria Criativa",
      description:
        "Orientação especializada para maximizar o impacto visual de sua mensagem.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <div className="w-20 h-1 bg-[#ff3a1a] mx-auto mb-6 rounded"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Oferecemos soluções completas em mídia exterior para destacar sua
            marca em pontos estratégicos com alta visibilidade.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center"
              variants={fadeIn("up", 0.1 * service.id)}
              whileHover={{ y: -5 }}
            >
              <div className="bg-red-100 p-4 rounded-full mb-4 flex justify-center items-center">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
