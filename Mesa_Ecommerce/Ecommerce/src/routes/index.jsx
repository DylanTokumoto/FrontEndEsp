import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";

export default function RoutesConfig(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/items" element={<Home/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}