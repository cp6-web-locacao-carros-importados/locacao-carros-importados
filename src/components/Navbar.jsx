import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="text-xl font-bold tracking-tight">
          Imported<span className="text-amber-500">Rent</span>
        </NavLink>
        <div className="flex gap-2">
          <NavLink to="/" end className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300">
            Home
          </NavLink>
          <NavLink to="/carros" className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300">
            Carros
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
