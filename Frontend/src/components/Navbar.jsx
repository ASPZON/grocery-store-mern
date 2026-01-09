import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CategoryQuickFilter from './CategoryQuickFilter'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    /* ONE sticky container */
    <div
      className={`sticky top-0 z-50 bg-green-600 transition-shadow ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      {/* Main Navbar */}
      <nav className="text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">GroceryStore</Link>
        </h1>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 text-black rounded-l focus:outline-none"
          />
          <button className="bg-white text-green-600 px-4 rounded-r font-semibold">
            Search
          </button>
        </div>

        <div className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 rounded text-black"
        />
      </div>

      {/* Category filter is PART of sticky header */}
      <CategoryQuickFilter />
    </div>
  )
}

export default Navbar
