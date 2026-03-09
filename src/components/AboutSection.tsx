import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, BarChart3, Layers, Network } from "lucide-react";

const strengths = [
  {
    icon: Database,
    label: "Modelagem e Estrutura Analítica",
    desc: "Construção de modelos dimensionais, definição de grão analítico e organização de fatos, dimensões e métricas.",
  },
  {
    icon: BarChart3,
    label: "Business Intelligence",
    desc: "Dashboards executivos e operacionais com foco em clareza visual, indicadores e apoio à tomada de decisão.",
  },
  {
    icon: Layers,
    label: "ETL / ELT e Qualidade",
    desc: "Tratamento, padronização e preparação de dados para consumo analítico em cenários empresariais reais.",
  },
  {
    icon: Network,
    label: "Integração de Dados",
    desc: "Experiência com dados corporativos, ERP e processos que exigem integração entre múltiplas fontes e regras de negócio.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding dot-bg" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-10 items-start"
        >
          <div>
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Sobre mim</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              BI, Dados e <span className="gradient-text">Visão de Negócio</span>
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed max-w-3xl">
              <p>
                Atuo com Business Intelligence, análise de dados e estruturação de soluções analíticas
                voltadas ao ambiente corporativo, combinando visualização, modelagem, integração e preparação
                de dados para suportar indicadores gerenciais e executivos.
              </p>
              <p>
                Minha experiência envolve Power BI, SQL, Spark / PySpark, ETL / ELT, modelagem dimensional,
                integração de dados e organização analítica de informações oriundas de processos empresariais,
                com foco em transformar dados dispersos em análises confiáveis, claras e úteis para tomada de decisão.
              </p>
              <p>
                Além da camada visual dos dashboards, meu trabalho também contempla definição de métricas,
                entendimento de regras de negócio, estruturação lógica das informações e construção de soluções
                aderentes à realidade operacional e gerencial das áreas.
              </p>
            </div>
          </div>

          <div className="bg-card/80 border border-border rounded-2xl p-6 md:p-7 shadow-lg">
            <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-4">Áreas de atuação</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Comercial", "Logística", "Produção", "Financeiro / DRE", "Compras", "ERP & Processos"].map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full text-sm bg-secondary border border-border text-foreground/90">
                  {item}
                </span>
              ))}
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="p-4 rounded-xl bg-secondary/60 border border-border">
                <strong className="block text-foreground mb-1">Foco da entrega</strong>
                Clareza visual, aderência ao negócio e leitura prática para gestão e operação.
              </div>
              <div className="p-4 rounded-xl bg-secondary/60 border border-border">
                <strong className="block text-foreground mb-1">Posicionamento profissional</strong>
                BI + Dados + Integração + Modelagem + Negócio.
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {strengths.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="bg-card border border-border rounded-lg p-6 card-hover"
            >
              <s.icon size={28} className="text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{s.label}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
