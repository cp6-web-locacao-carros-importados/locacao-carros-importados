import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-zinc-950 to-zinc-950" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-24">
        <span className="rounded-full border border-amber-500/40 px-3 py-1 text-xs uppercase tracking-widest text-amber-400">
          Locação de carros importados
        </span>
        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
          Dirija o importado dos seus sonhos <span className="text-amber-500">hoje mesmo</span>.
        </h1>
        <p className="max-w-xl text-zinc-400">
          Porsche, Ferrari, Lamborghini, BMW e muito mais. Alugue por dia, sem burocracia, com seguro e entrega inclusos.
        </p>
        <Link
          to="/carros"
          className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-amber-400"
        >
          Ver frota completa
        </Link>
      </div>
    </section>
  )
}

export default Home
