import UserContextProvider from "./context/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"
function App() {
 

  return (
    <UserContextProvider >
      <h1 className="flex items-center justify-center mx-auto text-center">hello kranti</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
