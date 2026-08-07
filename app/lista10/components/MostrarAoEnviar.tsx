'use client'
import { useState } from "react";

export default function(){
    const[poema, setPoema] = useState<string>("");

    return(
        <div className="flex flex-col gap-2 w-full">
            <form onSubmit={(e:React.SubmitEvent)=>{e.preventDefault; setPoema(poema)}} className="flex flex-col gap-2">
                <input type="text" name="poema" value={poema} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPoema({ e.target.value })}
                placeholder="Digite um poema" className="border rounded p-1"/>
                <button type="submit"  className="border rounded p-1">Enviar</button>
            </form>
            {<p>{poema}</p>}
        </div>
    )
}
 
   
