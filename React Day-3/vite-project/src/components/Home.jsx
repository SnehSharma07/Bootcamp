function Home() {
  return (
    <div className="page">
      <span className="badge badge-purple">React Router & Hooks</span>

      <h1>Modern React Learning Dashboard</h1>

      <p className="subtitle">
        Explore React Router navigation and powerful useEffect hook examples
        through an interactive and beautifully designed application.
      </p>

      <div className="home-grid">
        <div className="home-card">
          <div className="home-card-icon purple">⚛️</div>
          <h3>React Router</h3>
          <p>
            Navigate between pages without refreshing the browser using
            BrowserRouter, Routes and NavLink.
          </p>
        </div>

        <div className="home-card">
          <div className="home-card-icon teal">⏱️</div>
          <h3>Stopwatch Timer</h3>
          <p>
            Learn useEffect with setInterval and cleanup functions through a
            live stopwatch example.
          </p>
        </div>

        <div className="home-card">
          <div className="home-card-icon blue">📱</div>
          <h3>Window Resize</h3>
          <p>
            Track browser width and height dynamically using event listeners
            and cleanup logic.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home