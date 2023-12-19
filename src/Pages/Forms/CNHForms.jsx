import { useFormik } from 'formik';
import { IMKInput, ImgInput, TextInput } from '../../componentes/UI/Input';
import { useNavigate } from "react-router-dom";
import Navbar from '../../componentes/Block/Navbar';



export function CNHForm(){
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          Nome:'',
          Nacimento:'',
          Identidade:'',
          Emissor:'',
          Estado:'',
          Letra:'',
          Municipio:'',
          Registro:'',
          Validade:'',
          Habilitação:'',
          Local:'',
          Emissão:'',
          Filiação:'',
          Filiação2:'',
          Foto:'',
          
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
   

    return(
        <>
        <Navbar/>
        <section className=' w-full py-10 ' >
            <h2 className=' text-white text-center font-semibold text-5xl py-10 sm:text-4xl  '>Carteira de Motorista</h2>


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
           <span className=' grid grid-cols-2 gap-2 sm:grid-cols-1'>
            <IMKInput
            Texto={'Identidade'}
            Placeholder={'MG12541093'}
            MASK={'**********'}
            ID={'Identidade'}
            Value={formik.values.Identidade}
            Change={formik.handleChange}
            />
            <IMKInput
            Texto={'Emissor'}
            Placeholder={'SSP'}
            MASK={'***'}
            ID={'Emissor'}
            Value={formik.values.Emissor}
            Change={formik.handleChange}
            />
           
          </span>
          <span className=' grid grid-cols-2 gap-2 sm:grid-cols-1'>
            <IMKInput
            Texto={'Estado'}
            Placeholder={'SP'}
            MASK={'**'}
            ID={'Estado'}
            Value={formik.values.Estado}
            Change={formik.handleChange}
            />
            <IMKInput
            Texto={'Letra'}
            Placeholder={'B'}
            MASK={'a'}
            ID={'Letra'}
            Value={formik.values.Letra}
            Change={formik.handleChange}
            />
          </span>

          <span className=' grid grid-cols-2 gap-3 mt-10 sm:mt-5 sm:grid-cols-1'> 
              <IMKInput
                Texto={'Validade'}
                ID={'Validade'}
                Nome={'Validade'}
                Value={formik.values.Validade}
                Change={formik.handleChange}
                Placeholder={'00/00/0000'}
                MASK={'00/00/0000'}
                />
                 <IMKInput
                Texto={'Habilitação'}
                ID={'Habilitação'}
                Nome={'Habilitação'}
                Value={formik.values.Habilitação}
                Change={formik.handleChange}
                Placeholder={'00/00/0000'}
                MASK={'00/00/0000'}
                />
                
            
          </span>  
          <span className=' grid grid-cols-2 gap-3   sm:grid-cols-1'> 
              <IMKInput
                Texto={'CPF'}
                ID={'CPF'}
                Nome={'CPF'}
                Value={formik.values.CPF}
                Change={formik.handleChange}
                Placeholder={'000.000.000/00'}
                MASK={'000.000.000/00'}
                />
                 <IMKInput
                Texto={'Registro'}
                ID={'Registro'}
                Nome={'Registro'}
                Value={formik.values.Registro}
                Change={formik.handleChange}
                Placeholder={'00000000000'}
                MASK={'00000000000'}
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
          
           <span className=' grid grid-cols-2 gap-3 sm:grid-cols-1'>
            <IMKInput
             Texto={'Local'}
            ID={'Local'}
            Placeholder={'TRES CORACOES , MG'}
            Value={ formik.values.Local}
            Change={formik.handleChange}
            />
            <IMKInput
                Texto={'Data de Emissão'}
                ID={'Emissão'}
                Nome={'Emissão'}
                Value={formik.values.Emissão}
                Change={formik.handleChange}
                Placeholder={'00/00/0000'}
                MASK={'00/00/0000'}
                />
           </span>
           <span className=' grid grid-cols-1  '>
               
            
            <ImgInput 
                Texto={'Foto'}
                ID={'Foto'}
                Nome={'Foto'}
                Value={formik.values.Foto}
                Change={formik.handleChange}
                
                />
                
            
            </span>
            <span className=' flex flex-row gap-5  justify-center sm:flex-col '> 
            <button className='hover:bg-green-500 rounded-xl  text-black text-2xl font-semibold px-5 py-2 bg-white' type="submit">Enviar</button>
            <button onClick={()=>navigate("/user")} className=' hover:bg-red-500 rounded-xl text-black text-2xl font-semibold px-5 py-2 bg-white' type="submit">Cancelar</button>
           </span>

        </form>
        </section>
        </>
    )
}