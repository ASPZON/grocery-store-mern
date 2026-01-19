import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="border rounded p-4 shadow">
      <img src={product.image} alt={product.name} />
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-green-600 font-bold">₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
