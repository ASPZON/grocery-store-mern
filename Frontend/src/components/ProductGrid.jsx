import ProductSkeleton from './ProductSkeleton'
import EmptyState from './EmptyState'

function ProductGrid() {
  const isLoading = false
  const products = [] // later from backend

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>

      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      )}

      {!isLoading && products.length === 0 && (
        <EmptyState
          title="No products found"
          description="Try searching a different item or check back later."
        />
      )}
    </div>
  )
}

export default ProductGrid
