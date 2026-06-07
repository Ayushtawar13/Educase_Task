import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/account')
  }

  return (
    <div className="screen login-screen">
      <h1 className="screen-title">
        Signin to your
        <br />
        PopX account
      </h1>
      <p className="screen-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            id="login-email"
            name="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="login-email">Email Address</label>
        </div>

        <div className="form-group">
          <input
            type="password"
            id="login-password"
            name="password"
            placeholder=" "
            value={formData.password}
            onChange={handleChange}
          />
          <label htmlFor="login-password">Password</label>
        </div>

        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
