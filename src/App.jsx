import { Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Register from './components/Register'
import AccountSettings from './components/AccountSettings'
import './index.css'

/* Root: phone frame wraps all routes */
function App() {
  return (
    <div className="phone-frame">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </div>
  )
}

export default App
