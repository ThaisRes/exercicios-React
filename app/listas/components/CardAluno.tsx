type AlunoProps = {
    nome: string,
    curso?: string,
    nota?:number,
    presente?: boolean
}

export default function CardAluno({nome, curso ="Front-end", nota, presente}:AlunoProps){
    return(
        <div className="flex flex-col bg-emerald-900 rounded p-4 shadow-lg text-emerald-50 text-center my-1">
            <b className="">{nome}</b>
            <p className="text-emerald-50 text-xs"> {curso} </p>
            <p className="text-2xl"> {nota} </p>
            {presente
                ? <p className="text-sm">🟢 presente</p>
                : <p className="text-sm">⚪ ausente</p>
            }
        </div>
    )
}