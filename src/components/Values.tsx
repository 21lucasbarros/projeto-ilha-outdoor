import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animation";
import { Leaf, Heart, Award, Target } from "lucide-react";

export default function Values() {
  const valuePropositions = [
    {
      id: 1,
      title: "Responsabilidade Ambiental",
      description:
        "Promovemos educação ambiental através de conteúdos exibidos junto às campanhas de nossos clientes.",
      icon: <Leaf size={32} className="text-[#ff3a1a]" />,
    },
    {
      id: 2,
      title: "Impacto Social",
      description:
        "Conectamos mensagens de utilidade pública com valores corporativos para gerar impacto positivo.",
      icon: <Heart size={32} className="text-[#ff3a1a]" />,
    },
    {
      id: 3,
      title: "Experiência Comprovada",
      description:
        "Desde 1999 no mercado, com ampla experiência em mídia exterior e eventos.",
      icon: <Award size={32} className="text-[#ff3a1a]" />,
    },
    {
      id: 4,
      title: "Estratégia Eficiente",
      description:
        "Posicionamento estratégico que garante retorno de marca e visibilidade garantida.",
      icon: <Target size={32} className="text-[#ff3a1a]" />,
    },
  ];

  return (
    <section id="values" className="py-16 md:py-20 bg-[#1a1b21] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-12 md:mb-16 px-2 sm:px-0"
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Nossos Diferenciais
          </h2>
          <div className="w-20 h-1 bg-[#ff3a1a] mx-auto mb-6 rounded"></div>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Além de proporcionar visibilidade para sua marca, integramos valores
            que geram impacto positivo para a sociedade e o meio ambiente.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {valuePropositions.map((value) => (
            <motion.div
              key={value.id}
              className="relative rounded-lg overflow-hidden p-6 cursor-pointer flex flex-col items-center text-center"
              variants={fadeIn("up", 0.1 * value.id)}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#335784] to-[#ff6a3d] rounded-lg shadow-lg opacity-90"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-[#fff1e6] p-3 rounded-full mb-4 flex justify-center items-center">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-sm">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
