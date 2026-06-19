type OfferOutcomeCardProps = {
  title: string;
  offerType: "NEGOTIATED" | "RETAILER_DIRECT" | "CASHBACK" | "AFFILIATE" | "MANUAL";
  isFallback: boolean;
  price?: number | null;
  estimatedSavings?: number | null;
  cashbackAmount?: number | null;
  disclosure?: string | null;
};

export function OfferOutcomeCard({
  title,
  offerType,
  isFallback,
  price,
  estimatedSavings,
  cashbackAmount,
  disclosure,
}: OfferOutcomeCardProps) {
  const label = isFallback ? "Alternativa fallback" : "Outcome principale";

  return (
    <article className={`rounded-3xl border p-5 text-white ${isFallback ? "border-white/10 bg-[#0d0f12]" : "border-emerald-300/20 bg-emerald-300/[0.04]"}`}>
      <p className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-zinc-300">
        {offerType}
      </p>
      <p className="mt-3 w-fit rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-zinc-500">
        {label}
      </p>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>

      <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
        <Signal label="Prezzo" value={price ? `€${price}` : "N/D"} />
        <Signal label="Risparmio" value={estimatedSavings ? `€${estimatedSavings}` : "N/D"} />
        <Signal label="Cashback" value={cashbackAmount ? `€${cashbackAmount}` : "N/D"} />
      </div>

      {disclosure ? (
        <p className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-3 text-xs leading-5 text-zinc-500">
          {disclosure}
        </p>
      ) : null}
    </article>
  );
}

function Signal({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
      <p className="text-[0.65rem] uppercase tracking-[0.16em] text-zinc-500">{label}</p>
      <p className="mt-2 font-semibold">{value}</p>
    </div>
  );
}
