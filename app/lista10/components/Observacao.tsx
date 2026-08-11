'use client'

import { useState } from "react"

export default function Observacao(){
  const[form, setForm] = useState<{obs:string}>({obs:""})
  
  return(
    <div className="w-full">
      <textarea name="obs" 
        onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>setForm({obs: e.target.value})}
        className="border rounded p-1 w-full"
      >
      </textarea>
      <p>{form.obs}</p>
    </div>
  )
}