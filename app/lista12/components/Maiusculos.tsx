'use client'
import { AlunoFetch } from "@/app/lista10/types/alunoFetch";
import { useEffect, useState } from "react";

export default function Maiusculos(){
    const[turma, setTurma] = useState <AlunoFetch[]> ([]);
    async function listar(){
        const res = await fetch("https://prof.giango.com.br/api/turma");
        const data = await res.json();
        setTurma(data);
    };

    useEffect(()=>{listar()}, []);

    const maiusculo = turma.map((a)=>({...a, nome:a.nome.toUpperCase()}));
    return(
        <div className="flex flex-col gap-2 items-center">
            <p className="font-bold text-xl px-2 py-1"> Nome Maiúsculos </p>
            <div className="flex flex-col gap-2">
                {maiusculo.map((a)=><p key={a.id} className="font-light">{a.nome}</p>)}
            </div>
        </div>
    )
}