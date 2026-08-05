'use client'
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState <{cep:string; logradouro:string; bairro:string; numero:string}>({
    cep:"", logradouro:"", bairro:"", numero:""
  });

  function aoMudar(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function buscarCep(){
    const cep = form.cep;
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();
    setForm({ ...form, logradouro: data.logradouro, bairro: data.bairro });

  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <form action="" className="flex flex-col gap-2">
          <legend>Conexão API ViaCEP</legend>

          <label htmlFor="cep" className="flex gap-2">
            CEP
            <input type="text" name="cep" 
              value={form.cep}
              onChange={aoMudar} 
              onBlur={buscarCep} 
              placeholder="Digite o seu cep" 
            />
          </label>
          
          <label htmlFor="logradouro" className="flex gap-2">
            Rua
            <input type="text" name="logradouro" onChange={aoMudar} value={form.logradouro} placeholder="Digite sua logradouro"/>
          </label>
          
          <label htmlFor="bairro" className="flex gap-2">
            Logradouro
            <input type="text" name="bairro" onChange={aoMudar} value={form.bairro} placeholder="Digite o bairro"/>
          </label>          

          <label htmlFor="numero" className="flex gap-2">
            Número
            <input type="text" name="numero" value={form.numero} onChange={aoMudar} placeholder="Digite o número"/>
          </label>          

        </form>
      </main>
    </div>
  );
}