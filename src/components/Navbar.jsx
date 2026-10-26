import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="text-xl font-bold tracking-tight">
          Imported<span className="text-amber-500">Rent</span>
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
