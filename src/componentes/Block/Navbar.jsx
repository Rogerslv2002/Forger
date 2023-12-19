import MenuDropdown from "../UI/MenuDropdown";
import Logo from '/src/assets/Logo.png'
import { useNavigate } from "react-router-dom";


export default function Navbar(){
    const navigate = useNavigate();

    return(
        <nav className="  border-b-2 border-b-white flex flex-row  justify-between px-8 py-4 w-full h-auto backdrop-blur-xl">
            <img onClick={()=>{navigate('/user')}} className=" w-14" src={Logo} alt="" />

            <MenuDropdown/>
        </nav>
    )
}