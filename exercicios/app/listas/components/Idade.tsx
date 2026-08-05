
type idadeProps = {
    nome:string,
    idade: number
}
export default function Idade({nome, idade}:idadeProps){
    return(
        <>
        <p className="text-emerald-950">{`${nome} tem ${idade} anos.`}</p>
        </>
    )
}