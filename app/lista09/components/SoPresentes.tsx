import { useState } from "react";
import { alunos } from "@/app/lista09/constants/alunos";

export default function SoPresentes(){

        const[soPresentes, setSoPresentes] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-2 text-center items-center border rounded p-3 w-110 shadow-md">
            <button onClick={()=> setSoPresentes(!soPresentes)} className="border rounded p-1 w-30">
                só presentes
            </button>
            <ul>
                {alunos.map(a => (!soPresentes || a.presente) && <li>{a.nome}</li>)}
            </ul>
        </div>
    )
}
