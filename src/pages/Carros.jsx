import { useState } from 'react'
import Card from '../components/Card'
import carros from '../data/carros'

const categorias = ['Todos', ...new Set(carros.map((carro) => carro.categoria))]

function Carros({ carrinho, onAlugar }) {
  const [categoria, setCategoria] = useState('Todos')
  const [busca, setBusca] = useState('')

  const carrosFiltrados = carros.filter((carro) => {
    const porCategoria = categoria === 'Todos' || carro.categoria === categoria
    const termo = busca.toLowerCase()
    const porBusca = `${carro.marca} ${carro.modelo}`.toLowerCase().includes(termo)
    return porCategoria && porBusca
  })

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Nossa frota</h1>
        <p className="text-zinc-400">Escolha seu importado e reserve em poucos cliques.</p>
      </header>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
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
        <input
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar marca ou modelo..."
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm outline-none focus:border-amber-500 sm:w-64"
        />
      </div>

      {carrosFiltrados.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {carrosFiltrados.map((carro) => (
            <Card
              key={carro.id}
              carro={carro}
              onAlugar={() => onAlugar(carro)}
              noCarrinho={carrinho.some((item) => item.carro.id === carro.id)}
            />
          ))}
        </div>
      ) : (
        <p className="py-20 text-center text-zinc-400">Nenhum carro encontrado.</p>
      )}
    </section>
  )
}

export default Carros
