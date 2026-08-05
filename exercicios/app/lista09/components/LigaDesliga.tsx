import { useState } from "react"

export default function LigaDesliga(){

    const [ligado, setLigado]= useState(false);

    return(
        <div className="border rounded p-3 w-110 shadow-md ">
            <button onClick={(()=>setLigado(!ligado))}>
                {ligado ? <p>on 🟢</p> : <p>off ⚪</p>}
            </button>
        </div>
    )
}