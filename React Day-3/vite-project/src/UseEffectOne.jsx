import { useState, useEffect } from 'react'

function UseEffectOne() {
  const [users, setUsers]     = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  // ✅ useEffect with empty [] — runs once on mount
  useEffect(() => {
    setLoading(true)

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.slice(0, 5))
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })

    return () => console.log('UseEffectOne unmounted') // cleanup
  }, []) // empty [] = run once on mount

  const avatarColors = ['#EEEDFE','#E1F5EE','#FAECE7','#E6F1FB','#FBEAF0']

  return (
    <div className="page">
      <span className="badge badge-teal">useEffect — Example 2</span>
      <h1>User list — fetch on mount</h1>
      <p className="subtitle">
        Empty <code>[]</code> dep array → runs once after first render.
        Fetches real data from a public API.
      </p>

      {loading && <p className="loading-msg">⏳ Fetching users…</p>}
      {error   && <p className="error-msg">❌ {error}</p>}

      {!loading && !error && (
        <div className="user-list">
          {users.map((user, i) => (
            <div key={user.id} className="user-card">
              <div className="user-avatar" style={{ background: avatarColors[i] }}>
                {user.name.charAt(0)}
              </div>
              <div className="user-info">
                <div className="user-name">{user.name}</div>
                <div className="user-email">{user.email}</div>
              </div>
              <div className="user-id">#{user.id}</div>
            </div>
          ))}
        </div>
      )}

      <pre className="code-block">{`useEffect(() => {
  setLoading(true);

  fetch('/api/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data);
      setLoading(false);
    });

  return () => { /* cleanup / abort */ };
}, []); // runs once on mount`}</pre>
    </div>
  )
}

export default UseEffectOne