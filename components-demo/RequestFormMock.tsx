export function RequestFormMock() {
  return (
    <form className="rounded-[2rem] border border-white/10 bg-zinc-950/85 p-6 text-white shadow-2xl shadow-black/40">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
        Crea una richiesta
      </p>

      <h2 className="mt-3 text-2xl font-semibold tracking-tight">
        Dicci cosa vuoi comprare
      </h2>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        Aggiungi prodotto, prezzo e sito di riferimento. Se esiste già una domanda simile,
        ti unisci al pool automaticamente.
      </p>

      <div className="mt-6 grid gap-3">
        <Input label="Prodotto" placeholder="Es. iPhone 17 Pro Max" />
        <Input label="Prezzo di riferimento" placeholder="Es. 1199" />
        <Input label="Link prodotto o sito" placeholder="https://..." />
        <Input label="Email" placeholder="tu@email.com" />
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <p className="text-sm leading-6 text-zinc-300">
          Ti avvisiamo solo se troviamo offerte o aggiornamenti utili.
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
          Niente spam. Nessun account richiesto.
        </p>
      </div>

      <button className="mt-5 w-full rounded-2xl bg-white px-6 py-4 font-semibold text-zinc-950">
        Unisciti alla domanda
      </button>
    </form>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-zinc-300">{label}</span>
      <input
        placeholder={placeholder}
        className="rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none placeholder:text-zinc-600"
      />
    </label>
  );
}
