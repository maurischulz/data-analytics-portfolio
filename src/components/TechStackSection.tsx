import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Power BI & Visual Analytics",
    items: ["Power BI", "DAX", "KPIs", "Storytelling", "UX Analítica"],
  },
  {
    title: "SQL & Modelagem",
    items: ["SQL", "Modelagem Dimensional", "Data Warehouse", "Fatos", "Dimensões"],
  },
  {
    title: "Engenharia & Processamento",
    items: ["Spark", "PySpark", "ETL / ELT", "Data Integration", "Data Pipelines"],
  },
  {
    title: "Orquestração & Ecossistema",
    items: ["Airflow", "ERP Data", "Qlik", "AWS", "Google Cloud"],
  },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Tecnologias</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stack <span className="gradient-text">técnica</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">
            Repertório voltado à construção de soluções analíticas completas: da integração e preparação dos dados
            até a camada de consumo em dashboards e indicadores de negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * ci }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
