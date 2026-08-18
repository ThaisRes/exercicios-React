'use client'
import { AlunoFetch } from "@/app/lista10/types/alunoFetch";
import { use, useEffect, useState } from "react";

export default function Turma(){
    const[turma, setTurma] = useState <AlunoFetch[]> ([]);
    const[msg, setMsg] = useState <string> ("Olá!");
    const[contador, setContador] = useState <number> (0);

    function mostrarNome (a:AlunoFetch){
        console.log(a.nome)
    };
    
    async function listar(){
        const res = await fetch("https://prof.giango.com.br/api/turma");
        const data = await res.json();
        setTurma(data);

        //usar data pois é assincrona. 
        //data.forEach((a:AlunoFetch)=>console.log(a.nome))
        data.forEach(mostrarNome);
    };

    useEffect(()=>{listar()}, []);

    const nomes = turma.map(a=>a.nome);
    const presentes = turma.filter(a=>a.presente);
    const nomesPresentes = turma.filter(a=>a.presente).map(a=>a.nome);

    async function saudar(){
        //console.log(turma.length);
        setMsg("Olá turma! Somos " + turma.length + " hoje.")
    };

    function avisar(){
        setMsg("Aviso: Simulado na próxima quinta as 20h.")
    };

    function embrulhado(m:string){
        setMsg(m);
    };

    function BotaoAcao({ texto, aoClicar }: { texto: string; aoClicar: () => void }){
        return(<button onClick={aoClicar} className="bg-sky-300 hover:bg-sky-400 rounded p-2">{texto}</button>)
    };

    function executarNaTurma(turma:AlunoFetch[] , acao:(a:AlunoFetch)=>void){
        for(const aluno of turma){acao(aluno)}
    };

    executarNaTurma(turma, a => console.log(a.nome));

    function chamar() {
        setMsg("aguarde… ⏳");
        setTimeout(() => { setMsg("a turma chegou! ✅") }, 2000);
    };

    const maiusculo = turma.map((a)=>({...a, nome:a.nome.toUpperCase()}));
    
    return(
        <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-2 items-center">
                <p className="font-bold text-xl"> {msg} </p>
                <div className="flex flex-wrap gap-2 justify-center">
                    <button onClick={saudar} className="bg-sky-300 hover:bg-sky-400 rounded p-2"> Saudar turma! </button>
                    <button onClick={avisar} className="bg-sky-300 hover:bg-sky-400 rounded p-2"> Avisar </button>
                    <button onClick={()=>embrulhado("Oi")} className="bg-sky-300 hover:bg-sky-400 rounded p-2">Reset</button>
                    <BotaoAcao texto="Contar Presentes" aoClicar={()=>setMsg(presentes.length + " alunos presentes.")} />
                    <button onClick={chamar} className="bg-sky-300 hover:bg-sky-400 rounded p-2"> Chamar </button>
                </div> 
            </div>

            <div className="flex flex-col gap-2 items-center">
                <p className="font-bold text-xl border rounded px-2 py-1"> {contador} </p>
                <button onClick={() => setContador(contador +1)} className="bg-sky-300 hover:bg-sky-400 rounded p-2"> Contador </button>
            </div>

            <div className="flex flex-col gap-2 items-center">
                <p className="font-bold text-xl px-2 py-1"> Aprovados </p>
                <div className="flex flex-col gap-2">
                    {maiusculo
                        .filter(a => (a.nota >= 6))
                        .map(a => <p key={a.id} className="font-light">{a.nome} - {a.nota}</p>)
                    }
                </div>
            </div>                  
            
        </div>
    )
}

//Use forEach para somar quantos alunos estão presentes. Comece um contador em zero e incremente dentro do callback.

