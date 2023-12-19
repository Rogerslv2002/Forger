import {  PasswordInput, UserInput, } from "../componentes/UI/Input";
import { useState } from "react";
import Logo from '/src/assets/Logo.png'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    
    try {
      const response = await axios.post('', {username,password, });

      const { token } = response.data;
      localStorage.setItem('token', token);
      console.log('Login bem-sucedido');
      
    } catch (error) {
      console.error('Erro de login:', error.message);
    }
  };
   
    
  

    return(
        <section className="  w-full h-screen  grid  px-[35%] sm:px-5   py-20 sm:py-10 md:px-[25%] ">


            <div className="   backdrop-blur-lg flex flex-col gap-1 justify-between   p-5 border-2 border-white border-so rounded-xl
              sm:p-2
            ">
               <span className=" grid justify-items-center ">
              <img className=" w-[35%]" src={Logo} alt="" />

               </span>
               <UserInput
               Placeholder={"Username"}
               Texto={'Username'}
               ID={'Username'}
               Value={username}
               Change={(e) => setUsername(e.target.value)}
               />
           
                <PasswordInput
                ID={'Password'}
                Value={password}
                Change={(e) => setPassword(e.target.value)}
                />
                <button onClick={()=>navigate('/user')} className=" mt-8 w-full text-center py-2  text-2xl font-semibold text-black bg-white rounded-xl ">Entrar</button>

            </div>
        </section>
    )
}

      