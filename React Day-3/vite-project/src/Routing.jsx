import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Timer from './Timer'
import WindowResize from './WindowResize'

function Routing() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-brand">
          <div className="brand-mark">⚛</div>
          <span className="brand-text">
            React<span>Hooks</span>
          </span>
        </div>

        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/timer">Timer</NavLink>
          <NavLink to="/resize">Window Resize</NavLink>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/resize" element={<WindowResize />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default Routing