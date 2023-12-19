import { Link } from "react-router-dom";
import Card from "../componentes/Block/Card";
import Navbar from "../componentes/Block/Navbar";
import { useNavigate } from "react-router-dom";



export default function User(){
    const navigate = useNavigate();

    return(
        <>
        <span className=" w-full relative z-50">

           <Navbar/>
        </span>
        <section className=" flex flex-col gap-6 w-full px-20 py-10 md:px-5  ">
            

            <Card ButtonA={()=>navigate('/Rg')}  ButtonT={'Editar'}  Titulo={" Registo Geral"} Texto={'Lorem ipsum malesuada eros aliquam habitant adipiscing ultrices aliquet libero'}/>
            <Card ButtonA={()=> navigate('/ET')} ButtonT={'Editar'} Titulo={" Titulo de Eleitor"} Texto={'Lorem ipsum malesuada eros aliquam habitant adipiscing ultrices aliquet libero'}/>
            <Card ButtonA={()=>navigate('/CNH')} ButtonT={'Editar'} Titulo={" Carteira de Motorista"} Texto={'Lorem ipsum malesuada eros aliquam habitant adipiscing ultrices aliquet libero'}/>
            <Card ButtonT={'Em Breve'} Titulo={" Comprovante de Residencia"} Texto={'Lorem ipsum malesuada eros aliquam habitant adipiscing ultrices aliquet libero'}/>
a
            


            
        </section>
        </>
    )
}