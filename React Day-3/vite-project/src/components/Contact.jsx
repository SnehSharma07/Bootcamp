function Contact() {
  return (
    <div className="page">
      <span className="badge badge-purple">Contact</span>

      <h1>Get In Touch</h1>

      <p className="subtitle">
        Feel free to reach out for collaboration, project discussions or React
        development related queries.
      </p>

      <div className="timer-card">
        <div style={{ textAlign: 'left' }}>
          <h3 style={{ marginBottom: '20px' }}>Contact Information</h3>

          <p style={{ marginBottom: '15px' }}>
            📧 <strong>Email:</strong> react@gmail.com
          </p>

          <p style={{ marginBottom: '15px' }}>
            📱 <strong>Phone:</strong> 9876543210
          </p>

          <p>
            📍 <strong>Location:</strong> India
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact