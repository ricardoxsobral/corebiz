import './App.css'

import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Newsletter from './components/newsletter/Newsletter'
import Products from './components/products/Products'

import { useState } from 'react'

function App() {

  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <>
      <div className='App'>
        <Navbar cartCount={cartCount} />
        <Hero />
        <Products updateCartCount={updateCartCount} />
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}

export default App
