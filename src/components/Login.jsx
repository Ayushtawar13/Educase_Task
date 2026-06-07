/* Screen 2 — Login with field validation */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const [fields, setFields] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    /* Clear error as user types */
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors = { email: '', password: '' }
    let valid = true

    if (!fields.email.trim()) {
      newErrors.email = 'Email is required'
      valid = false
    }
    if (!fields.password) {
      newErrors.password = 'Password is required'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleLogin = () => {
    if (validate()) navigate('/account')
  }

  return (
    <div className="screen login-screen">
      <h1 className="login-heading">
        Signin to your
        <br />
        PopX account
      </h1>
      <p className="login-subtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      {/* Email field */}
      <div className="input-wrapper">
        <input
          className={`input-field${errors.email ? ' input-error' : ''}`}
          type="email"
          name="email"
          placeholder="Email Address"
          value={fields.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error-msg">{errors.email}</span>}
      </div>

      {/* Password field */}
      <div className="input-wrapper">
        <input
          className={`input-field${errors.password ? ' input-error' : ''}`}
          type="password"
          name="password"
          placeholder="Password"
          value={fields.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error-msg">{errors.password}</span>}
      </div>

      <button className="btn-login" onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default Login
