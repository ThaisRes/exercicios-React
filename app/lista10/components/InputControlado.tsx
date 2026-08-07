'use client'

import { useState } from "react"

export default function InputControlado(){
    const [nome, setNome] = useState<string>("");

    return(
        <div className="flex flex-col w-full">
            <label htmlFor="nome" >
                Nome: 
                <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)} className="border rounded p-1"/>
            </label>
            <p>Olá, {nome} 👋</p>
        </div>
    )
}