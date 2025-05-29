import { motion } from "framer-motion";
import { Calendar, Users, Award, Heart } from "lucide-react";
import { fadeIn } from "../utils/animation";

export default function About() {
  const highlights = [
    {
      icon: <Calendar size={24} />,
      title: "Desde 1999",
      description:
        "Mais de 20 anos de experiência em mídia exterior e eventos.",
    },
    {
      icon: <Award size={24} />,
      title: "Experiência",
      description:
        "Ampla expertise no mercado de comunicação visual estratégica.",
    },
    {
      icon: <Users size={24} />,
      title: "Impacto",
      description:
        "Milhares de pessoas impactadas diariamente por nossas mídias.",
    },
    {
      icon: <Heart size={24} />,
      title: "Compromisso",
      description:
        "Promovemos educação ambiental e social através de nossas mídias.",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-cover bg-fixed bg-white/90"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre a R&A Comunicação Visual
          </h2>
          <div className="w-20 h-1 bg-[#ff3a1a] mx-auto mb-6"></div>
          <p className="text-lg text-[#555764] max-w-3xl mx-auto">
            Fundada em 1999, somos especialistas em mídia exterior e eventos,
            conectando marcas ao público através de pontos estratégicos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1 * (index + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#e9eff7] flex items-center justify-center text-[#ff3a1a] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-[#555764]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Nossa Missão
              </h3>
              <p className="text-[#555764] mb-6">
                Conectamos mensagens de utilidade pública com valores
                corporativos, oferecendo retorno de marca e impacto positivo.
                Acreditamos que a publicidade pode ser uma força para o bem,
                educando e inspirando enquanto promove marcas.
              </p>
              <p className="text-[#555764]">
                Nossa experiência nos permite identificar os melhores pontos
                para sua marca ter o máximo de visibilidade, atingindo seu
                público-alvo de forma eficiente e memorável.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="h-full rounded-lg overflow-hidden">
                <img
                  src="../assets/image/equipe.jpg"
                  alt="Equipe da R&A Comunicação Visual"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
