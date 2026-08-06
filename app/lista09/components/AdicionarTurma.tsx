import { useState } from "react"

export default function AdicionarTurma(){
    const [turma, setTurma]= useState<string[]>(["Ana Carvalho", "Vanessa Alves", "David Antonio"])
    return (
        <div className="flex flex-col gap-2 text-center items-center border rounded p-3 w-110 shadow-md">
            <h2><b>Turma</b></h2>
            <div className="flex gap-2">
                <button onClick={()=> setTurma([...turma, "Manuella Alves"])} className="border rounded p-1 w-25">
                + Manu
                </button>
                <button onClick={()=> setTurma(turma.filter(n=> n !== "David Antonio"))} className="border rounded p-1 w-25">
                    - David
                </button>
            </div>            
            <ul>{turma.map((nome, i)=><li key={i}>{nome}</li>)}</ul>
        </div>
    )
}


