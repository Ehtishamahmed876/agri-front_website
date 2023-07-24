import AboutUs from '@/components/About'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import OurPhilosophy from '@/components/Philopshy'
import OurServices from '@/components/Services'
import Slider from '@/components/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
    <Navbar />
    <Slider />
    <div className='bg-back-image bg-cover'>
      <AboutUs />
      <OurServices />
      <OurPhilosophy />
    </div>
    <Footer />
  </div>
  )
}
