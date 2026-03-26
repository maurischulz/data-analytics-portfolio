import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Dashboard Comercial",
    desc: "Análise de desempenho de vendas com KPIs comerciais, DAX e modelagem dimensional (Star Schema) para receita, metas, mix e comportamento de clientes.",
    tech: ["Power BI", "SQL", "KPIs", "Analytics"],
    category: "Comercial",
    caseStudy: {
      problem: "Baixa visibilidade sobre metas, margem e comportamento de compra por carteira.",
      stack: "Power BI + SQL + DAX + modelagem dimensional (Star Schema).",
      impact: "Leitura executiva mais rápida e priorização comercial orientada por KPIs.",
    },
    link: "https://app.powerbi.com/view?r=eyJrIjoiMTE2NDM1ZjUtYjY0MS00NDVlLWI4MWItZDY3MWE3ODRmNGJmIiwidCI6Ijk5MTIyNzllLWMyNzQtNGQ3NS04YWUwLTM2NWY0YWM3MDFjNSJ9",
  },
  {
    title: "Dashboard Logístico",
    desc: "Indicadores de SLA, OTIF e atrasos com integração de dados logísticos, ETL corporativo e visual analítico por rota e transportadora.",
    tech: ["Power BI", "Logística", "OTIF", "SLA"],
    category: "Logística",
    caseStudy: {
      problem: "Dificuldade em consolidar nível de serviço por rota, transportadora e janela.",
      stack: "Power BI + SQL + ETL corporativo + regras de SLA/OTIF.",
      impact: "Ações mais precisas sobre atrasos críticos e melhoria de performance logística.",
    },
    link: "https://app.powerbi.com/view?r=eyJrIjoiODg5ZGE0NzgtMzdlOC00ZmVjLTk5YTAtNjY5Zjc1ZmUwOWI0IiwidCI6Ijk5MTIyNzllLWMyNzQtNGQ3NS04YWUwLTM2NWY0YWM3MDFjNSJ9",
  },
  {
    title: "Controle de Produção",
    desc: "Painel de produtividade e eficiência industrial com modelagem dimensional, KPIs de chão de fábrica e acompanhamento de produção planejada, perdas e capacidade.",
    tech: ["Power BI", "Produção", "Eficiência", "Capacidade"],
    category: "Produção",
    caseStudy: {
      problem: "Falta de visão integrada entre produção planejada, realizada e perdas operacionais.",
      stack: "Power BI + integração de dados operacionais + ETL/ELT + KPIs industriais.",
      impact: "Monitoramento contínuo da eficiência e suporte a decisões de capacidade.",
    },
    link: "https://app.powerbi.com/view?r=eyJrIjoiODhmZDU3NjktNjdlNS00ZDgyLWEyMzAtNzljYmRkNzBlNzI5IiwidCI6Ijk5MTIyNzllLWMyNzQtNGQ3NS04YWUwLTM2NWY0YWM3MDFjNSJ9",
  },
  {
    title: "DRE Analítico",
    desc: "Projeto financeiro em fase de validação com DRE gerencial, visão executiva de resultado e estrutura analítica para custos, despesas e margens.",
    tech: ["Financeiro", "DRE", "Margens", "Em breve"],
    category: "Financeiro",
    caseStudy: {
      problem: "Ausência de visão padronizada para análise de resultado e composição de margens.",
      stack: "Power BI + SQL + DAX + estrutura financeira para DRE gerencial.",
      impact: "Projeto em validação para fortalecer leitura executiva de resultado financeiro.",
    },
    comingSoon: true,
  },
  {
    title: "Olist Lakehouse Platform",
    desc: "Plataforma de dados lakehouse completa, rodando 100% local via Docker, com orquestração Airflow e processamento distribuído Spark. Pipeline Bronze → Silver → Gold com camadas de qualidade e monitoramento.",
    tech: ["Airflow", "Spark", "PostgreSQL", "Airbyte", "Docker"],
    category: "Engenharia de Dados",
    caseStudy: {
      problem: "Construir uma arquitetura lakehouse moderna para dados reais de e-commerce com esteira ponta a ponta em ambiente local.",
      stack: "PostgreSQL + Airbyte + Apache Spark + Apache Airflow + Python + Docker (WSL2).",
      impact: "Pipeline em 3 camadas (Bronze, Silver e Gold) com processamento distribuído, orquestração de DAGs e validações de qualidade automatizadas.",
    },
    link: "https://github.com/maurischulz/olist-lakehouse-platform.git",
  },
  {
    title: "IBGE PIB Analytics",
    desc: "Pipeline de dados econômicos públicos do Brasil — PIB regional, inflação, vendas e faturamento. Fetch da API IBGE, transformação com dbt e análises regionais.",
    tech: ["API REST", "Python", "dbt", "DuckDB", "SQL"],
    category: "Engenharia de Dados",
    caseStudy: {
      problem: "Consolidar dados econômicos regionais do IBGE para análise de tendências e correlações.",
      stack: "Python (fetch API IBGE) + PostgreSQL + dbt + DuckDB. Dados públicos, históricos de 2012 até hoje.",
      impact: "Dashboard de indicadores econômicos regionais com ranking de crescimento PIB, inflação acumulada e análises de riscos.",
    },
    link: "https://github.com/maurischulz/ibge-pib-analytics",
  },
];

const categories = ["Todos", "Comercial", "Logística", "Produção", "Financeiro", "Engenharia de Dados"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredProjects = activeFilter === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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
          <p className="text-muted-foreground text-lg max-w-3xl mb-8">
            Dashboards desenvolvidos para contextos corporativos reais, priorizando clareza visual,
            aderência ao negócio e leitura gerencial com foco em decisão.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((p, i) => (
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

              <details className="mb-5 rounded-xl border border-border bg-secondary/30 p-4 group">
                <summary className="cursor-pointer list-none text-xs font-semibold uppercase tracking-wider text-primary flex items-center justify-between">
                  Case Study
                  <span className="text-[10px] text-muted-foreground normal-case group-open:hidden">expandir</span>
                </summary>
                <div className="mt-3 space-y-2 text-xs text-muted-foreground leading-relaxed">
                  <p><span className="text-foreground font-medium">Problema:</span> {p.caseStudy.problem}</p>
                  <p><span className="text-foreground font-medium">Stack:</span> {p.caseStudy.stack}</p>
                  <p><span className="text-foreground font-medium">Impacto:</span> {p.caseStudy.impact}</p>
                </div>
              </details>

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
                  {p.category === "Engenharia de Dados" ? "Ver repositório" : "Abrir relatório"}
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
