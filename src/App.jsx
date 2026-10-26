import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Carros from './pages/Carros'

function App() {
  const [carrinho, setCarrinho] = useState([])
  const [carrinhoAberto, setCarrinhoAberto] = useState(false)

  const adicionarAoCarrinho = (carro) => {
    setCarrinho((atual) => {
      if (atual.some((item) => item.carro.id === carro.id)) return atual
      return [...atual, { carro, dias: 1 }]
    })
    setCarrinhoAberto(true)
  }

  const removerDoCarrinho = (carroId) => {
    setCarrinho((atual) => atual.filter((item) => item.carro.id !== carroId))
  }

  const alterarDias = (carroId, dias) => {
    const diasValidos = Math.min(30, Math.max(1, dias))
    setCarrinho((atual) =>
      atual.map((item) => (item.carro.id === carroId ? { ...item, dias: diasValidos } : item)),
    )
  }

  const limparCarrinho = () => setCarrinho([])

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar
          carrinho={carrinho}
          carrinhoAberto={carrinhoAberto}
          onAbrirCarrinho={() => setCarrinhoAberto(true)}
          onFecharCarrinho={() => setCarrinhoAberto(false)}
          onRemoverDoCarrinho={removerDoCarrinho}
          onAlterarDias={alterarDias}
          onLimparCarrinho={limparCarrinho}
        />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home carrinho={carrinho} onAlugar={adicionarAoCarrinho} />} />
            <Route path="/carros" element={<Carros carrinho={carrinho} onAlugar={adicionarAoCarrinho} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
