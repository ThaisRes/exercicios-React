import { useState } from "react"

export default function (){
    const[curtidas, setCurtidas]=useState<number>(0);
    return(
        <div className="flex flex-col gap-2 text-center border rounded p-3 w-110 shadow-md">
            <h2>Daniel Guimarães</h2>
            {/* <span>Curtidas </span> */}
            <div>
                <button onClick={()=>setCurtidas(curtidas +1)} className="border rounded-full p-1">
                    ❤️
                </button>
                <span> +{curtidas}</span>
            </div>
        </div>
    )
}