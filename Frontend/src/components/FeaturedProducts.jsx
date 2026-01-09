function FeaturedProducts() {
    return (
      <div className="p-6 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(item => (
            <div
              key={item}
              className="bg-white border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <div className="h-32 bg-gray-200 mb-4 flex items-center justify-center">
                Image
              </div>
  
              <h3 className="font-semibold text-lg">Product Name</h3>
              <p className="text-gray-600">₹99</p>
  
              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default FeaturedProducts
  