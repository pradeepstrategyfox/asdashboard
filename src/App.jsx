import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import DashboardContent from './components/DashboardContent'

function Footer() {
  return (
    <footer className="site-footer">
      <span>Designed by </span>
      <a
        href="https://www.strategyfox.in"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        Strategy Fox
      </a>
    </footer>
  )
}

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="app-layout">
      {/* Mobile overlay */}
      {drawerOpen && (
        <div className="mobile-overlay" onClick={() => setDrawerOpen(false)} />
      )}

      <Sidebar drawerOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <div className="main-wrapper">
        <Topbar onMenuClick={() => setDrawerOpen(v => !v)} />
        <DashboardContent />
        <Footer />
      </div>
    </div>
  )
}

export default App
