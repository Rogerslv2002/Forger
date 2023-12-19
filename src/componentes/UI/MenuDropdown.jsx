import React, { useState } from "react";

import { CilMenu} from "./Icons";


export default function MenuDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <div className="relative inline-block text-left">
     <button
       type="button"
       className="inline-flex justify-center w-full   shadow-sm "
       onClick={() => setIsOpen(!isOpen)}
     >
       <CilMenu className=" text-4xl"/>
     </button>
     {isOpen && (
       <div className="absolute right-1 z-50 mt-6 w-40 rounded-md shadow-lg bg-white ">
         <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
           <a  href="/user" className=" px-4 py-2 text-xl" role="menuitem">Home</a>
           <a href="/" className="block px-4 py-2 text-xl hover:text-red-500" role="menuitem">Logout</a>
           
         </div>
       </div>
     )}
   </div>
  );
}

