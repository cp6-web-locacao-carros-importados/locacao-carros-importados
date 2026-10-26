import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar({
  carrinho,
  carrinhoAberto,
  onAbrirCarrinho,
  onFecharCarrinho,
  onRemoverDoCarrinho,
  onAlterarDias,
  onLimparCarrinho,
}) {
  const [finalizado, setFinalizado] = useState(false)

  const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition ${
      isActive ? 'bg-amber-500 text-zinc-950' : 'text-zinc-300 hover:text-amber-400'
    }`

  const total = carrinho.reduce((soma, item) => soma + item.carro.diaria * item.dias, 0)

  useEffect(() => {
    if (!carrinhoAberto) {
      setFinalizado(false)
      return
    }

    const aoPressionarTecla = (event) => {
      if (event.key === 'Escape') onFecharCarrinho()
    }

    document.addEventListener('keydown', aoPressionarTecla)
    return () => document.removeEventListener('keydown', aoPressionarTecla)
  }, [carrinhoAberto, onFecharCarrinho])

  const finalizarLocacao = () => {
    onLimparCarrinho()
    setFinalizado(true)
  }

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <NavLink to="/" className="text-xl font-bold tracking-tight">
            Imported<span className="text-amber-500">Rent</span>
          </NavLink>
          <div className="flex items-center gap-2">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/carros" className={linkClass}>
              Carros
            </NavLink>
            <button
              type="button"
              onClick={onAbrirCarrinho}
              className="relative ml-2 rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:text-amber-400"
            >
              Carrinho
              {carrinho.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs font-semibold text-zinc-950">
                  {carrinho.length}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {carrinhoAberto && (
        <div className="fixed inset-0 z-20 flex justify-end">
          <button
            type="button"
            aria-label="Fechar carrinho"
            onClick={onFecharCarrinho}
            className="absolute inset-0 bg-zinc-950/70"
          />

          <aside className="relative flex h-full w-96 flex-col bg-zinc-900">
            <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
              <h2 className="text-lg font-semibold">Seu carrinho</h2>
              <button
                type="button"
                onClick={onFecharCarrinho}
                aria-label="Fechar carrinho"
                className="rounded-md px-2 py-1 text-zinc-400 hover:text-amber-400"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {finalizado ? (
                <p className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-300">
                  Locação confirmada! Em breve enviaremos os detalhes para você.
                </p>
              ) : carrinho.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-zinc-400">
                  <p>Seu carrinho está vazio</p>
                  <Link to="/carros" onClick={onFecharCarrinho} className="text-sm text-amber-400 hover:underline">
                    Ver frota disponível
                  </Link>
                </div>
              ) : (
                <ul className="flex flex-col gap-4">
                  {carrinho.map(({ carro, dias }) => (
                    <li key={carro.id} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-amber-500">{carro.marca}</p>
                          <p className="font-semibold">{carro.modelo}</p>
                          <p className="text-xs text-zinc-400">
                            {carro.diaria.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} /dia
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoverDoCarrinho(carro.id)}
                          aria-label={`Remover ${carro.modelo}`}
                          className="text-zinc-500 hover:text-amber-400"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => onAlterarDias(carro.id, dias - 1)}
                            disabled={dias <= 1}
                            aria-label="Diminuir dias"
                            className="h-7 w-7 rounded-md bg-zinc-800 text-sm text-zinc-200 disabled:opacity-40"
                          >
                            −
                          </button>
                          <span className="w-6 text-center text-sm">{dias}</span>
                          <button
                            type="button"
                            onClick={() => onAlterarDias(carro.id, dias + 1)}
                            disabled={dias >= 30}
                            aria-label="Aumentar dias"
                            className="h-7 w-7 rounded-md bg-zinc-800 text-sm text-zinc-200 disabled:opacity-40"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm font-semibold text-amber-400">
                          {(carro.diaria * dias).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {!finalizado && carrinho.length > 0 && (
              <div className="flex flex-col gap-3 border-t border-zinc-800 px-5 py-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Total</span>
                  <span className="text-lg font-bold text-amber-400">
                    {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onLimparCarrinho}
                    className="flex-1 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-800"
                  >
                    Limpar
                  </button>
                  <button
                    type="button"
                    onClick={finalizarLocacao}
                    className="flex-1 rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-amber-400"
                  >
                    Finalizar locação
                  </button>
                </div>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  )
}

export default Navbar
