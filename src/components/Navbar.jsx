import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar({ carrinho, carrinhoAberto, onAbrirCarrinho, onFecharCarrinho, onRemoverDoCarrinho }) {
  const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition ${
      isActive ? 'bg-amber-500 text-zinc-950' : 'text-zinc-300 hover:text-amber-400'
    }`

  useEffect(() => {
    if (!carrinhoAberto) return

    const aoPressionarTecla = (event) => {
      if (event.key === 'Escape') onFecharCarrinho()
    }

    document.addEventListener('keydown', aoPressionarTecla)
    return () => document.removeEventListener('keydown', aoPressionarTecla)
  }, [carrinhoAberto, onFecharCarrinho])

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
              {carrinho.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-zinc-400">
                  <p>Seu carrinho está vazio</p>
                  <Link to="/carros" onClick={onFecharCarrinho} className="text-sm text-amber-400 hover:underline">
                    Ver frota disponível
                  </Link>
                </div>
              ) : (
                <ul className="flex flex-col gap-4">
                  {carrinho.map(({ carro }) => (
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
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </aside>
        </div>
      )}
    </>
  )
}

export default Navbar
