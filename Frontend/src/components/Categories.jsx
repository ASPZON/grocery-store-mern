const categories = [
    'Fruits',
    'Vegetables',
    'Dairy',
    'Bakery',
    'Snacks',
    'Beverages',
  ]
  
  function Categories() {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map(category => (
            <div
              key={category}
              className="bg-white border rounded-lg p-4 text-center cursor-pointer hover:bg-green-50 transition"
            >
              <div className="h-16 bg-gray-200 mb-2 flex items-center justify-center">
                Icon
              </div>
              <p className="font-medium">{category}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Categories
  