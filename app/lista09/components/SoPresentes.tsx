import { useState } from "react";
import { alunos } from "@/app/lista09/constants/alunos";

export default function SoPresentes(){

        const[soPresentes, setSoPresentes] = useState<boolean>(false);

    return (
        <div >
            <button onClick={()=> setSoPresentes(!soPresentes)} className="border rounded p-1 w-30">
                só presentes
            </button>
            <ul>
                {alunos.map(a => (!soPresentes || a.presente) && <li>{a.nome}</li>)}
            </ul>
        </div>
    )
}
