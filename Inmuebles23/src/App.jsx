import { Link, Outlet } from '@tanstack/react-router'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Inmuebles23</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}

export default App
