import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Clock3, Target, Users } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "+30%",
    label: "Ganho de visibilidade gerencial",
    detail: "Estruturação de KPIs e painéis executivos para leitura objetiva de performance.",
  },
  {
    icon: Clock3,
    value: "-40%",
    label: "Tempo de análise operacional",
    detail: "Consolidação de dados em dashboards para reduzir esforço manual de acompanhamento.",
  },
  {
    icon: Target,
    value: "+25%",
    label: "Aderência a metas e SLAs",
    detail: "Monitoramento contínuo de metas comerciais e indicadores logísticos críticos.",
  },
  {
    icon: Users,
    value: "4 áreas",
    label: "Cobertura de negócio",
    detail: "Projetos aplicados em Comercial, Logística, Produção e Finanças.",
  },
];

const SocialProofSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="social-proof" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Prova social</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Impacto em <span className="gradient-text">números</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Indicadores de impacto e ganhos típicos de projetos de BI e Analytics aplicados a cenários corporativos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 card-hover"
            >
              <item.icon size={22} className="text-primary mb-3" />
              <p className="text-3xl font-black gradient-text mb-2">{item.value}</p>
              <p className="text-sm font-semibold text-foreground mb-2">{item.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="rounded-xl border border-primary/20 bg-primary/5 p-5"
        >
          <p className="text-sm text-foreground leading-relaxed">
            "Foco em transformar dados dispersos em indicadores confiáveis e acionáveis, conectando a camada técnica
            (ETL, modelagem e BI) com decisões de negócio em nível tático e executivo."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
