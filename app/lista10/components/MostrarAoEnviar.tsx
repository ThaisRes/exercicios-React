'use client'
import { useState } from "react";

export default function MostrarAoEnviar(){
    const [form, setForm] = useState<{ nome: string; curso: string; bolsista:boolean; turno: string}>({ nome: "", curso: "Front-End", bolsista: false, turno: "manhã" });
    const[matriculado, setMatriculado] = useState<{ nome: string; curso: string; bolsista:boolean; turno: string}>({ nome: "", curso: "", bolsista: false, turno: "" });

    function enviar(e: React.SubmitEvent) {
        e.preventDefault();
        if (form.nome.trim() === "") { alert("Preencha o nome!"); return; }
        setMatriculado({nome: form.nome, curso: form.curso, bolsista: form.bolsista, turno: form.turno});
        alert("Matriculado: " + form.nome);
        setForm({nome: "", curso: "Front-End", bolsista: false, turno: "manhã"})
    }

    return(
        <div className="flex flex-col gap-2 w-full">
            {/* onSubmit={(e:React.SubmitEvent)=>{e.preventDefault(); setMatriculado(nome)}} */}
            <form onSubmit={enviar} className="flex flex-col gap-2">
                <input type="text" name="nome" value={form.nome} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({...form, nome:e.target.value})}
                    placeholder="Digite o nome do aluno(a)" className="border rounded p-1"
                />
                <small>Caracteres: {form.nome.length}</small>

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

                <label >
                    <span>Bolsista? </span>
                    <input type="checkbox" checked={form.bolsista}                        
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setForm({...form, bolsista:e.target.checked})}
                    />
                    {form.bolsista ? " sim" : " não"}
                </label>

                <label >                    
                    <input type="radio" name="turno"
                        value= "manhã"
                        checked={form.turno === "manhã"}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setForm({...form, turno: "manhã"})}
                    /> Manhã
                </label>
                <label >
                    <input type="radio" name="turno"
                        value="tarde"
                        checked={form.turno === "tarde"}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setForm({...form, turno:"tarde"})}
                    /> Tarde
                </label>               

                <button type="submit" disabled={form.nome === ""}
                    className="rounded p-1 bg-sky-300 disabled:opacity-50"
                >
                    Matricular
                </button>
                
                {matriculado.nome && 
                    <div>
                        <p>Aluno(a) matriculado: {matriculado.nome}</p>
                        <p>Curso: {matriculado.curso} {matriculado.bolsista && "⭐"}</p>
                        <p>Turno: {matriculado.turno}</p>
                    </div>
                }
            </form>
        </div>
    )
}
 

