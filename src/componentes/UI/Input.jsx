import { useState } from "react";
import { IMaskInput } from 'react-imask';
import { FaRegularUser } from "./Icons";


export function TextInput({Texto,ID,Nome,Placeholder,Value,Change}){
    return(
        <div className=" flex flex-col gap-3">
            <label className=" text-white text-2xl font-semibold" >{Texto}</label>
            <input
            className=" bg-transparent border-2 border-solid rounded-lg border-white px-2.5 py-2 text-white font-medium
            focus:outline-none focus:border-sky-500 focus:ring-sky-500"
             required
             id={ID}
             name={Nome}
             type="text" 
             placeholder={Placeholder} 
             value={Value}
             onChange={Change}
             
             />

        </div>
    )
}

export function DataInput({Texto,ID,Nome,Placeholder,Value,Change}){
    return(
        <div className=" flex flex-col gap-3">
        <label className=" text-white text-2xl font-semibold" >{Texto}</label>
        <IMaskInput
        className=" bg-transparent border-2 border-solid rounded-lg border-white px-2.5 py-2 text-white font-medium
        focus:outline-none focus:border-sky-500 focus:ring-sky-500
        "
         id={ID}
         name={Nome}
         type='text'
         placeholder={Placeholder} 
         value={Value}
         onChange={Change}
         mask={'00/00/0000'}
         
         />

    </div>
    )
}



export function ImgInput({Texto,ID,Value,Change}){
    return(
        <div className=" flex flex-col gap-3 ">
        <label className=" text-white text-2xl font-semibold" htmlFor="">{Texto}</label>
      
<div className="flex items-center justify-center w-full">
    <label for={ID} className="flex flex-col items-center justify-center w-full h-64 border-2 border-white border-solid rounded-lg cursor-pointe ">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400"> PNG or JPG </p>
        </div>
        <input required id={ID} value={Value} onChange={Change} type="file" className="hidden" />
    </label>
</div> 


    </div>
    )
}


export  function PasswordInput({Change,Value,ID}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <div className="relative w-full flex flex-col gap-2 ">
    <label className="  text-white text-2xl font-semibold" >Password</label>
      <input
      onChange={Change}
      id={ID}
      required
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Password"
        value={Value}
       className="w-full
        px-4
         text-white
        py-2
        text-base border-2 bg-transparent rounded-xl outline-none focus:risng-blue-500 focus:border-blue-500 focus:ring-1"
      />
      <button
        className="absolute  inset-y-16 right-0 flex items-center px-4 text-white"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}


export function IMKInput({Texto,ID,Nome,Placeholder,MASK,Value,Change}){
  return(
      <div className=" flex flex-col gap-3">
          <label className=" text-white text-2xl font-semibold" >{Texto}</label>
          <IMaskInput
          className=" bg-transparent border-2 border-solid rounded-lg border-white px-2.5 py-2 text-white font-medium
          focus:outline-none focus:border-sky-500 focus:ring-sky-500
          "
           id={ID}
           name={Nome}
           type="text" 
           required
           placeholder={Placeholder} 
           value={Value}
           onChange={Change}
           mask={MASK}
           
           />

      </div>
  )
}


export function UserInput({Texto,ID,Nome,Placeholder,Value,Change}){
  return(
      <div className=" flex flex-col gap-2">
          <label className=" text-white text-2xl font-semibold" >{Texto}</label>
          <input
          className=" bg-transparent border-2 border-solid rounded-lg border-white px-2.5 py-2 text-white font-medium"
           id={ID}       
           name={Nome}
           required
           type="text" 
           placeholder={Placeholder} 
           value={Value}
           onChange={Change}
           />
          <FaRegularUser className=" relative -top-11  -right-[92%] text-xl"/>
      </div>
  )
}


