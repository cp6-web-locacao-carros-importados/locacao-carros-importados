function Card({ carro, onAlugar, noCarrinho }) {
  const { marca, modelo, ano, categoria, origem, potencia, diaria, imagem } = carro

  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-amber-500/60">
      <div className="aspect-video overflow-hidden bg-zinc-800">
        <img
          src={imagem}
          alt={`${marca} ${modelo}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-amber-500">{marca}</p>
            <h3 className="text-lg font-semibold">{modelo}</h3>
          </div>
          <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">{categoria}</span>
        </div>

        <ul className="grid grid-cols-3 gap-2 text-center text-xs text-zinc-400">
          <li className="rounded-lg bg-zinc-800/60 py-2">{ano}</li>
          <li className="rounded-lg bg-zinc-800/60 py-2">{origem}</li>
          <li className="rounded-lg bg-zinc-800/60 py-2">{potencia} cv</li>
        </ul>

        <div className="mt-1 flex items-center justify-between">
          <p>
            <span className="text-xl font-bold text-amber-400">
              {diaria.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
            <span className="text-sm text-zinc-400"> /dia</span>
          </p>
          <button
            type="button"
            onClick={onAlugar}
            disabled={noCarrinho}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              noCarrinho
                ? 'cursor-not-allowed bg-zinc-800 text-zinc-500'
                : 'bg-amber-500 text-zinc-950 hover:bg-amber-400'
            }`}
          >
            {noCarrinho ? 'No carrinho' : 'Alugar'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card
