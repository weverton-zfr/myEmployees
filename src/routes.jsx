import { BrowserRouter, Route, Routes } from "react-router-dom"

import App from "App"
import Home from "pages/Home"
import Positions from "pages/Positions"
import Salaries from "pages/Salaries"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/positions" element={<Positions/>}/>
                    <Route path="/salaries" element={<Salaries/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes