import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { IdUser } from "../pages/idUser/IdUser"

export const Router = () =>{
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<IdUser />} />
         </Routes>
        </BrowserRouter>
    )
}