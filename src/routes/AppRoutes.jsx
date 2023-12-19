
import { CNHForm } from "../Pages/Forms/CNHForms";
import { ETForm } from "../Pages/Forms/ETForms";
import { RGForm } from "../Pages/Forms/RGForms";
import { Login } from "../Pages/Login";
import User from "../Pages/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";



export default function AppRoutes(){
    return(

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/RG" element={<RGForm/>} />
          <Route path="/ET" element={<ETForm/>} />
          <Route path="/CNH" element={<CNHForm/>} />
        </Routes>
      </BrowserRouter>
    )
}