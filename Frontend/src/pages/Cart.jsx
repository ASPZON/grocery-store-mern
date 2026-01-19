import { useCart } from '../context/CartContext'

function Cart() {
  const { cartItems, increaseQty, decreaseQty, cartTotal } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="text-xl font-semibold">Your cart is empty 🛒</p>
        <p className="text-gray-500 mt-2">
          Add some fresh groceries to get started!
        </p>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className="space-y-4">
        {cartItems.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-4"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-green-600 font-bold">
                ₹{item.price}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 py-1 border rounded"
              >
                −
              </button>

              <span className="font-semibold">
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>

            <div className="font-semibold">
              ₹{item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>

      {/* CART TOTAL */}
      <div className="flex justify-between items-center mt-8 text-xl font-bold">
        <span>Total</span>
        <span>₹{cartTotal}</span>
      </div>

      {/* CHECKOUT */}
      <button className="mt-6 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Cart
