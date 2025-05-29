import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Taskmanager from './pages/Taskmanager' 
import Login from './pages/Login'
import Signup from './pages/Signup'
import React from 'react' 

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/taskmanager" element={<Taskmanager />} />

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
