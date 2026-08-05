export default function AlunoNome({nome, bolsista}:{nome:string, bolsista?:boolean}){
    return(
        <div className="p-3 rounded-md bg-emerald-800 text-center text-emerald-50 shadow-gray-400 shadow-xl">
            <b> {nome} {bolsista && "🎓"} </b>
        </div>

    )
}