import './App.css'

import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Newsletter from './components/newsletter/Newsletter'

function App() {

  return (
    <>
      <div className='App'>
        <Navbar />
        <Hero />
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}

export default App
