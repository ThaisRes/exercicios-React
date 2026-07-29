import { useState } from "react"

export default function LigaDesliga(){

    const [ligado, setLigado]= useState(false);

    return(
        <div>
            <button onClick={(()=>setLigado(!ligado))}>
                {ligado ? <p>on</p> : <p>off</p>}
            </button>
        </div>
    )
}