import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Remix from './pages/Remix'
import About from './pages/About'
import OpportunityDetail from './pages/OpportunityDetail'

function AppShell() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname

    if (path === '/remix') {
      document.title = 'Mahreen Remix'
    } else if (path === '/opportunity/' || path.startsWith('/opportunity/')) {
      document.title = 'Mahreen Remix Idea'
    } else if (path === '/about') {
      document.title = 'About Mahreen'
    } else {
      document.title = 'Mahreen Remix'
    }
  }, [location])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/remix" element={<Remix />} />
        <Route path="/about" element={<About />} />
        <Route path="/opportunity/:slug" element={<OpportunityDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default function App() {
  return <AppShell />
}
