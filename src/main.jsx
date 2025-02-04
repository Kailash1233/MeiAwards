import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Gallery from './Gallery.jsx'
import Rules from './Rules'
import Navbar from './Components/Navbar'
import About from './Components/About'
import EventType from './Components/EventType'
import Mission from './Components/Mission'
import Faq from './Components/Faq'
import Footer from './Components/Footer.jsx'
import WinnersSection from './Components/Winner.jsx'
import TestimonialCards from './Components/Testimonials.jsx'
import TeamSection from './Components/Team.jsx'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <App />
            <About />
            <EventType />
            <Mission />
            <WinnersSection />
            <TestimonialCards />
            <TeamSection />
            <Faq />
          </>
        } />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StrictMode>
)