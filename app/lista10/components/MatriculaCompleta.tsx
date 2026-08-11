'use client'

import { useState } from "react"

export default function MatriculaCompleta(){
  const [form, setForm] = useState<{nome:string, curso:string, nota:number}>({nome:"", curso:"Front-End", nota:0});
  const [turma, setTurma] = useState<{nome:string, curso:string, nota:number}[]>([]);
  const [erro, setErro] = useState<string>("");

  function enviar(e:React.SubmitEvent){
    e.preventDefault();
    if(form.nome.trim() === ""){ setErro("Nome Obrigatório"); return };
    setErro("");
    setTurma([...turma, { nome:form.nome, curso:form.curso, nota:form.nota}])
    setForm({nome:"", curso:"Front-End", nota:0})
  }

  return(
    <div className="flex flex-col gap-2 w-full">
      <form onSubmit={enviar} className="flex flex-col gap-2">
        <input type="text" name="nome" value={form.nome}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setForm({...form, nome:e.target.value})}
          placeholder="Digite o nome do aluno(a)"
          className="border rounded p-1"
        />
        {erro && <small className="text-red-800">{erro}</small>}

        <select name="curso" value={form.curso}
          onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setForm({...form, curso:e.target.value})}
          className="border rounded p-1"
        >
          <option value="Front-End">Front-End</option>
          <option value="Back-End">Back-End</option>
          <option value="Design">Design</option>
          <option value="Mobile">Mobile</option>
          <option value="Dados">Dados</option>
        </select>

        <input type="number" name="nota" value={form.nota}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setForm({...form, nota:Number(e.target.value)})}
          placeholder="Digite a nota"
          className="border rounded p-1"
        />

        <button type="submit" disabled={form.nome === ""}
          className="border bg-sky-300 rounded p-1 disabled:opacity-50"
        >
          Adicionar
        </button>
        <ul>{turma.map((aluno,i)=><li key={i}>{aluno.nome} - {aluno.curso} - {aluno.nota}</li>)}</ul>
        <b>Total de alunos: {turma.length}</b>
      </form>
      
    </div>
  )
}

