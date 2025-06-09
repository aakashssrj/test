import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const authUser = false
  return (
    <div>
      <Routes>
        
        <Route path='/' element = { authUser ? <Homepage/> : <Navigate to ="/login"/>  } />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
  
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App 