import Vip, { vipProps } from "./Vip"

type cardProps ={
    nome:string,
    vip: boolean
}

export default function Card({nome, vip}:cardProps){
    return (
        <div className="flex flex-col flex-wrap justify-center items-center p-3 rounded shadow-md bg-emerald-950 text-white w-30">
            {nome}
            <Vip vip={vip}/>            
        </div>
    )
}
