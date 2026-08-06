
type BotaoProps ={
    children: React.ReactNode
}
export default function Botao({children}:BotaoProps){
      
  // function alerta(){
  //   alert("Olá, Turma!");
  // }

    return(
        <div>
            <button onClick={()=>{alert("Olá, turma!")}} className="bg-amber-600 rounded p-3 font-bold shadow-md ">
                {children}
            </button>
        </div>
    )
}