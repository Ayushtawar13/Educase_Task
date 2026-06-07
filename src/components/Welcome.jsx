/* Screen 1 — Welcome */
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="screen">
      {/* Hero — upper 58% with decorative blurred circles */}
      <div className="welcome-hero">
        <div className="hero-circle-a" />
        <div className="hero-circle-b" />
        <div className="hero-circle-c" />
      </div>

      {/* Content — lower 42% */}
      <div className="welcome-content">
        <h1 className="welcome-heading">Welcome to PopX</h1>
        <p className="welcome-subtext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button
          className="btn-create-account"
          onClick={() => navigate('/register')}
        >
          Create Account
        </button>
        <button
          className="btn-already-login"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  )
}

export default Welcome
