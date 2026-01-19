import ProductCard from './ProductCard'
import EmptyState from './EmptyState'
import { useSearch } from '../context/SearchContext'

function ProductGrid() {
  const { searchTerm } = useSearch()

  const products = [
    { id: 1, name: 'Apple', price: 120 },
    { id: 2, name: 'Milk', price: 60 },
    { id: 3, name: 'Bread', price: 40 }
  ]

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>

      {filteredProducts.length === 0 && (
        <EmptyState
          title="No products found"
          description="Try a different search"
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
