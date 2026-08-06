import { alunos } from "@/app/lista09/constants/alunos"
import { Alunos } from "../types/aluno"
import { useState } from "react";

export default function Matricula(){
    const[estudante, setEstudante] = useState<Alunos[]>(alunos);
    const [nome, setNome] = useState("");
    function handler(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        setEstudante([...estudante, 
            {
                id: estudante.length +1,
                nome: nome,
                presente: false
            }
        ]);

        setNome("");
    }
    return(
        <div className="flex flex-col gap-2 text-center items-center border rounded p-3 w-110 shadow-md">
            <form onSubmit={handler} className="flex flex-col gap-2 items-center">
                <label htmlFor="matricula" className="flex flex-col">
                    <b>Matrícula</b> 
                    <input 
                        type="text" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="border rounded p-1" 
                        placeholder="Digite o nome do aluno"
                    />                    
                </label>
                <button type="submit" className="border rounded p-1 w-30">
                    Adicionar
                </button>
            </form>
            <ul>
                {estudante.map((e)=><li key={e.id}>{e.nome}</li>)}
            </ul>
        </div>
    )
}
