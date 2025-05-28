import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn } from "../utils/animation";

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-[#1a4b8c] bg-opacity-90"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(26, 75, 140, 0.9), rgba(45, 105, 179, 0.95)), url('https://images.pexels.com/photos/3951881/pexels-photo-3951881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-20 md:py-24">
          <div className="max-w-3xl">
            <motion.h1
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6"
            >
              Painéis Publicitários em Pontos Estratégicos
            </motion.h1>

            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg md:text-xl text-white/90 mb-8 md:mb-10"
            >
              Conectamos sua marca com o público certo através de painéis
              publicitários posicionados estrategicamente em Santos e São
              Vicente, garantindo alta visibilidade e impacto.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#locations" className="btn-primary">
                Ver Localizações <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                Solicitar Orçamento
              </a>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <a
              href="#about"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
              aria-label="Rolar para baixo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
