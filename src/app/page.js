import "bootstrap/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/js/bootstrap.bundl'
import Navbar from '../app/components/navbar/Navbar';
import HeroSection from '../app/components/heroSection/HeroSection';
import TrendingCollection from '../app/components/trendingCollection/TrendingCollection';
import TopCreater from '../app/components/topCreater/TopCreater'
import BrowsCategories from '../app/components/browsCategories/BrowsCategories'
import DiscoverMore from '../app/components/discoverMore/DiscoverMore'
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
      <TopCreater/>
      <BrowsCategories/>
      <DiscoverMore/>
      <FluidImg/>
      <HowItWorks/>
      <Subscribe/>
      <Footer/>
    </main>
  )
}
