type statusProps ={
    status: boolean
}

export default function Status({status}:statusProps) {
    return (
        <div>
            {status
                ? <p className="text-emerald-950">🟢 online</p> 
                : <p className="text-emerald-950">⚪ offline</p>
            }
        </div>
    )
}
