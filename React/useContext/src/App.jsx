import { createContext, useState } from "react"
import ClassA from "./component/ClassA"
import '../src/App.css'


const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('Green')

  return (
   <div >
    <ThemeContext.Provider value={{theme , setTheme}}>
      <div id="container"  style={{backgroundColor:theme==="Red" ? "green" : "red"}}>
          <ClassA  />
      </div>
    </ThemeContext.Provider>
   </div>
  )
}

export default App
export {ThemeContext}