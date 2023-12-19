
export default function Card({Titulo,ButtonT,ButtonA }){
    
    

    return(
        <div className=" flex flex-row sm:px-2 sm:text-2xl sm:grid-cols-1   sm:grid sm:gap-5 justify-items-center gap-5 justify-between  px-6 py-5 rounded-xl backdrop-blur-xl border-2 border-solid border-white first-letter:">
            <span className=" flex flex-col gap-3 w-4/5 sm:w-full" >
                <p className=" text-white text-4xl font-semibold sm:text-center sm:text-3xl">{Titulo}</p>
                
            </span>
            <span className=" w-1/5 grid place-items-center sm:w-full ">

             < button onClick={ButtonA} className=' rounded-xl font-medium text-xl text-black bg-white px-2.5 py-2  ' >{ButtonT}</button>
                
            </span>
        </div>
    )
}