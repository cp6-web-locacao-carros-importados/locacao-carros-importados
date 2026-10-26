function Card({ carro }) {
  const { marca, modelo, imagem } = carro

  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
      <div className="aspect-video overflow-hidden bg-zinc-800">
        <img src={imagem} alt={`${marca} ${modelo}`} loading="lazy" className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col gap-3 p-5">
        <p className="text-xs uppercase tracking-widest text-amber-500">{marca}</p>
        <h3 className="text-lg font-semibold">{modelo}</h3>
      </div>
    </article>
  )
}

export default Card
