import { childrenProps } from "../types/childrenProps";

export default function({children}:childrenProps){
  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      <div className="flex flex-col p-3  mb-3 text-start items-start border-gray-800 rounded-2xl border border-b-4 border-r-4">    
        {children} 
      </div>
    </div>  
  )
}