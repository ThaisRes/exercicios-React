import { useState } from "react";
import { alunos } from "@/app/lista09/constants/alunos";

export default function ContarPresentes(){

    return(
        <div className="flex flex-col gap-2 text-center items-center border rounded p-3 w-110 shadow-md">
            <h2>Alunos presentes: {alunos.filter(a=>a.presente).length}</h2>
        </div>
    )
}