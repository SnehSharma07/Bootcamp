function About() {
  return (
    <div className="page">
      <span className="badge badge-purple">About Project</span>

      <h1>React Hooks Demonstration Project</h1>

      <p className="subtitle">
        This project was built to demonstrate modern React concepts including
        React Router DOM and the useEffect Hook.
      </p>

      <div className="home-grid">
        <div className="home-card">
          <div className="home-card-icon purple">⚛️</div>
          <h3>React Router</h3>
          <p>
            Provides seamless page navigation without full page reloads.
          </p>
        </div>

        <div className="home-card">
          <div className="home-card-icon teal">🔄</div>
          <h3>useEffect Hook</h3>
          <p>
            Manage side effects such as timers, API calls and event listeners.
          </p>
        </div>

        <div className="home-card">
          <div className="home-card-icon blue">💡</div>
          <h3>Best Practices</h3>
          <p>
            Demonstrates cleanup functions and proper React component design.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About