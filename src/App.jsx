import './App.css'

import NavbarMobile from './components/navbar/NavbarMobile'
import NavbarWeb from './components/navbar/NavbarWeb'

function App() {

  return (
    <>
      <div className='App'>
        <NavbarWeb />
        <NavbarMobile />
      </div>
    </>
  )
}

export default App
