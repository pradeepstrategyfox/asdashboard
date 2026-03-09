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
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-wrapper">
        <Topbar />
        <DashboardContent />
        <Footer />
      </div>
    </div>
  )
}

export default App
