import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from  "react-router-dom";
import Home from './components/Home.jsx'
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Courses from './components/Courses.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import { createContext } from 'react';
import ParamsRoutes from './components/ParamsRoutes.jsx';
import UseNavigation from './components/UseNavigation.jsx';


const ThemeContext = createContext();

const router = createBrowserRouter([
  {
    path : "/",
    element :  
    <div>
      <Navbar/>
      <Home/>
    </div>
    
  } ,
  {
    path : "/about",
    element :     <div>
      <Navbar/>
      <About />
    </div>
  } ,
  {
    path : "/login",
        element :     <div>
      <Navbar/>
      <Login />
    </div>
  } ,
  {
    path : "/dashboard",
    element :<div>
                  <Navbar/>
                  <Dashboard />
            </div>,
    children:[
      {
        path:"courses",
        element: <div>
                    <Courses/>
                </div>
      },
      {},
      {}
    ]
  } ,
  {
    path : "*",
    element : 
             <div>
              <ThemeContext.Provider value={{name:"Aakash2"}}>
                    <PageNotFound  />
              </ThemeContext.Provider>
              </div>
  },
  {
    path:"/student/:id",
    element : <div>
      <ParamsRoutes/>
    </div>
  },
  {
    path:"/usenavigation",
    element : <div>
      <UseNavigation />
    </div>
  }
]) 

function App() {
  return (
    <div>
        
              <RouterProvider router={router} />
 
    </div>
     
  )
}

export default App
export {ThemeContext}
