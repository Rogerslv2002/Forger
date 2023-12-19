import { useFormik } from 'formik';
import {  IMKInput, ImgInput,  TextInput } from '../../componentes/UI/Input';
import { useNavigate } from "react-router-dom";
import Navbar from '../../componentes/Block/Navbar';


export function RGForm(){
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          Rg: '',
          Expedição: '',
          Nome: '',
          Nascimento:'',
          Filiação:'',
          Filiação2:'',
          Naturalidade:'',
          CPF:'',
          Doc:'',
          Foto:'',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
   

    return(
        <>
        <Navbar/>
        <section className=' w-full  py-10 ' >
            <h2 className=' text-white text-center font-semibold text-5xl py-10 sm:text-4xl  '>Registo Geral</h2>


        <form className='  backdrop-blur-xl sm:px-4 px-10 py-5 mx-28 rounded-xl border-2 border-solid
         border-white sm:mx-5'
          onSubmit={formik.handleSubmit}>

            <span className=' grid grid-cols-2 gap-3 sm:grid-cols-1'>
                <IMKInput
                Texto={'Registo Geral'}
                ID={'Rg'}
                Value={formik.values.Rg}
                Change={formik.handleChange}
                Placeholder={'00.000.000-0'}
                MASK={'00.000.000-0'}
                />
                <IMKInput
                Texto={'Date de Expedição'}
                ID={'Expedição'}
                Value={formik.values.Expedição}
                Change={formik.handleChange}
                Placeholder={'00/00/0000'}
                MASK={'00/00/0000'}
                />
               
            </span>
            <span className=' grid grid-cols-2 gap-3 mt-10 sm:grid-cols-1 sm:mt-7'>
                <TextInput
                Texto={'Nome'}
                ID={'Nome'}
                Nome={'Nome'}
                Value={formik.values.Nome}
                Change={formik.handleChange}
                Placeholder={'Nome'}
                />
                <IMKInput
                Texto={'Date de Nascimento'}
                ID={'Nascimento'}
                Placeholder={'00/00/0000'}
                MASK={'00/00/0000'}
                Value={formik.values.Nascimento}
                Change={formik.handleChange}
                
                />
               
            </span>
            <span className=' grid grid-cols-1  gap-1 mt-10   sm:mt-7'>
            <TextInput
                Texto={'Filiação'}
                ID={'Filiação'}
                Nome={'Filiação'}
                Value={formik.values.Filiação}
                Change={formik.handleChange}
                Placeholder={'Fábio Filipe Santos'}
                />
                <TextInput
                
                ID={'Filiação2'}
                Nome={'Filiação2'}
                Value={formik.values.Filiação2}
                Change={formik.handleChange}
                Placeholder={'Gabriela Rita'}
                />
                
            </span>
            <span className=' grid grid-cols-2 gap-3 mt-10 sm:mt-7 sm:grid-cols-1'>
                <TextInput
                Texto={'Naturalidade'}
                ID={'Natu'}
                Nome={'Naturalidade'}
                Value={formik.values.Naturalidade}
                Change={formik.handleChange}
                Placeholder={'São Paulo-SP'}
                />
                
                 <IMKInput
                Texto={'CPF'}
                ID={'CPF'}
                Nome={'CPF'}
                Value={formik.values.CPF}
                Change={formik.handleChange}
                Placeholder={'000.000.000/00'}
                MASK={'000.000.000/00'}
                />
                
                
            
            </span>
            <span className=' grid grid-cols-1 gap-3 mt-10 sm:mt-7 '>
                <TextInput
                Texto={'Doc Oringem'}
                ID={'Doc'}
                Nome={'Doc'}
                Value={formik.values.Doc}
                Change={formik.handleChange}
                Placeholder={'CERT.NASC.LIV.924 FLS 209 TREM 124118 RIO DE JANEIRO RJ'}
                />
            
            <ImgInput 
                Texto={'Foto'}
                ID={'Foto'}
                Nome={'Foto'}
                Value={formik.values.Foto}
                Change={formik.handleChange}
                
                />
                
            
            </span>

            <span className=' flex flex-row gap-5 justify-center sm:gap-2 sm:flex-col'> 

            <button className='hover:bg-green-500 rounded-xl mt-10 text-black text-2xl font-semibold px-5 py-2 bg-white' type="Enviar">Enviar</button>
            <button onClick={()=>navigate("/user")} className=' hover:bg-red-500 rounded-xl mt-10 text-black text-2xl font-semibold px-5 py-2 bg-white' type="submit">Cancelar</button>


             </span>

        </form>
        </section>
        </>

    )
}