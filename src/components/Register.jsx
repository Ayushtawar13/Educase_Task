/* Screen 3 — Register with floating labels, validation & password strength */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^\d{10}$/

/* Returns 'weak' | 'medium' | 'strong' | null */
function getStrength(password) {
  if (!password) return null
  if (password.length < 6) return 'weak'
  if (password.length < 10) return 'medium'
  return 'strong'
}

function Register() {
  const navigate = useNavigate()

  const [fields, setFields] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  })

  const [errors, setErrors] = useState({})

  const strength = getStrength(fields.password)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors = {}

    if (!fields.fullName.trim()) newErrors.fullName = 'Full name is required'

    if (!fields.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!PHONE_REGEX.test(fields.phone)) {
      newErrors.phone = 'Must be exactly 10 digits'
    }

    if (!fields.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!EMAIL_REGEX.test(fields.email)) {
      newErrors.email = 'Enter a valid email address'
    }

    if (!fields.password) {
      newErrors.password = 'Password is required'
    } else if (fields.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (validate()) navigate('/account')
  }

  /* Strength bar: segment 1 always lights up, 2 on medium+, 3 on strong */
  const seg = (index) => {
    if (!strength) return 'strength-seg'
    if (index === 0) return `strength-seg seg-${strength}`
    if (index === 1 && (strength === 'medium' || strength === 'strong'))
      return `strength-seg seg-${strength}`
    if (index === 2 && strength === 'strong') return `strength-seg seg-${strength}`
    return 'strength-seg'
  }

  return (
    <div className="screen register-screen">
      <h1 className="register-heading">
        Create your
        <br />
        PopX account
      </h1>

      {/* Full Name */}
      <div className="field-group">
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder=" "
          value={fields.fullName}
          onChange={handleChange}
          className={errors.fullName ? 'field-error' : ''}
        />
        <label htmlFor="fullName">Full Name*</label>
        {errors.fullName && <span className="field-error-msg">{errors.fullName}</span>}
      </div>

      {/* Phone */}
      <div className="field-group">
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder=" "
          value={fields.phone}
          onChange={handleChange}
          maxLength={10}
          className={errors.phone ? 'field-error' : ''}
        />
        <label htmlFor="phone">Phone number*</label>
        {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
      </div>

      {/* Email */}
      <div className="field-group">
        <input
          type="email"
          name="email"
          id="regEmail"
          placeholder=" "
          value={fields.email}
          onChange={handleChange}
          className={errors.email ? 'field-error' : ''}
        />
        <label htmlFor="regEmail">Email address*</label>
        {errors.email && <span className="field-error-msg">{errors.email}</span>}
      </div>

      {/* Password + strength indicator */}
      <div className="field-group">
        <input
          type="password"
          name="password"
          id="password"
          placeholder=" "
          value={fields.password}
          onChange={handleChange}
          className={errors.password ? 'field-error' : ''}
        />
        <label htmlFor="password">Password*</label>
        {fields.password && (
          <>
            <div className="strength-bar">
              <div className={seg(0)} />
              <div className={seg(1)} />
              <div className={seg(2)} />
            </div>
            <span className={`strength-text lbl-${strength}`}>
              {strength === 'weak' ? 'Weak' : strength === 'medium' ? 'Medium' : 'Strong'}
            </span>
          </>
        )}
        {errors.password && <span className="field-error-msg">{errors.password}</span>}
      </div>

      {/* Company (optional — no validation) */}
      <div className="field-group">
        <input
          type="text"
          name="company"
          id="company"
          placeholder=" "
          value={fields.company}
          onChange={handleChange}
        />
        <label htmlFor="company">Company name</label>
      </div>

      {/* Agency radio */}
      <div className="radio-group">
        <p className="radio-group-title">Are you an Agency?*</p>
        <div className="radio-options">
          <label className="radio-option">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={fields.isAgency === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={fields.isAgency === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <button className="btn-register" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  )
}

export default Register
