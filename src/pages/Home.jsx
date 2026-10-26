import { Link } from 'react-router-dom'
import Card from '../components/Card'
import carros from '../data/carros'

const diferenciais = [
  { titulo: 'Frota premium', texto: 'Modelos importados de marcas alemãs, italianas, britânicas e mais.' },
  { titulo: 'Seguro incluso', texto: 'Proteção completa contra danos e roubo em todas as locações.' },
  { titulo: 'Entrega no local', texto: 'Levamos o carro até você, no aeroporto, hotel ou em casa.' },
]

function Home() {
  const destaques = carros.slice(0, 3)

  return (
    <>
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

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-3">
        {diferenciais.map((item) => (
          <div key={item.titulo} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-2 font-semibold text-amber-400">{item.titulo}</h2>
            <p className="text-sm text-zinc-400">{item.texto}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Destaques da semana</h2>
          <Link to="/carros" className="text-sm text-amber-400 hover:underline">
            Ver todos →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destaques.map((carro) => (
            <Card key={carro.id} carro={carro} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
