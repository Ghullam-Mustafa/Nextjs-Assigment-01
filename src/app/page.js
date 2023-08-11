import "bootstrap/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/js/bootstrap.bundl'
import Navbar from '../app/components/navbar/Navbar';
import HeroSection from '../app/components/heroSection/HeroSection';
import TrendingCollection from '../app/components/trendingCollection/TrendingCollection';
import DiscoverMore from '../components/discoverMore/DiscoverMore'
import FluidImg from '../app/components/fluidImg/FluidImg';
import HowItWorks from '../app/components/howItWorks/HowItWorks';
import Subscribe from '../app/components/subscribe/Subscribe';
import Footer from '../app/components/footer/Footer';
export default function Home() {
  return (
    <main >
      <Navbar />
      <HeroSection />
      <TrendingCollection />
      <DiscoverMore/>
      <FluidImg/>
      <HowItWorks/>
      <Subscribe/>
      <Footer/>
    </main>
  )
}
