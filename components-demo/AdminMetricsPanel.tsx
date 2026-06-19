type AdminMetricsPanelProps = {
  totalPools: number;
  totalDemand: number;
  activeOffers: number;
  topCategory: string;
  insight: string;
};

export function AdminMetricsPanel({
  totalPools,
  totalDemand,
  activeOffers,
  topCategory,
  insight,
}: AdminMetricsPanelProps) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-zinc-950/85 p-6 text-white">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">Admin intelligence</p>
          <h2 className="mt-3 text-2xl font-semibold">Demand operating view</h2>
        </div>
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          {topCategory}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
        <Metric label="Pools" value={totalPools} />
        <Metric label="Demand" value={totalDemand} />
        <Metric label="Active offers" value={activeOffers} />
      </div>

      <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-zinc-300">
        {insight}
      </p>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-black/40 p-4">
      <p className="text-[0.65rem] uppercase tracking-[0.16em] text-zinc-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  );
}
