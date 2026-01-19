import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CategoryQuickFilter from './CategoryQuickFilter'
import logo from '../assets/logo.png'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { useSearch } from '../context/SearchContext'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { cartCount, showHeart } = useCart()
  const { searchTerm, setSearchTerm } = useSearch()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ================= STICKY HEADER ================= */}
      <div
        className={`sticky top-0 z-50 bg-green-600 transition-shadow ${
          scrolled ? 'shadow-lg' : ''
        }`}
      >
        {/* ================= MAIN NAVBAR ================= */}
        <nav className="flex items-center text-white h-24">

          {/* LOGO (FREE SPACE) */}
          <div className="flex items-center px-4 shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Grocery Store Logo"
                className="h-24 w-auto object-contain origin-top swing"
              />
            </Link>
          </div>

          {/* CONTENT */}
          <div className="flex flex-1 items-center justify-between px-6">

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden mr-3"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>

            {/* ADDRESS */}
            <div className="hidden lg:flex flex-col text-xs cursor-pointer">
              <span className="text-gray-200">Deliver to</span>
              <span className="font-semibold text-sm">📍 Pune 411001</span>
            </div>

            {/* SEARCH */}
            <div className="hidden md:flex flex-grow max-w-xl mx-6">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 text-black rounded-l focus:outline-none"
              />
              <button className="bg-white text-green-600 px-4 rounded-r font-semibold">
                Search
              </button>
            </div>

            {/* ACCOUNT & LISTS */}
            <div className="relative group hidden lg:block">
              <div className="cursor-pointer leading-tight">
                <span className="text-xs text-gray-200">Hello, Sign in</span>
                <div className="flex items-center gap-1 font-semibold">
                  Account & Lists <span className="text-xs">▾</span>
                </div>
              </div>

              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <ul className="py-2 text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100">Your Account</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Your Orders</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Wishlist</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Sign In</li>
                </ul>
              </div>
            </div>

            {/* RETURNS & ORDERS */}
            <Link to="/orders" className="hidden lg:flex flex-col">
              <span className="text-xs text-gray-200">Returns</span>
              <span className="font-semibold text-sm">& Orders</span>
            </Link>

            {/* CART */}
            <Link to="/cart" className="relative flex items-center gap-1">
              <AnimatePresence>
                {showHeart && (
                  <motion.span
                    initial={{ opacity: 0, y: 0, scale: 0.5 }}
                    animate={{ opacity: 1, y: -20, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute -top-2 right-2 text-red-500 text-lg"
                  >
                    ❤️
                  </motion.span>
                )}
              </AnimatePresence>

              <div className="relative">
                <ShoppingCart size={28} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-1.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>

              <span className="hidden lg:block font-semibold text-sm">Cart</span>
            </Link>

          </div>
        </nav>

        {/* MOBILE SEARCH */}
        <div className="md:hidden px-4 pb-3 bg-green-600">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded text-black"
          />
        </div>

        {/* CATEGORY FILTER */}
        <CategoryQuickFilter />
      </div>

      {/* ================= MOBILE SLIDE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              className="fixed top-0 left-0 h-full w-72 bg-white z-50 p-6"
            >
              <button
                className="mb-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>

              <nav className="flex flex-col gap-4 text-lg font-medium">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/categories" onClick={() => setMobileMenuOpen(false)}>Categories</Link>
                <Link to="/orders" onClick={() => setMobileMenuOpen(false)}>Orders</Link>
                <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
                  Cart ({cartCount})
                </Link>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
