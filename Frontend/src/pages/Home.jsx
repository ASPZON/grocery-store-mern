import HeroSlider from '../components/HeroSlider'
import CategoryQuickFilter from '../components/CategoryQuickFilter'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import OffersBanner from '../components/OffersBanner'
import ProductGrid from '../components/ProductGrid'

function Home() {
  return (
    <div>
      <HeroSlider />
      <Categories />
      <FeaturedProducts />
      <OffersBanner />
      <ProductGrid />
    </div>
  )
}

export default Home
