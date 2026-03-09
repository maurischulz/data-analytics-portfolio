import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Dashboard Comercial",
    desc: "Análise de desempenho de vendas com acompanhamento de receita, metas, mix de produtos e comportamento de clientes.",
    tech: ["Power BI", "SQL", "KPIs", "Analytics"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiMTE2NDM1ZjUtYjY0MS00NDVlLWI4MWItZDY3MWE3ODRmNGJmIiwidCI6Ijk5MTIyNzllLWMyNzQtNGQ3NS04YWUwLTM2NWY0YWM3MDFjNSJ9",
  },
  {
    title: "Dashboard Logístico",
    desc: "Indicadores de SLA, OTIF, atrasos, eficiência operacional e acompanhamento por rota e transportadora.",
    tech: ["Power BI", "Logística", "OTIF", "SLA"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiODg5ZGE0NzgtMzdlOC00ZmVjLTk5YTAtNjY5Zjc1ZmUwOWI0IiwidCI6Ijk5MTIyNzllLWMyNzQtNGQ3NS04YWUwLTM2NWY0YWM3MDFjNSJ9",
  },
  {
    title: "Controle de Produção",
    desc: "Painel de produtividade e eficiência industrial com acompanhamento de produção planejada, perdas e capacidade.",
    tech: ["Power BI", "Produção", "Eficiência", "Capacidade"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiODhmZDU3NjktNjdlNS00ZDgyLWEyMzAtNzljYmRkNzBlNzI5IiwidCI6Ijk5MTIyNzllLWMyNzQtNGQ3NS04YWUwLTM2NWY0YWM3MDFjNSJ9",
  },
  {
    title: "DRE Analítico",
    desc: "Projeto financeiro em fase de validação para compor o portfólio com visão executiva de resultado, custos, despesas e margens.",
    tech: ["Financeiro", "DRE", "Margens", "Em breve"],
    comingSoon: true,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding dot-bg" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Portfólio</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos em <span className="gradient-text">destaque</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">
            Dashboards desenvolvidos para contextos corporativos reais, priorizando clareza visual,
            aderência ao negócio e leitura gerencial com foco em decisão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="bg-card border border-border rounded-2xl p-6 card-hover flex flex-col"
            >
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="w-full h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
                {p.comingSoon && (
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-secondary border border-border text-muted-foreground whitespace-nowrap">
                    <Clock3 size={12} /> Em validação
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground border border-border">
                    {t}
                  </span>
                ))}
              </div>
              {p.comingSoon ? (
                <Button variant="outline" size="sm" className="border-border text-muted-foreground gap-2 w-fit cursor-default">
                  <Clock3 size={14} />
                  Link em breve
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-foreground hover:bg-primary/10 gap-2 w-fit"
                  onClick={() => window.open(p.link, "_blank")}
                >
                  <ExternalLink size={14} />
                  Abrir relatório
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
