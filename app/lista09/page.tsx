'use client'   //encapsulameto, abstração

import Card from "../components/Card";
import MAIN from "../components/MAIN";
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
import Painel from "./components/Painel";
import Presenca from "./components/Presenca";
import PresencaInterativa from "./components/PresencaInterativa";
import SoPresentes from "./components/SoPresentes";
import TrocaCor from "./components/TrocaCor";
import { useState } from "react";


export default function Home() {


  
  return(
    <MAIN>
      <Card> <Botao>Clique aqui</Botao> </Card>
      <Card> <Contador /> </Card>
      <Card> <LigaDesliga /> </Card>
      <Card> <MostrarEsconder /> </Card>
      <Card> <TrocaCor /> </Card>
      <Card> <InputControlado /> </Card>
      <Card> <Onchange /> </Card>
      <Card> <Presenca /> </Card>
      <Card> <Curtidas /> </Card>
      <Card> <AdicionarTurma /> </Card>
      <Card> <ContarPresentes /> </Card>
      <Card> <Contadores /> </Card>
      <Card> <SoPresentes /> </Card>
      <Card> <PresencaInterativa /> </Card>
      <Card> <Matricula /> </Card>    
      <Card> <Painel /> </Card>
    </MAIN>
  )
}