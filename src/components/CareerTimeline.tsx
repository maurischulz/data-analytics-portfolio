import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    role: "Coordenação de TI e Infraestrutura",
    desc: "Atuação em ambiente corporativo com gestão de infraestrutura, sustentação de sistemas e suporte à operação de TI.",
    period: "Base de carreira",
  },
  {
    role: "Especialização em Sistemas ERP e Integração",
    desc: "Evolução para contextos de sistemas empresariais, integração de informações e entendimento profundo de processos corporativos.",
    period: "Transição para dados",
  },
  {
    role: "BI, Analytics e Dados Corporativos",
    desc: "Construção de ambientes analíticos, dashboards, modelagem dimensional, ETL / ELT e soluções orientadas a indicadores de negócio.",
    period: "Atuação atual",
  },
];

const CareerTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="career" className="section-padding dot-bg" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Trajetória</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Linha do tempo <span className="gradient-text">profissional</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">
            Evolução profissional marcada pela combinação entre tecnologia, processos corporativos,
            sistemas empresariais e, atualmente, Business Intelligence e dados.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timeline.map((t, i) => (
            <motion.div
              key={t.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * i }}
              className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              <div
                className={`hidden md:block absolute top-1 w-3 h-3 rounded-full bg-primary border-2 border-background ${
                  i % 2 === 0 ? "-right-1.5" : "-left-1.5"
                }`}
              />
              <div className="absolute left-3 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background md:hidden" />

              <span className="text-xs font-mono text-primary uppercase tracking-wider">{t.period}</span>
              <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">{t.role}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
