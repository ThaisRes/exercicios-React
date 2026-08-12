'use client'
import { AlunoFetch } from "@/app/lista10/types/alunoFetch"
import { useEffect, useState } from "react"

export default function CardError(){
    const [turma, setTurma] = useState<AlunoFetch[]>([]);
    // const [carregando, setCarregando] = useState<boolean>(true);
    const [erro, setErro] =useState<string | null>(null);

    useEffect(()=> {
        async function listar(){
            try {
                const res =await fetch("https://prof.giango.com.br/api/turma/999");
                // if (!res.ok) throw new Error("Falhou: " + res.status);
                if(!res.ok) throw new Error("Aluno não encontrado (" + res.status + ")")
                setTurma(await res.json());
                // setCarregando(false);
                
            } catch (error) {
                // setErro("Falha ao carregar")
                setErro((error as Error).message)
            }}
            listar();
        }, []);

    // if (carregando) return <p>Carregando...</p>
     
    return(
        <div className="flex flex-wrap gap-2 w-full">
            {erro && <p className="text-red-700"> {erro} </p>}
            {turma.map((aluno)=>
                <div key={aluno.id} className="bg-white rounded-2xl p-4 shadow-lg">
                    <p className="font-semibold">{aluno.nome}</p>
                    <small>{aluno.curso}</small>
                </div>
            )}
        </div>
    )
}
