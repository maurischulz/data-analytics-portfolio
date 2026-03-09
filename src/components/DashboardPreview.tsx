import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Truck, Factory, Wallet } from "lucide-react";

const dashboards = [
  {
    title: "Comercial",
    subtitle: "Receita, metas e mix de vendas",
    icon: TrendingUp,
    accent: "from-emerald-400/30 to-cyan-400/20",
    metrics: [
      { label: "Receita", value: "R$ 8,4M" },
      { label: "Meta", value: "96%" },
      { label: "Clientes", value: "214" },
    ],
  },
  {
    title: "Logística",
    subtitle: "OTIF, SLA e eficiência operacional",
    icon: Truck,
    accent: "from-sky-400/30 to-blue-500/20",
    metrics: [
      { label: "OTIF", value: "94%" },
      { label: "SLA", value: "91%" },
      { label: "Rotas", value: "38" },
    ],
  },
  {
    title: "Produção",
    subtitle: "Produtividade, perdas e capacidade",
    icon: Factory,
    accent: "from-violet-400/30 to-fuchsia-500/20",
    metrics: [
      { label: "Produção", value: "87%" },
      { label: "Perdas", value: "3,2%" },
      { label: "Capacidade", value: "79%" },
    ],
  },
  {
    title: "DRE",
    subtitle: "Visão financeira executiva",
    icon: Wallet,
    accent: "from-amber-300/30 to-orange-500/20",
    metrics: [
      { label: "Receita", value: "Em breve" },
      { label: "Margem", value: "—" },
      { label: "Resultado", value: "—" },
    ],
  },
];

const DashboardPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dashboards" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Previews</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mockups de <span className="gradient-text">dashboards</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">
            Visualizações conceituais que representam o posicionamento do portfólio em torno de áreas críticas do negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dashboards.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="bg-card border border-border rounded-2xl overflow-hidden card-hover"
            >
              <div className={`h-40 bg-gradient-to-br ${d.accent} border-b border-border relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.18),transparent_35%)]" />
                <div className="absolute top-5 left-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <d.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{d.title}</p>
                    <p className="text-xs text-foreground/70">{d.subtitle}</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-5 right-5 grid grid-cols-3 gap-3">
                  {d.metrics.map((m) => (
                    <div key={m.label} className="rounded-lg bg-background/50 backdrop-blur-sm border border-white/10 p-3">
                      <p className="text-[11px] uppercase tracking-wide text-muted-foreground mb-1">{m.label}</p>
                      <p className="text-sm font-semibold text-foreground">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-12 gap-2 items-end h-28 mb-4">
                  {[42, 58, 46, 72, 64, 80, 68, 77, 60, 74, 84, 71].map((h, idx) => (
                    <motion.div
                      key={idx}
                      className="col-span-1 rounded-t-md bg-gradient-to-t from-primary/25 to-primary/70"
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${h}%` } : { height: 0 }}
                      transition={{ duration: 0.55, delay: 0.25 + idx * 0.03 }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Visão executiva</span>
                  <span>Leitura operacional</span>
                  <span>Drill analítico</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
