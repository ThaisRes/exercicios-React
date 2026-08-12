'use client'
import { AlunoFetch } from "@/app/lista10/types/alunoFetch";
import { useEffect, useState } from "react";

export default function PrimeiroFetch(){
    const[turma, setTurma] = useState<AlunoFetch[]>([]);

    useEffect(() => {
        fetch("https://prof.giango.com.br/api/turma")
        .then(res => res.json())
        .then(data => setTurma(data));
    }, []);

    return(
        <div>
            <h2>.then</h2>
            <ul>
                {turma.map((aluno)=><li key={aluno.id}>✎ {aluno.nome}</li>)}
            </ul>
        </div>
    )
}

/*
fetch(url)
  .then(res => res.json())
  .then(dados => setTurma(dados));

const res = await fetch(url);
const dados = await res.json();
setTurma(dados);
*/
