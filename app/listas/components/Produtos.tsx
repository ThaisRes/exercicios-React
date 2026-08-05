type produtoProps = {
    nome:string,
    preco: number
}
export default function Produtos({nome, preco}:produtoProps){
    return (
        <div>
            <li>{nome} — R${preco.toFixed(2)}</li>
        </div>
    )
}