import { BrowserRouter, Route, Routes } from "react-router-dom"

import App from "App"
import Home from "pages/Home"
import Positions from "pages/Positions"
import Employees from "pages/Employees"
import About from "pages/About"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/employees" element={<Employees/>}/>
                    <Route path="/positions" element={<Positions/>}/>
                    <Route path="/about" element={<About/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes