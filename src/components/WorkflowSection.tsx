import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Layers, CheckCircle2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico e Entendimento",
    desc: "Alinhamento com gestores e áreas para compreender processos, fontes de dados, necessidades analíticas e expectativas de negócio."
  },
  {
    icon: Layers,
    number: "02",
    title: "Modelagem e Estruturação",
    desc: "Definição da arquitetura analítica, modelagem dimensional, ETL/ELT, preparação de dados e organização lógica das informações."
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: "Validação com a Área",
    desc: "Iterações com usuários finais para validar métricas, KPIs, estrutura dos dashboards e garantir aderência ao dia a dia operacional."
  },
  {
    icon: Rocket,
    number: "04",
    title: "Entrega e Handoff",
    desc: "Publicação do dashboard, treinamento dos usuários, documentação técnica e acompanhamento pós-entrega para ajustes e melhorias."
  }
];

const WorkflowSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="workflow" className="section-padding bg-background/50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Processo</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como eu <span className="gradient-text">trabalho</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Meu processo de trabalho combina visão técnica e de negócio, priorizando entregas práticas
            e alinhadas à realidade operacional e gerencial da empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="relative bg-card border border-border rounded-2xl p-6 card-hover"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center font-mono font-bold text-primary text-sm">
                {step.number}
              </div>
              <step.icon size={32} className="text-primary mb-4 mt-2" />
              <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/10 px-6 py-3 text-sm text-foreground">
            <span className="text-primary font-semibold">→</span>
            Resultado: dashboards práticos, métricas confiáveis e insights acionáveis para gestão e operação.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;
