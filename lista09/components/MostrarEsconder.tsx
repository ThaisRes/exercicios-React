import { useState } from "react"

export default function MostrarEsconder(){
    const [mostrar, setMostrar] = useState(false);
    
    return(
        <div className="flex gap-2">
            <button onClick={()=> setMostrar(!mostrar)} className="bg-blue-400 shadow-md font-semibold rounded text-blue-950 p-3"> 
                {mostrar ? "esconder" : "mostrar"} 
            </button>
            {mostrar && <p className="text-4xl">🤪</p>}
        </div>
    )
}

