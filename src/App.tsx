import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Home from './pages/Home'
import Advertise from './pages/Advertise'
import ReportNews from './pages/ReportNews'
import About from './pages/About'
import Team from './pages/Team'

// AnimatePresence needs access to location — lives inside BrowserRouter
function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/"          element={<Home />}       />
        <Route path="/advertise" element={<Advertise />}  />
        <Route path="/report"    element={<ReportNews />} />
        <Route path="/about"     element={<About />}      />
        <Route path="/team"      element={<Team />}       />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#F5F2EB] text-[#0D0D0D]">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  )
}
