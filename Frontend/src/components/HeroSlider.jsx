import { useEffect, useState } from 'react'

const slides = [
  { id: 1, text: 'Fresh Groceries Delivered Daily', bg: 'bg-green-200' },
  { id: 2, text: 'Best Prices on Vegetables & Fruits', bg: 'bg-yellow-200' },
  { id: 3, text: 'Quality Products You Can Trust', bg: 'bg-blue-200' },
]

function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className={`w-full h-64 sm:h-80 md:h-96 flex items-center justify-center transition-all duration-700 ${slides[current].bg}`}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center px-4">
        {slides[current].text}
      </h1>
    </div>
  )
}

export default HeroSlider
