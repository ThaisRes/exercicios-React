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
        <div className="flex flex-col gap-2">
            <h2 className="font-bold text-lg">.then + Ordenação</h2>
            <ol className="list-decimal list-inside">
                {[...turma]
                .sort((a,b)=>b.nota - a.nota)
                .map((aluno)=><li key={aluno.id}> {aluno.nome} - {aluno.nota}</li>)}
            </ol>
            <p className="font-semibold">Média: {turma.length ? 
                (turma.reduce((soma, aluno)=> soma + aluno.nota, 0)/turma.length) 
                : 0}
            </p>
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
