import { useState } from "react";
import { alunos } from "@/app/lista09/constants/alunos";

export default function ContarPresentes(){

    return(
        <div >
            <h2>Alunos presentes: {alunos.filter(a=>a.presente).length}</h2>
        </div>
    )
}