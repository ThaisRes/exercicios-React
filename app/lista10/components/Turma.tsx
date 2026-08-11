'use client'

import { useState } from "react"

export default function Turma(){
  const [form, setForm] = useState<{ nome: string, nota?:number }>({ nome: "", nota: 0});
  const [turma, setTurma] = useState<{ nome: string, nota?:number }[]>([]);
  const [erro, setErro] =useState<string>("");

  function enviar(e: React.SubmitEvent){
    e.preventDefault();
    if(form.nome.trim() === "") {setErro("Nome Obrigatório."); return;}
    setErro("");
    setTurma([...turma, {nome:form.nome, nota:form.nota}]);
    setForm({nome:"", nota: 0})
  }

  return(
    <div className="flex flex-col gap-2 w-full">
      <form onSubmit={enviar} className="flex flex-col gap-2">
        <input type="text" name="nome" value={form.nome}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setForm({...form, nome:e.target.value})}
          placeholder="Digite o nome do aluno(a)"
          className="border rounded p-1"
        />
        {erro && <small className="text-red-800 ">{erro}</small>}

        <input type="number" name="nota" value={form.nota}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setForm({...form, nota:Number(e.target.value)})}
          placeholder="Digite a nota do aluno(a)"
          className="border rounded p-1"        
        />

        <button type="submit" disabled={form.nome === ""}
          className="bg-sky-300 rounded p-1 disabled:opacity-50"
        >
          Adicionar
        </button>
        <ul>{turma.map((aluno, i) => <li key={i}>Nome: {aluno.nome} - Nota: {aluno.nota}</li>)}</ul>
      </form>
    </div>
  )
}