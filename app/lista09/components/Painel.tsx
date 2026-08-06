import { useState } from "react"
import { Alunos } from "../types/aluno"
import { alunos } from "../constants/alunos"

export default function Painel(){
    const[estudante, setEstudante] = useState<Alunos[]>(alunos);
    const[presente, setPresente] = useState<boolean>(false);
    const [novoEstudante, setNovoEstudante] = useState<string>("");

    function adicionar(){
        const novo: Alunos = {
            id: estudante.length + 1,
            nome: novoEstudante,
            presente: false
        };
        setEstudante([...estudante, novo]);
        setNovoEstudante(""); 
    }

    function remover(id:number){
        setEstudante(estudante.filter(a =>(a.id !== id)))
    }

    function alternarPresenca(id:number){
        setEstudante(estudante.map(e=> e.id === id ? {...e, presente: !e.presente} : e));
    }

    return(
        <div className="flex flex-col w-full gap-2">
            <div className="flex gap-2">
                <input type="text"value={novoEstudante} onChange={(e) => setNovoEstudante(e.target.value)} className="border rounded p-1"/>
                <button onClick={adicionar} className="border rounded p-1">Adicionar</button>
            </div>
            <ul className="flex flex-col gap-2">
                {estudante.map((e)=>
                    <li key={e.id} className="flex gap-2"> 
                        <button onClick={()=>alternarPresenca(e.id)}>
                            <span>{e.presente ? "🟢" : "⚪"} {e.nome}</span>
                        </button>
                        <button onClick={()=>remover(e.id)} className="border rounded p-1">Remover</button>                    
                    </li>
                )}
            </ul>
            <b>Presentes: {estudante.filter(e=>e.presente).length}</b>
        </div>
    )
}
