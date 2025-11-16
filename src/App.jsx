import Footer from "components/Footer"
import NavBar from "components/NavBar"
import ScrollToTop from "components/ScrollToTop"
import { Outlet } from "react-router-dom"

const App = () => {

  return (
    <>
      <ScrollToTop/>
      <NavBar/>
        <Outlet/>
      <Footer/>
    </>
    
  )
}

export default App
