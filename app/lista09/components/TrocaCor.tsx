// useState<string>("#55C8E6") random #e67355

import { useState } from "react"

export default function TrocaCor(){

    const [cor, setCor] = useState(false)

    return(
        <div className="flex gap-2 border rounded p-3 w-110 shadow-md " >
            <button onClick={()=>setCor(!cor)} className="bg-blue-400 shadow-md font-semibold rounded text-blue-950 p-3" >
                Trocar Cor
            </button>
            <div className="rounded-full w-10 h-10" style={{ backgroundColor: cor ? "#55C8E6" : "#e67355" }}></div>
        </div>
    )
}