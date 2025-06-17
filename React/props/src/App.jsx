import Cardd from "./components/Cardd"
import UserCard from "./components/UserCard"


function App() {

  return (
    <div>
      <UserCard name = "AakashBhai"  style = {{color : "red"}} />

      <Cardd >
        <p>Hello Aakash sir this is ChildreN MESSAGE From  Parent Class</p>

      </Cardd>
    </div>
  )
}

export default App
