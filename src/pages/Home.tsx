
// import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'
import LatestCollections from '../components/LatestCollections'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
  return (
    <div>
       {/* <Navbar/> */}
       <HeroBanner/>
      {/* <Categories/> */}
       <BestSellers/>
       <LatestCollections/>
       <Footer/>
    </div>
  )
}

export default Home
