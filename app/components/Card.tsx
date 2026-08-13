import { childrenProps } from "../types/childrenProps";

export default function({children}:childrenProps){
  return (
    <div className="w-full break-inside-avoid">
      <div className="flex flex-col p-3 mb-3 text-start items-start bg-white rounded-2xl shadow-lg">    
        {children} 
      </div>
    </div>  
  )
}