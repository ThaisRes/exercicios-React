type badgeProps = {
    texto: string
}

export default function Badge({texto}: badgeProps){
    return (
        <div>
            <p className="text-emerald-700">{texto}</p>
        </div>
    )
}