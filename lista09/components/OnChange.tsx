import { useState } from "react";

export default function Onchange(){
    const [form, setForm]= useState <{nome:string; curso:string; periodo:string}> (
        {nome:"", curso: "", periodo: ""}
    );
    const [check, setCheck]= useState(false);
    const [radio, setRadio]= useState("");

    function handler(e: React.ChangeEvent<HTMLInputElement>){
        setForm({...form, [e.target.name]:e.target.value})
    }

    return (
        <div className="flex flex-col gap-3 border rounded p-3 w-110 shadow-md " >
            <div className="flex flex-col gap-1">
                <label>Input - nome</label>
                <input className="rounded w-100 border h-10" type="text" name="nome" value={form.nome} 
                    onChange={handler} 
                />
                <p>{form.nome}</p>

                <label>Input - curso</label>
                <input className="rounded w-100 border h-10" type="text" name="curso" value={form.curso} 
                    onChange={handler} 
                />
                <p>{form.curso}</p>

                <label>Input - periodo</label>
                    <input className="rounded w-100 border h-10" type="text" name="periodo" value={form.periodo} 
                    onChange={handler} 
                />
                <p>{form.periodo}</p>
            </div>

            <label className="flex items-center cursor-pointer gap-1">
                <input className="w-3 h-3 rounded" type="checkbox" checked={check} onChange={(e)=>setCheck(e.target.checked)}/>
                Checkbox
            </label>
            <p>{check}</p>

            <div className="flex flex-col gap-2 border p-4 w-30 rounded border-gray-700">
                <label className="flex items-center cursor-pointer gap-1">
                <input type="radio" value={radio} onChange={(e)=>setRadio(e.target.value)} name="radio"/>
                Radio
                </label>
                <label className="flex items-center cursor-pointer gap-1">
                <input type="radio" value={radio} onChange={(e)=>setRadio(e.target.value)} name="radio"/>
                Radio 2
                </label>
            </div>
        </div>
      )
}

                
                {/* <label>Input - curso</label>
                <input className="w-100 border h-10" type="text" id="curso" value={curso} 
                    onChange={(e)=> {setForm(e.target.value)}} 
                /> */}

                {/* <label>Input - curso</label>
                <input className="rounded w-100 border h-10" type="text" id="curso" value={form.curso} 
                    onChange={(e)=> {setForm({...form, curso: e.target.value})}} 
                /> */}