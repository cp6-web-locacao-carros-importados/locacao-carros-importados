import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition ${
      isActive ? 'bg-amber-500 text-zinc-950' : 'text-zinc-300 hover:text-amber-400'
    }`

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="text-xl font-bold tracking-tight">
          Imported<span className="text-amber-500">Rent</span>
        </NavLink>
        <div className="flex gap-2">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/carros" className={linkClass}>
            Carros
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
