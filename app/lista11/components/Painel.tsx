'use client'

import { AlunoFetch } from "@/app/lista10/types/alunoFetch";
import { useEffect, useState } from "react";

export default function Painel(){
    const[turma, setTurma] = useState<AlunoFetch[]>([]);
    const[curso, setCurso] = useState<string>("Todos");

    async function listar(){
        try {
            const res = await fetch("https://prof.giango.com.br/api/turma");
            if(!res.ok) throw new Error("Falhou: " + res.status);
            setTurma(await res.json());
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{listar()},[]);

    const lista = curso === "Todos"
        ? turma
        : turma.filter((aluno) => aluno.curso.toLowerCase() === curso.toLowerCase());

    return(
        <div className="flex flex-col gap-3 w-full">
            <div className="flex gap-4 items-center">
                <select name="curso" value={curso} 
                onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setCurso(e.target.value)} 
                className="border rounded p-1"
                >
                    <option value="Todos">Todos</option>
                    <option value="Front-end">Front-end</option>
                    <option value="Back-end">Back-end</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Dados">Dados</option>
                    <option value="Design">Design</option>
                </select>
                <p>✅ Presentes: {turma.filter((aluno)=>aluno.presente === true).length}</p>
            </div>
            <div className="flex flex-wrap gap-2 w-full">
                {lista.map((aluno) => 
                <div key={aluno.id} className="bg-white rounded-2xl p-4 shadow-lg">
                    <p className="font-semibold">{aluno.nome}</p>
                    <small>{aluno.curso} - {aluno.nota} {aluno.presente ? "✅":"❌"}</small>
                </div>)}
            </div>            
        </div>
    )
}