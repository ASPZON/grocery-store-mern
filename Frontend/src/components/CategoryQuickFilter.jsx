function CategoryQuickFilter() {
    const categories = [
      'Fruits',
      'Vegetables',
      'Dairy',
      'Snacks',
      'Beverages',
      'Household',
    ]
  
    return (
      <div className="bg-white border-t">
        <div className="flex gap-4 overflow-x-auto px-6 py-3 text-sm font-medium">
          {categories.map(category => (
            <button
              key={category}
              onClick={() =>
                document
                  .getElementById(category.toLowerCase())
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="whitespace-nowrap px-4 py-2 bg-gray-100 rounded-full hover:bg-green-600 hover:text-white transition"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    )
  }
  
  export default CategoryQuickFilter
  