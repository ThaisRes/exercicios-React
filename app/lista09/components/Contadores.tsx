import { useState } from "react"

export default function Contadores(){
    const[back, setBack] = useState<number>(0);
    const[front, setFront] = useState<number>(0);
    return(
        <div className="flex gap-8 text-center items-center ">
            <div className="flex flex-col items-center gap-2">
                <b>Front: {front}</b>
                <button onClick={()=>setFront(front +1)} className="border rounded p-1 w-8">+1</button>
            </div>
            <div className="flex flex-col items-center gap-2">
                <b>Back: {back}</b>
                <button onClick={()=>setBack(back +1)} className="border rounded p-1 w-8">+1</button>
            </div>
        </div>
    )
}