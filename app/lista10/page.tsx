import Card from "../components/Card";
import MAIN from "../components/MAIN";
import Matricula from "../lista09/components/Matricula";
import DoisInputs from "./components/DoisInputs";
import InputControlado from "./components/InputControlado";
import MatriculaCompleta from "./components/MatriculaCompleta";
import MiniCadastro from "./components/MiniCadastro";
import MostrarAoEnviar from "./components/MostrarAoEnviar";
import ObjetoNoEstado from "./components/ObjetoNoEstado";
import Observacao from "./components/Observacao";
import Turma from "./components/Turma";

export default function Home() {
  return (
    <MAIN>
      <Card> <InputControlado /> </Card>
      <Card> <DoisInputs/> </Card>
      <Card> <ObjetoNoEstado /> </Card>
      <Card> <MostrarAoEnviar /> </Card>
      <Card> <Turma /> </Card>
      <Card> <Observacao /> </Card>
      <Card> <MatriculaCompleta /> </Card>
      <Card> <MiniCadastro /> </Card>
    </MAIN>
  );
}
