'use client'
import { useState } from "react";

export default function MostrarAoEnviar(){
    const[nome, setNome] = useState<string>("");
    const[matriculado, setMatriculado] = useState<string>("");

    function enviar(e: React.SubmitEvent) {
        e.preventDefault();
        if (nome.trim() === "") { alert("Preencha o nome!"); return; }
        setMatriculado(nome);
        alert("Matriculado: " + nome);
    }

    return(
        <div className="flex flex-col gap-2 w-full">
            {/* onSubmit={(e:React.SubmitEvent)=>{e.preventDefault(); setMatriculado(nome)}} */}
            <form onSubmit={enviar} className="flex flex-col gap-2">
                <input type="text" name="nome" value={nome} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
                placeholder="Digite o nome do aluno(a)" className="border rounded p-1"/>
                <button type="submit"  className="border rounded p-1">Matricular</button>
                
                {matriculado && <p>Aluno(a) matriculado: {matriculado}</p>}
            </form>
        </div>
    )
}
 

