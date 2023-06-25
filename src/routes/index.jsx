import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "../pages/Home/index"
import Sobre from "../pages/Sobre"
import Linguagens from "../pages/Linguagens"
import Navbar from "../components/navbar";

export default function ApplicationRoutes(){
    return(
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element = { <Home /> } />,
        <Route path="/sobre" element = { <Sobre /> } />,
        <Route path="/linguagens" element = { <Linguagens /> } />
        </Routes>     
        </BrowserRouter>
    )
}