'use client'   //encapsullameto, abstração

// import Botao from "../components/Botao";
import Botao from "./components/Botao";
import Contador from "./components/Contador";
import InputControlado from "./components/InputControlado";
import LigaDesliga from "./components/LigaDesliga";
import MostrarEsconder from "./components/MostrarEsconder";
import Onchange from "./components/OnChange";
import Presenca from "./components/Presenca";
import TrocaCor from "./components/TrocaCor";
import { useState } from "react";


export default function Home() {


  
  return(
    <div className=" flex flex-col gap-5 m-5">
      <Botao>Clique aqui</Botao>
      <Contador />
      <LigaDesliga />
      <MostrarEsconder />
      <TrocaCor />
      <InputControlado />
      <Onchange />
      <Presenca />

    </div>
  )
}