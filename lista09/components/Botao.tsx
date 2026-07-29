
type BotaoProps ={
    children: React.ReactNode
}
export default function Botao({children}:BotaoProps){
      
  // function alerta(){
  //   alert("Olá, Turma!");
  // }

    return(
        <>
            <button onClick={()=>{alert("Olá, turma!")}} className="shadow-md p-3">
                {children}
            </button>
        </>
    )
}