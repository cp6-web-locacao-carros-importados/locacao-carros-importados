import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Carros from './pages/Carros'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carros" element={<Carros />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
