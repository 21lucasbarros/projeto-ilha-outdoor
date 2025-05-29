import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation";
import { ArrowDownCircle, ArrowRight } from "lucide-react";
import { scrollToElement } from "../utils/scrollToElement";

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-[#1a1b21] text-[#eeeef0]"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-[#2f3039]/90 via-[#1a1b21] to-[#1a1b21]"></div>
          <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1a1b21] via-transparent to-[#1a1b21] opacity-80"></div>
        </div>

        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#5b73ff]/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[#ff3a1a]/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 z-20 pt-16">
          <div className="max-w-4xl">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="flex items-center gap-2 mb-6"
            >
              <span className="px-4 py-1 rounded-full bg-[#2f3039] text-[#b6b7be] text-sm font-medium">
                Desde 1999
              </span>
              <span className="w-2 h-2 rounded-full bg-[#ff3a1a]"></span>
              <span className="text-[#b6b7be]">Baixada Santista</span>
            </motion.div>

            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
            >
              <span className="text-white">Sua marca em</span>
              <br />
              <span className="text-[#5b73ff]">evidência</span>
              <span className="text-white"> na cidade</span>
            </motion.h1>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="text-xl text-[#b6b7be] mb-12 max-w-2xl"
            >
              Conectamos mensagens corporativas com impacto social e ambiental
              através de painéis publicitários estrategicamente posicionados.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-6"
            >
              <button
                onClick={scrollToServices}
                className="btn-primary flex items-center justify-center gap-2"
              >
                Conheça Nossos Serviços
                <ArrowRight size={20} />
              </button>
              <a
                href="#contact"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Entre em Contato
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a
            href="#about"
            onClick={scrollToElement}
            className="flex items-center justify-center"
          >
            <ArrowDownCircle
              className="text-[#b6b7be] hover:text-white transition-colors cursor-pointer"
              size={36}
            />
          </a>
        </motion.div>
      </section>
    </>
  );
}
