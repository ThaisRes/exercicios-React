type itensProps = {
    itens: string[];
}

export default function Lista({itens}:itensProps){
    return(
        <div>
            <ul>
                {itens.map(i => <li key={i}>• {i}</li>)}
            </ul>
        </div>
    )
}
