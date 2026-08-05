type saudacaoProps ={
    nome: string
}

export default function Saudacao(props:saudacaoProps){
    return (
        <div>
            <h2 className="text-emerald-950">Olá, {props.nome?? "visitante"}</h2>
        </div>
    )
}