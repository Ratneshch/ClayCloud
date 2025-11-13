import React from 'react'
import "./i18n";
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
        <Home/>
      <Footer />
    </div>
  )
}

export default App
