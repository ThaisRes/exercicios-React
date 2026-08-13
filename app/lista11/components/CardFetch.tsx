'use client'
import { AlunoFetch } from "@/app/lista10/types/alunoFetch"
import { useEffect, useState } from "react"

export default function CardFetch(){
    const [turma, setTurma] = useState<AlunoFetch[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);
    const [erro, setErro] =useState<string | null>(null);

    async function listar(){
        try {
            setCarregando(true);
            setErro(null);
            const res =await fetch("https://prof.giango.com.br/api/turma");
            if (!res.ok) throw new Error("Falhou: " + res.status);
            setTurma(await res.json());
            setCarregando(false);                
        } catch (error) {
            setErro("Falha ao carregar")
    }}

    useEffect(()=> {
          listar();
        }, []);

    //if (carregando) return <p>Carregando...</p>
     
    return(
        <div className="flex flex-col gap-3 w-full">

            {erro && <p className="text-red-700"> {erro} </p>}
        
        {/* Todos os Alunos  +  carregando*/}
            {carregando ? <p>Carregando...</p> : 
                <div className="flex flex-wrap gap-2 w-full">
                {turma.map((aluno)=>
                        <div key={aluno.id} className="bg-white rounded-2xl p-4 shadow-lg">
                            <p className="font-semibold">{aluno.nome}</p>
                            <small>{aluno.curso} - {aluno.nota}</small>
                        </div>
                    )} 
                </div>
            }
            <button onClick={listar} 
                className="bg-sky-300 hover:bg-sky-400 active:scale-105 transition-transform duration-150 rounded p-2 font-medium disabled:opacity-50 disabled:pointer-events-none"
            >
                Recarregar
            </button>
        </div>
    )
}
