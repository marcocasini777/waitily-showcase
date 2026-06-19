type DemandPoolCardProps = {
  canonicalQuery: string;
  category?: string | null;
  demandCount: number;
  averageReferencePrice?: number | null;
  statusLabel: string;
  timeRemaining: string;
  offerCount: number;
};

export function DemandPoolCard({
  canonicalQuery,
  category,
  demandCount,
  averageReferencePrice,
  statusLabel,
  timeRemaining,
  offerCount,
}: DemandPoolCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-white">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            {category ?? "Non classificata"}
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight">
            {canonicalQuery}
          </h3>
          <p className="mt-2 text-sm text-zinc-400">{statusLabel}</p>
        </div>

        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          {timeRemaining}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
        <Metric label="Domanda" value={String(demandCount)} />
        <Metric
          label="Prezzo medio"
          value={averageReferencePrice ? `€${averageReferencePrice.toFixed(2)}` : "N/D"}
        />
        <Metric label="Offerte" value={String(offerCount)} />
      </div>
    </article>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-black/40 p-4">
      <p className="text-[0.65rem] uppercase tracking-[0.16em] text-zinc-500">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}
