import Card from '../components/Card'
import carros from '../data/carros'

function Carros() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Nossa frota</h1>
        <p className="text-zinc-400">Escolha seu importado e reserve em poucos cliques.</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {carros.map((carro) => (
          <Card key={carro.id} carro={carro} />
        ))}
      </div>
    </section>
  )
}

export default Carros
