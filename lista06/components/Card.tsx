import Vip from "./Vip"

type cardProps ={
    nome:string
}
export default function Card({nome}:cardProps){
    return (
        <div className="p-3 rounded shadow-md bg-emerald-950 text-white">
            {nome}
            <Vip vip/>
        </div>
    )
}
