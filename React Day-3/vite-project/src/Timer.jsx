import { useState, useEffect } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return

    const id = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)

    return () => clearInterval(id)
  }, [running])

  const reset = () => {
    setRunning(false)
    setSeconds(0)
  }

  const pad = n => String(n).padStart(2, '0')
  const display = `${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}`

  return (
    <div className="page">
      <span className="badge badge-purple">
        useEffect Hook Example
      </span>

      <h1>Interactive Stopwatch</h1>

      <p className="subtitle">
        Demonstrates useEffect with setInterval and cleanup functionality.
      </p>

      <div className="timer-card">
        <div className="timer-face">{display}</div>

        <p className="timer-status">
          {running ? '🟢 Running' : '⏸️ Paused'}
        </p>

        <div className="btn-row">
          <button
            className="btn-primary"
            onClick={() => setRunning(true)}
            disabled={running}
          >
            Start
          </button>

          <button
            className="btn-outline"
            onClick={() => setRunning(false)}
            disabled={!running}
          >
            Pause
          </button>

          <button
            className="btn-danger"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Timer