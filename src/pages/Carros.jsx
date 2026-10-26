import { useState } from 'react'
import Card from '../components/Card'
import carros from '../data/carros'

const categorias = ['Todos', ...new Set(carros.map((carro) => carro.categoria))]

function Carros() {
  const [categoria, setCategoria] = useState('Todos')

  const carrosFiltrados = carros.filter(
    (carro) => categoria === 'Todos' || carro.categoria === categoria,
  )

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Nossa frota</h1>
        <p className="text-zinc-400">Escolha seu importado e reserve em poucos cliques.</p>
      </header>

      <div className="mb-8 flex flex-wrap gap-2">
        {categorias.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategoria(item)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              categoria === item
                ? 'bg-amber-500 font-semibold text-zinc-950'
                : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {carrosFiltrados.map((carro) => (
          <Card key={carro.id} carro={carro} />
        ))}
      </div>
    </section>
  )
}

export default Carros
