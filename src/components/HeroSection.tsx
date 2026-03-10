import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, BadgeCheck, MessageCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-30"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.12),transparent_35%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/30"
          style={{ top: `${15 + i * 12}%`, left: `${8 + i * 15}%` }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.75, 0.2] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <div className="container mx-auto relative z-10 px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wide text-primary">
                <BadgeCheck size={14} />
                Disponível • Pronto para novos desafios
              </span>
            </div>
            <p className="text-primary font-mono text-sm tracking-[0.28em] uppercase mb-5">
              Business Intelligence • Data Analytics • Data Integration
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95] tracking-tight">
              Mauri <span className="gradient-text">Schulz</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-5 leading-relaxed">
              Portfólio profissional com projetos em Power BI, SQL, Spark / PySpark, ETL / ELT,
              modelagem dimensional e integração de dados aplicados a cenários corporativos.
            </p>
            <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
              Atuação voltada à construção de soluções analíticas para áreas como Comercial,
              Logística, Produção, Finanças e Compras, conectando dados corporativos a decisões
              gerenciais e executivas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-col items-center gap-6 mb-12"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 gap-2 px-10 shadow-xl w-full sm:w-auto"
                onClick={() => window.open("https://wa.me/5547997886929?text=Olá! Vi seu portfólio e gostaria de conversar sobre oportunidades em BI e Analytics.", "_blank")}
              >
                <MessageCircle size={18} />
                Conversar no WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/40 text-foreground hover:bg-primary/10 gap-2 px-10 w-full sm:w-auto"
                onClick={() => window.open("#", "_blank")}
              >
                <Download size={18} />
                Baixar Currículo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { value: "4", label: "Dashboards publicados" },
              { value: "BI", label: "Visão executiva + operacional" },
              { value: "Data", label: "Integração, modelagem e ETL" },
              { value: "ERP", label: "Contexto corporativo e processos" },
            ].map((item) => (
              <div key={item.label} className="bg-card/70 border border-border rounded-xl p-5 backdrop-blur-sm">
                <div className="text-2xl font-black gradient-text mb-1">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-14 flex items-center justify-center gap-5"
          >
            <a href="https://www.linkedin.com/in/mauri-schulz-hexdata" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="https://github.com/maurischulz/data-analytics-portfolio" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={22} />
            </a>
            <a href="#about" className="inline-block animate-float text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown size={22} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
