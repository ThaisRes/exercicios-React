 export type vipProps ={
    vip:boolean
}
export default function Vip({vip}:vipProps){
    return(
        <div>
            {vip && <span>⭐ VIP</span>}
        </div>
    )
}
