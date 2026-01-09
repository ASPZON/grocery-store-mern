function OffersBanner() {
    return (
      <div className="p-6">
        <div className="bg-green-600 text-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">Flat 20% OFF</h3>
            <p className="text-sm mt-2">
              On your first grocery order. Limited time offer!
            </p>
          </div>
  
          <button className="mt-4 md:mt-0 bg-white text-green-600 px-6 py-2 rounded font-semibold hover:bg-gray-100">
            Shop Now
          </button>
        </div>
      </div>
    )
  }
  
  export default OffersBanner
  