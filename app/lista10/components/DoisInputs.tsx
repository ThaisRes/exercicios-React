'use client'
import { useState } from "react";

export default function DoisInputs(){
    const [nome, setNome] = useState<string>("");
    const [curso, setCurso] = useState<string>("");
    return(
        <div className="flex flex-col gap-2 w-full">
            <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)} className="border rounded p-1" placeholder="Digite o nome do aluno(a)"/>
            <input type="text" value={curso} onChange={(e)=>setCurso(e.target.value)} className="border rounded p-1" placeholder="Digite o curso"/>
            <p>{nome} - {curso}</p>
         </div>
    )    
}


// Nome e curso, cada um com seu próprio estado. Mostre os 
// dois na tela: Ana Carolina — Front-end.
// Cada input controlado precisa do seu par value + onChange 
// ligado ao seu estado.