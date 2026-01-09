function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">FreshCart</h2>
            <p className="text-sm">
              Your daily grocery needs delivered fresh and fast at your doorstep.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Offers</li>
              <li className="hover:text-white cursor-pointer">Categories</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
  
          {/* Categories */}
          <div>
            <h3 className="font-semibold text-white mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>Fruits & Vegetables</li>
              <li>Dairy Products</li>
              <li>Snacks</li>
              <li>Beverages</li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-3">Contact</h3>
            <p className="text-sm">📞 +91 98765 43210</p>
            <p className="text-sm mt-1">📧 support@freshcart.com</p>
            <p className="text-sm mt-1">📍 India</p>
          </div>
  
        </div>
  
        <div className="border-t border-gray-700 text-center py-4 text-sm">
          © {new Date().getFullYear()} FreshCart. All rights reserved.
        </div>
      </footer>
    )
  }
  
  export default Footer
  