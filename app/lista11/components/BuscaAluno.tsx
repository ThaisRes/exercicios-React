'use client'
import { AlunoFetch } from "@/app/lista10/types/alunoFetch";
import { useEffect, useState } from "react";

export default function BuscaAluno(){
  const [id, setId] = useState<number>(0);
  const [busca, setBusca] = useState<AlunoFetch | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(()=>{
    async function buscar(){
      if(id<=0){
        setBusca(null);
        setErro(null)
        return;
      };

      try {
        setErro(null);
        const res = await fetch("https://prof.giango.com.br/api/turma/" + id)
        console.log(res);
        if(!res.ok) throw new Error("Aluno não encontrado ("+ res.status +")");
        setBusca(await res.json());
      } catch (error) {
        setErro((error as Error).message);
      }
    };

    buscar();
  }, [id]);

  return(
    <div className="flex flex-col gap-2 w-full">
      <label className="flex flex-col gap-2">Digite o id do aluno:
        <input type="number" value={id===0 ? "" : id}
          onChange={(e)=>setId(Number(e.target.value))}
          className="border rounded p-1"
          placeholder="ID do aluno"
          />
      </label>
      {erro && <p className="text-red-700"> {erro} </p>}
      {busca && 
      <div className="bg-white rounded-2xl p-4 shadow-lg">
        <p>Nome: {busca.nome}</p>      
        <p>Curso: {busca.curso}</p>      
        <p>Nota: {busca.nota}</p>      
        <p>Presente: {busca.presente ? " Sim" : " Não"}</p>
      </div>}      
    </div>
  )
}