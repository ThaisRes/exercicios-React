'use client'
import { AlunoFetch } from "@/app/lista10/types/alunoFetch"
import { useEffect, useState } from "react"

export default function AsyncAwait(){
    const [turma, setTurma] =  useState<AlunoFetch[]>([]);
    const[carregando, setCarregando] = useState<boolean>(true);

    useEffect(() => {
        async function listar(){
            const res = await fetch("https://prof.giango.com.br/api/turma");
            const data = await res.json();
            setTurma(data);
            setCarregando(false);
        }
        listar();
    },[]);

    if (carregando) return <p>Carregando…</p>;
    return(
        <div>
            <h2>Async/Await</h2>
            <p>Total: {turma.length}</p>
            <ul>
                {turma.map((aluno)=><li key={aluno.id}>✎ {aluno.nome} 🛠 {aluno.curso}</li>)}
            </ul>
        </div>
    )
}
