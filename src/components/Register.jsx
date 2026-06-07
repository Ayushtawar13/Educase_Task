import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/account')
  }

  return (
    <div className="screen register-screen">
      <h1 className="register-title">
        Create your
        <br />
        PopX account
      </h1>

      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="reg-fullName"
            name="fullName"
            placeholder=" "
            value={formData.fullName}
            onChange={handleChange}
          />
          <label htmlFor="reg-fullName">Full Name*</label>
        </div>

        <div className="form-group">
          <input
            type="tel"
            id="reg-phone"
            name="phone"
            placeholder=" "
            value={formData.phone}
            onChange={handleChange}
          />
          <label htmlFor="reg-phone">Phone number*</label>
        </div>

        <div className="form-group">
          <input
            type="email"
            id="reg-email"
            name="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="reg-email">Email address*</label>
        </div>

        <div className="form-group">
          <input
            type="password"
            id="reg-password"
            name="password"
            placeholder=" "
            value={formData.password}
            onChange={handleChange}
          />
          <label htmlFor="reg-password">Password*</label>
        </div>

        <div className="form-group">
          <input
            type="text"
            id="reg-company"
            name="company"
            placeholder=" "
            value={formData.company}
            onChange={handleChange}
          />
          <label htmlFor="reg-company">Company name</label>
        </div>

        <div className="radio-group">
          <span className="radio-group-label">Are you an Agency?*</span>
          <div className="radio-options">
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <div className="register-submit">
          <button type="submit" className="btn-primary">
            Create Account
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
