import Footer from "components/Footer"
import NavBar from "components/NavBar"
import { Outlet } from "react-router-dom"

const App = () => {

  return (
    <>
      <NavBar/>
        <Outlet/>
      <Footer/>
    </>
    
  )
}

export default App
