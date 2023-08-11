import "bootstrap/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/js/bootstrap.bundl'
import Navbar from '../app/components/navbar/Navbar';
import HeroSection from '../app/components/heroSection/HeroSection';
import TrendingCollection from '../app/components/trendingCollection/TrendingCollection';
import Footer from '../app/components/footer/Footer'
import Subscribe from '../app/components/subscribe/Subscribe'
import HowItWorks from '../app/components/howItWorks/HowItWorks'

export default function Home() {
  return (
    <main >
      <Navbar />
      <HeroSection />
      <TrendingCollection />
      <HowItWorks/>
      <Subscribe/>
      <Footer/>
    </main>
  )
}
