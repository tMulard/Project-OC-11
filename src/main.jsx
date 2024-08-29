import './reset.css'
import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './pages/Error/Error.jsx'
import About from './pages/About/About.jsx'
import Housing from './pages/Housing/Housing.jsx'
import HousesProvider from './providers/housesProvider.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HousesProvider>
      <BrowserRouter basename={import.meta.env.PROD ? "/Project-OC-11/" : "/"}>
        <main className='main'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/housing/:houseId' element={<Housing />} />
            <Route path='*' element={<Error />} />  
          </Routes>
        </main>
      </BrowserRouter>
    </HousesProvider>
    <Footer />
  </React.StrictMode>,
)
