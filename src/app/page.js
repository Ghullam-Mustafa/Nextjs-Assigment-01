import "bootstrap/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/js/bootstrap.bundl'
import Navbar from '../app/components/navbar/Navbar'
import HeroSection from '../app/components/heroSection/HeroSection'

export default function Home() {
  return (
    <main >
      <Navbar/>
      <HeroSection/>
    </main>
  )
}
