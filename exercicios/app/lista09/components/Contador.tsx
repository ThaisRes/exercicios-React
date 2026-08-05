'use client' 

import { useState } from "react";

export default function Contador(){

    const [numeroContador, setNumeroContador] = useState(0);
    const [impapar, setImpapar] = useState("");

    function lancaMais(){
        //numeroContador = numeroContador +1
        setNumeroContador(numeroContador +1);
        console.log(numeroContador);
    }
    
    function tiraMais(){
        setNumeroContador(numeroContador -1);
        // verificaNum()
        console.log(numeroContador);
    }
    
    function resetar(){
        setNumeroContador (0);
        // verificaNum()
        console.log(numeroContador);
    }

    // function verificaNum(){
    //     if (numeroContador%2==0){
    //         setImpapar("É Par")
    //     } else {
    //         setImpapar("É Impar")
    //     }
    // }

    return(
        <div className="flex flex-col gap-2 text-center border rounded p-3 w-110 shadow-md ">
            <h1 className="border rounded-sm w-30"> {numeroContador} </h1>
            <div className="flex gap-1">
                <button onClick={lancaMais} className=" border rounded-sm bg-emerald-700 w-8">+</button>
                <button onClick={tiraMais} className=" border rounded-sm bg-orange-700 w-8">-</button>
                <button onClick={resetar} className=" border rounded-sm bg-amber-600 w-12">reset</button> 
            </div>
            {/* <h2>{impapar}</h2> */}
            <h2> {numeroContador %2 == 0 ? "Par" : "Impar"} </h2>
        </div>
    )
}