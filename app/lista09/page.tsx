'use client'   //encapsulameto, abstração

import AdicionarTurma from "./components/AdicionarTurma";
import Botao from "./components/Botao";
import Contador from "./components/Contador";
import Contadores from "./components/Contadores";
import ContarPresentes from "./components/ContarPresentes";
import Curtidas from "./components/Curtidas";
import InputControlado from "./components/InputControlado";
import LigaDesliga from "./components/LigaDesliga";
import Matricula from "./components/Matricula";
import MostrarEsconder from "./components/MostrarEsconder";
import Onchange from "./components/OnChange";
import Presenca from "./components/Presenca";
import PresencaInterativa from "./components/PresencaInterativa";
import SoPresentes from "./components/SoPresentes";
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
      <Curtidas />
      <AdicionarTurma />
      <ContarPresentes />
      <Contadores />
      <SoPresentes />
      <PresencaInterativa />
      <Matricula />

    </div>
  )
}