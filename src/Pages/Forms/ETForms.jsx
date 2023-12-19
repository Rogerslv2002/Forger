import { useFormik } from 'formik';
import {   IMKInput, TextInput } from '../../componentes/UI/Input';
import { useNavigate } from "react-router-dom";
import Navbar from '../../componentes/Block/Navbar';



export function ETForm(){
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          Nome:'',
          Nacimento:'',
          Inscrição:'',
          Zona:'',
          Seção:'',
          Municipio:'',
          Emissão:'',
          Filiação:'',
          Filiação2:'',
          Codigo:'',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
   

    return(
        <>
        <Navbar/>
        <section className=' w-full py-10 ' >
            <h2 className=' text-white text-center font-semibold text-5xl py-10 sm:text-4xl  '>Titulo de Eleitor</h2>


        <form className=' backdrop-blur-xl px-10 py-5 s mx-28 rounded-xl border-2 border-solid
         border-white flex flex-col gap-8 sm:mx-5 sm:px-4 md:mx-10' 
         onSubmit={formik.handleSubmit}  >
           <span className='  grid grid-cols-2 gap-3 w-full sm:grid-cols-1 sm:gap-2'>
            <TextInput
            ID={'Nome'}
            Nome={'Nome'}
            Texto={'Nome do Eleitor'}
            Placeholder={'João dos Santos'}
            Value={ formik.values.Nome}
            Change={formik.handleChange}

            />
            
            <IMKInput
            ID={'Nacimento'}
            Nome={'Nacimento'}
            Texto={'Data de Nacimento'}
            Placeholder={'00/00/0000'}
            MASK={'00/00/0000'}
            Value={formik.values.Nacimento}
            Change={formik.handleChange}
            />
           </span>
           <span className=' grid grid-cols-3 gap-2 sm:grid-cols-1'>
            <IMKInput
            Texto={'Inscrição'}
            Nome={'Inscrição'}
            ID={'Inscrição'}
            MASK={'000000000000'}
            Placeholder={"000000000000"}
            Value={formik.values.Inscrição}
            Change={formik.handleChange}
            />
            <IMKInput
            Texto={'Zona'}
            ID={'Zona'}
            MASK={'000'}
            Placeholder={"000"}
            Value={formik.values.Zona}
            Change={formik.handleChange}
            />
            <IMKInput
            MASK={'0000'}
            Texto={'Seção'}
            ID={'Seção'}
            Nome={'Seção'}
            Placeholder={'0000'}
            Value={formik.values.Seção}
            Change={formik.handleChange}

            />
           </span>
           <span className=' grid grid-cols-2 gap-3 sm:grid-cols-1'>
            <TextInput
            Texto={'Municipio / UF'}
            ID={'Municipio'}
            Placeholder={'São paulo-SP'}
            Value={formik.values.Municipio}
            Change={formik.handleChange}
            />
            <IMKInput
            Texto={'Data de Emissão'}
            ID={'Emissão'}
            MASK={'00/00/0000'}
            Placeholder={'00/00/0000'}
            Value={formik.values.Emissão}
            Change={formik.handleChange}
            />
           </span>
           <span className='  grid-cols-1   gap-3'>
            
              <TextInput
              Texto={'Filiação'}
              ID={'Filiação'}
              Nome={'Filiação'}
              Value={formik.values.Filiação}
              Change={formik.handleChange}
              Placeholder={'Gabriela Simone'}
              />
            <TextInput
            ID={'Filiação2'}
            Nome={"Filiação2"}
            Placeholder={'Osvaldo Márcio Lima'}
            Value={formik.values.Filiação2}
            Change={formik.handleChange}
            />
           </span>
           <span>
            <IMKInput
             Texto={'Codigo de Validação'}
            ID={'Codigo'}
            MASK={'****.****.****.****'}
            Placeholder={'****.****.****.****'}
            Value={ formik.values.Codigo}
            Change={formik.handleChange}
            />
           </span>
            <span className=' flex flex-row gap-5 justify-center sm:flex-col sm:gap-1'> 
            <button className='hover:bg-green-500 rounded-xl mt-10 text-black text-2xl font-semibold px-5 py-2 bg-white' type="Enviar">Enviar</button>
            <button onClick={()=>navigate("/user")} className=' hover:bg-red-500 rounded-xl mt-10 text-black text-2xl font-semibold px-5 py-2 bg-white' type="submit">Cancelar</button>
           </span>

        </form>
        </section>
        </>
    )
}