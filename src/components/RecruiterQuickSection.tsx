import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BriefcaseBusiness, BadgeCheck, Wrench, Phone } from "lucide-react";

const highlights = [
  {
    icon: BadgeCheck,
    title: "Quem sou",
    text: "Profissional de BI e Data Analytics com foco em contexto corporativo, integração de dados e visão de negócio.",
  },
  {
    icon: Wrench,
    title: "Stack principal",
    text: "Power BI, SQL, Spark/PySpark, ETL/ELT, modelagem dimensional e estruturação de KPIs executivos.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Resultados em foco",
    text: "Dashboards orientados a decisão para Comercial, Logística, Produção e Finanças, com leitura gerencial clara.",
  },
  {
    icon: Phone,
    title: "Contato direto",
    text: "Disponível para oportunidades em BI, Analytics e Dados com atuação em ambiente empresarial.",
  },
];

const RecruiterQuickSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="recruiter-mode" className="px-4 md:px-8 py-12" ref={ref}>
      <div className="container mx-auto max-w-6xl rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-card/60 p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-8"
        >
          <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-2">Modo recrutador (30s)</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Resumo rápido para <span className="gradient-text">avaliação inicial</span>
          </h2>
          <p className="text-muted-foreground">
            Uma leitura direta dos pontos mais relevantes para triagem técnica e de aderência de perfil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              className="rounded-xl border border-border bg-secondary/30 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <item.icon size={16} className="text-primary" />
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Ver projetos agora
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            Entrar em contato
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RecruiterQuickSection;
