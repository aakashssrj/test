import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import { Toaster } from 'react-hot-toast'
import { userAuthStore } from './store/userAuthStore'
import { Loader } from 'lucide-react'
import Navbar from './components/Navbar.jsx'
const App = () => {

  const {authUser , checkAuth , isCheckingAuth} = userAuthStore()

  useEffect(()=>{
    checkAuth(); //Check user exist or not [cookies is contain with somethiing or not]
  },[checkAuth])

  if(isCheckingAuth && !authUser){
    return (
      <div className='flex items-center justify-center h-screen'>
          <Loader className='size-10 animate-spin'/>
      </div>
    )
  }


  return (
    <div>
      <Navbar/>
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