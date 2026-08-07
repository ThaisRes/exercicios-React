'use client'
import { useState } from "react"

export default function ObjetoNoEstado(){
    const[form, setForm] = useState<{nome:string, curso:string}>({nome: "", curso: ""});

    function aoMudar(e: React.ChangeEvent<HTMLInputElement>){
        setForm({...form, [e.target.name]:e.target.value})
    };
    
    return(
        <div className="flex flex-col gap-2 w-full">
            <form onSubmit={(e: React.SubmitEvent) => {e.preventDefault(); alert(form.nome + " - " + form.curso)}} className="flex flex-col gap-2">
               <input type="text" name="nome" value={form.nome} onChange={aoMudar} className="border rounded p-1" placeholder="nome"/>
                <input type="text" name="curso" value={form.curso} onChange={aoMudar} className="border rounded p-1" placeholder="curso"/>
                <button type="submit" className="border rounded p-1">Enviar</button>
            </form>
            <p>{form.nome} - {form.curso}</p>
        </div>
    )
}

// Guarde nome e curso num só objeto: useState<{ nome; curso }>.
// Cada input atualiza um campo com setForm({ ...form, nome: ... }).
// O spread ...form copia os outros campos — sem ele você perderia o 
// curso ao mudar o nome. { nome: string; curso: string } ...form

// Envolva o input num <form> com onSubmit. Sem e.preventDefault() o 
// navegador recarrega a página e você perde o estado.