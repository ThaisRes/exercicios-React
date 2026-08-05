
type BotaoProps ={
    children: React.ReactNode
}
export default function Botao({children}:BotaoProps){
      
  // function alerta(){
  //   alert("Olá, Turma!");
  // }

    return(
        <div className="text-center border rounded shadow-md  p-3 w-110">
            <button onClick={()=>{alert("Olá, turma!")}} className="bg-blue-400 rounded p-3 font-bold shadow-md ">
                {children}
            </button>
        </div>
    )
}