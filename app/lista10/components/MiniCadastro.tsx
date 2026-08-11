'use client'

import { useState } from "react";

export default function(){
      const [form, setForm] = useState<{nome:string, curso:string, bolsista:boolean}>({nome:"", curso:"Front-End", bolsista: false});
      const [turma, setTurma] = useState<{nome:string, curso:string, bolsista:boolean}[]>([]);
      const [erro, setErro] = useState<string>("");
      
      function enviar(e:React.SubmitEvent){
        e.preventDefault();
        if(form.nome.trim() === ""){ setErro("Nome Obrigatório"); return };
        setErro("");
        setTurma([...turma, { nome:form.nome, curso:form.curso, bolsista:form.bolsista}])
        setForm({nome:"", curso:"Front-End", bolsista:false})
      }

    return(
        <div className="flex flex-col gap-2 w-full">
            <form onSubmit={enviar} className="flex flex-col gap-2">
                <input type="text" name="nome" value={form.nome} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({...form, nome:e.target.value})}
                        placeholder="Digite o nome do aluno(a)" className="border rounded p-1"
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

                <label>
                    <span>Bolsista? </span>
                    <input type="checkbox" checked={form.bolsista}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setForm({...form, bolsista:e.target.checked})}
                    />
                    {form.bolsista ? " sim" : " não"}
                </label>

                <button type="submit" disabled={form.nome === ""}
                    className="border bg-sky-300 rounded p-1 disabled:opacity-50"
                > 
                    Matricular
                </button>

                <b>Matriculados: {turma.length}</b>
                <ul>{turma.map((aluno, i)=><li key={i}>{aluno.nome} - {aluno.curso} {aluno.bolsista && "⭐"} </li>)}</ul>
            </form>
        </div>
    )
}

//nome, curso, bolsista,  n de matriculados