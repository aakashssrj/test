import Login from './Components/Form/Login'
import Signup from './Components/Form/Signup'
import Home   from './Components/Form/Home'
import './App.css'
import{GoogleOAuthProvider} from '@react-oauth/google'
// import GoogleLogin from './Components/google/GoogleLogin.jsx'
import { Routes , Route } from 'react-router'
import Count from './Components/Hero/count.jsx'

function App() {

  const GoogleWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="46973093806-agc2a2jqgfajlioals14ang6midqp8nh.apps.googleusercontent.com">
        {/* <GoogleLogin /> */}
      </GoogleOAuthProvider>
    );
  };




  return (
    <>
      <Routes>
      {/* <Route path="/" element={<GoogleLogin />} /> */}
        <Route path="/signup1" element={< Signup />} />
        <Route path="/signup" element={< Signup />} />
        <Route path="/login" element={< Login />} />
        <Route path="/count" element={< Count />} />

      </Routes>
    </>
  )
}

export default App
