import { useState, useEffect } from 'react'

function WindowResize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="page">
      <span className="badge badge-purple">
        useEffect Hook Example
      </span>

      <h1>Window Resize Tracker</h1>

      <p className="subtitle">
        This component updates automatically whenever the browser window size
        changes.
      </p>

      <div className="timer-card">
        <div
          className="timer-face"
          style={{
            fontSize: '3rem',
            letterSpacing: '2px'
          }}
        >
          {size.width} × {size.height}
        </div>

        <p className="timer-status">
          📐 Live Screen Dimensions
        </p>

        <p
          style={{
            color: '#64748b',
            marginTop: '10px'
          }}
        >
          Resize the browser window to see live updates.
        </p>
      </div>
    </div>
  )
}

export default WindowResize