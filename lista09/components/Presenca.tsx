import { useState } from "react";

export default function Presenca() {
  const [presente, setPresente] = useState(false);
  return (
    <div className="flex gap-2 border rounded p-3 w-110 shadow-md">
      {/*{presente ? <p>🟢 presente</p> : <p>⚪ ausente</p>}
      <button></button> */}
      <h2>Ana Carolina</h2>
       <label htmlFor="Ana-Carolina" className="flex items-center gap-2 cursor-pointer select-none">        
        <input 
          id="Ana-Carolina" 
          type="checkbox" 
          checked={presente} 
          onChange={() => setPresente(!presente)}
          className="hidden"
        />
        <span className="text-xl">{presente ? "🟢" : "⚪"}</span>
        <span className="font-semibold">{presente ? "Presente" : "Ausente"}</span>
      </label>
    </div>
  )
}
