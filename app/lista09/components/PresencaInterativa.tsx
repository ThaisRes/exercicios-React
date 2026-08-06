import { alunos } from "@/app/lista09/constants/alunos";
import { useState } from "react"
import { Alunos } from "../types/aluno";

export default function PresencaInterativa(){
    const [estudante, setEstudante] = useState<Alunos[]>(alunos);
    const alternar = (id: number) => setEstudante(
        estudante.map(e => e.id === id ? { ...e, presente: !e.presente } : e)
    );

    return(
        <div >
            <h2><b>Presentes: {estudante.filter(e => e.presente).length}</b></h2>
            <div className="flex flex-wrap gap-3">
                {estudante.map(e => (
                    <button 
                        key={e.id} 
                        onClick={()=>alternar(e.id)}
                        className="border rounded p-1 w-40"
                    >
                        {e.presente ? "🟢" : "⚪"} {e.nome}
                    </button>
                ))}
            </div>
            
        </div>
    )
}
// Array de alunos {id, nome, presente}. Cada card tem um botão que alterna a presença 
// daquele aluno (map + setState imutável). Um contador de presentes no topo.
// alunos.map(a => a.id === id ? {...a, presente: !a.presente} : a).
