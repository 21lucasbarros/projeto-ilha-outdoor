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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <div className="w-20 h-1 bg-[#ff3a1a] mx-auto mb-6"></div>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em mídia exterior para destacar sua
            marca em pontos estratégicos com alta visibilidade.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
              variants={fadeIn("up", 0.1 * service.id)}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary-50 p-4 rounded-full inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
