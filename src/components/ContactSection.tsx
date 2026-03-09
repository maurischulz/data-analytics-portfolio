import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section-padding dot-bg" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Contato</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos <span className="gradient-text">conversar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">
            Disponível para oportunidades em BI, analytics, dados corporativos e projetos que exijam
            combinação entre visão de negócio, modelagem e entrega analítica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Interessado em discutir projetos, oportunidades ou soluções analíticas voltadas ao ambiente empresarial?
              </p>
              <p>
                Meu foco está em entregar valor por meio de dashboards, integração de dados, modelagem e indicadores gerenciais.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="mailto:maurischulz@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} className="text-primary" />
                maurischulz@gmail.com
              </a>
              <a
                href="https://github.com/maurischulz/bi-data-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Github size={18} className="text-primary" />
                github.com/maurischulz/bi-data-portfolio
              </a>
              <a
                href="https://www.linkedin.com/in/mauri-schulz-hexdata"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} className="text-primary" />
                linkedin.com/in/mauri-schulz-hexdata
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <Input placeholder="Seu nome" className="bg-card border-border" required />
            <Input type="email" placeholder="Seu e-mail" className="bg-card border-border" required />
            <Textarea placeholder="Sua mensagem" rows={5} className="bg-card border-border resize-none" required />
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 w-full">
              <Send size={16} />
              {sent ? "Mensagem enviada!" : "Enviar mensagem"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
