type perfilProps ={
    emoji: string,
    nome: string,
    cargo: string,
    
}

export default function CartaoPerfil({emoji, nome, cargo}:perfilProps) {
    return ( 
        <div className="flex flex-wrap flex-col justify-center items-center p-3 rounded w-40 shadow-md bg-emerald-950 text-white text-center">
            <p>{emoji}</p>
            <h3>{nome}</h3>
            <h4>{cargo}</h4>
        </div>
    )
}

