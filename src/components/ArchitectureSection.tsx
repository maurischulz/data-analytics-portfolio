import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, GitBranch, ShieldCheck, Workflow, MonitorDot, Boxes } from "lucide-react";

const solutions = [
  {
    icon: Workflow,
    label: "Pipeline Analítico de Dados",
    desc: "Fluxos de integração, tratamento e disponibilização de dados para consumo em ambientes analíticos e dashboards.",
  },
  {
    icon: GitBranch,
    label: "Modelagem Dimensional",
    desc: "Estruturação de fatos, dimensões, grão analítico e regras de negócio para cenários de BI corporativo.",
  },
  {
    icon: ShieldCheck,
    label: "Qualidade e Padronização",
    desc: "Tratativas para garantir consistência, rastreabilidade e confiabilidade dos dados utilizados em indicadores.",
  },
  {
    icon: Boxes,
    label: "Camada Semântica de BI",
    desc: "Organização das métricas e entidades de negócio para facilitar leitura executiva e operacional.",
  },
  {
    icon: Server,
    label: "Integração com ERP e Fontes Corporativas",
    desc: "Conexão entre dados empresariais, processos e estruturas analíticas voltadas à tomada de decisão.",
  },
  {
    icon: MonitorDot,
    label: "Projetos de Dados em Evolução",
    desc: "Espaço para destacar iniciativas além de dashboards, como pipelines, scorecards, simuladores e automações analíticas.",
  },
];

const ArchitectureSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="architecture" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Arquiteturas e projetos de dados</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Além dos <span className="gradient-text">dashboards</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">
            Esta seção posiciona o portfólio além da camada visual, destacando frentes de integração,
            modelagem, qualidade e arquitetura analítica que reforçam maturidade em BI e dados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card border border-border rounded-2xl p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{s.label}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
