'use client'   //encapsullameto, abstração

import Botao from "@/components/Botao";
import Contador from "@/components/Contador";
import LigaDesliga from "@/components/LigaDesliga";
import { useState } from "react";

export default function Home() {
  
  return(
    <div className="m-5">
      <Botao>Clique aqui</Botao>
      <Contador />
      <LigaDesliga />
    </div>
  )
}