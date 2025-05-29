import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

type FormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/lucasweacked21@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) throw new Error("Erro ao enviar");

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (e) {
      alert("Erro ao enviar a mensagem, tente novamente.");
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Fale Conosco
          </h2>
          <div className="w-20 h-1 bg-[#ff3a1a] mx-auto mb-6"></div>
          <p className="text-lg text-[#4b5563] max-w-3xl mx-auto">
            Entre em contato para saber mais sobre nossos serviços e como
            podemos ajudar a destacar sua marca.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#111827] mb-6">
                Envie uma Mensagem
              </h3>

              {isSubmitted ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-md text-center mb-4">
                  Mensagem enviada com sucesso!
                </div>
              ) : null}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                noValidate
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#374151] mb-1"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#d1d5db] focus:ring-[#2563eb]"
                    }`}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#374151] mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#d1d5db] focus:ring-[#2563eb]"
                    }`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#374151] mb-1"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Como podemos ajudar?"
                    className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#d1d5db] focus:ring-[#2563eb]"
                    }`}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#ff3a1a] hover:bg-[#cc3016] text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  Enviar Mensagem
                  <Send className="ml-2" size={18} />
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#1a1b21] text-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#fff1e6] p-3 rounded-full mr-4">
                    <Mail size={24} className="text-[#ff3a1a]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a
                      href="mailto:agenciaracomunicacaovisual@gmail.com"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      agenciaracomunicacaovisual@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#fff1e6] p-3 rounded-full mr-4">
                    <Phone size={24} className="text-[#ff3a1a]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Telefone</h4>
                    <a
                      href="tel:+5513998061936"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      (13) 99806-1936
                    </a>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="font-bold text-xl mb-4">
                    Horário de Atendimento
                  </h4>
                  <p className="text-white/80 mb-2">
                    Segunda a Sexta: 9h às 18h
                  </p>
                  <p className="text-white/80">Sábado: 9h às 12h</p>
                </div>

                <div className="mt-8">
                  <p className="text-lg font-medium mb-4">
                    Atendemos toda a região da Baixada Santista
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {[
                      "Santos",
                      "São Vicente",
                      "Guarujá",
                      "Praia Grande",
                      "Cubatão",
                    ].map((city) => (
                      <li
                        key={city}
                        className="bg-[#ff3a1a] px-3 py-1 rounded-full text-sm"
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
