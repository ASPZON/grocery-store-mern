import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SearchProvider } from './context/SearchContext'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <SearchProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

        </SearchProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
