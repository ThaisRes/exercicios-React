'use client'

import { useState } from "react"

export default function InputControlado(){
    const [nome, setNome] = useState<string>("");

    return(
        <div>
            <label htmlFor="nome">
                Nome: 
                <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
            </label>
            <p>Olá, {nome} 👋</p>
        </div>
    )
}