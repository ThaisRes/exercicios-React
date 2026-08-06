import { useState } from "react"

export default function (){
    const[curtidas, setCurtidas]=useState<number>(0);
    return(
        <div>
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