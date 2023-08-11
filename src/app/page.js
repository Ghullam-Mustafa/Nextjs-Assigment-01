import "bootstrap/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/js/bootstrap.bundl'
import Navbar from '../app/components/navbar/Navbar';
import HeroSection from '../app/components/heroSection/HeroSection';
import TrendingCollection from '../app/components/trendingCollection/TrendingCollection';
import Footer from '../app/components/footer/Footer'
import Subscribe from '../app/components/subscribe/Subscribe'

export default function Home() {
  return (
    <main >
      <Navbar />
      <HeroSection />
      <TrendingCollection />
      <Subscribe/>
      <Footer/>
    </main>
  )
}
