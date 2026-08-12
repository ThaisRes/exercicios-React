'use client'
import { AlunoFetch } from "@/app/lista10/types/alunoFetch"
import { useEffect, useState } from "react"

export default function CardFetch(){
    const [turma, setTurma] = useState<AlunoFetch[]>([]);
    // const [carregando, setCarregando] = useState<boolean>(true);
    const [erro, setErro] =useState<string | null>(null);

    useEffect(()=> {
        async function listar(){
            try {
                const res =await fetch("https://prof.giango.com.br/api/turma");
                if (!res.ok) throw new Error("Falhou: " + res.status);
                setTurma(await res.json());
                //setCarregando(false);                
            } catch (error) {
                setErro("Falha ao carregar")
            }}
            listar();
        }, []);

    // if (carregando) return <p>Carregando...</p>
     
    return(
        <div className="flex flex-col gap-2 w-full">
            {erro && <p className="text-red-700"> {erro} </p>}
            <div className="flex flex-wrap gap-2 w-full">
               {turma.map((aluno)=>
                    <div key={aluno.id} className="bg-white rounded-2xl p-4 shadow-lg">
                        <p className="font-semibold">{aluno.nome}</p>
                        <small>{aluno.curso}</small>
                    </div>
                )} 
            </div>
            
            <h2 className="font-bold mt-8">Filter: Front-End</h2>
            <div className="flex flex-wrap gap-2 w-full">
                {turma
                .filter((aluno) => aluno.curso === "Front-end")
                .map((aluno) => 
                    <div key={aluno.id} className="bg-white rounded-2xl p-4 shadow-lg">
                        <p className="font-semibold">{aluno.nome}</p>
                        <small>{aluno.curso}</small>
                    </div>
                )}
            </div>

            <h2 className="font-bold mt-8">Filter: Presente</h2>
            <p>Presentes: {turma.filter((aluno)=>aluno.presente === true).length}</p>
            <div className="flex flex-wrap gap-2 w-full">
                {turma
                .filter((aluno)=>aluno.presente === true)
                .map((aluno)=>
                    <div key={aluno.id} className="bg-white rounded-2xl p-4 shadow-lg">
                        <p className="font-semibold">{aluno.nome}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
