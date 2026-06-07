import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AccountSettings() {
  const navigate = useNavigate()
  const [user, setUser] = useState({ name: 'User', email: 'user@example.com' })

  useEffect(() => {
    const savedUser = localStorage.getItem('popx_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  return (
    <div className="screen account-screen">
      <div className="account-header">
        <span className="account-header-title">Account Settings</span>
      </div>

      <div className="profile-card">
        <div className="avatar-wrapper">
          <img
            src="https://i.pravatar.cc/64?img=47"
            alt="Marry Doe"
            className="avatar-img"
          />
          <div className="camera-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7-10.5h-2.18l-.75-1H7.93L7.18 5H5A2 2 0 003 7v12a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2z" />
            </svg>
          </div>
        </div>

        <div className="profile-info">
          <p className="profile-name">{user.name}</p>
          <p className="profile-email">{user.email}</p>
        </div>
      </div>

      <p className="account-bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      <div className="dashed-divider" />
      <div className="account-spacer" />
      <div className="logout-section">
        <button className="btn-logout" onClick={() => navigate('/')}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default AccountSettings
