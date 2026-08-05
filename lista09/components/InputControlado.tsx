import { useState } from "react"

export default function InputControlado(){
  const [inputcontrol, setInputControl] = useState("");

  function handler(e:React.ChangeEvent<HTMLInputElement>){
    setInputControl(e.target.value)
  }

  return(
    <div className="border rounded p-3 w-110 shadow-md ">
      <label >Input Controlado</label>
      <input className="border" type="text" value={inputcontrol} onChange={handler} />
      <p> {inputcontrol} </p>
      <h2>Contagem de Caracteres</h2>
      <p>{inputcontrol.length}</p>
      <button className="bg-blue-400 rounded p-3 font-bold" onClick={()=>setInputControl("")}>Resetar</button>
    </div>
  )
}

/*
Um input com value e onChange ligados ao estado. O que você digita aparece abaixo.
Tipe o evento: (e: React.ChangeEvent<HTMLInputElement>) e leia e.target.value.
value={texto}
onChange
e.target.value

const [texto, setTexto] = useState<string>("");

<input
  value={texto}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
    setTexto(e.target.value)}
/>
<p>Você digitou: {texto}</p>
🤪 🤯 💡
*/