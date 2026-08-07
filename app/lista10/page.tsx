import Card from "../components/Card";
import MAIN from "../components/MAIN";
import DoisInputs from "./components/DoisInputs";
import InputControlado from "./components/InputControlado";
import MostrarAoEnviar from "./components/MostrarAoEnviar";
import ObjetoNoEstado from "./components/ObjetoNoEstado";

export default function Home() {
  return (
    <MAIN>
      <Card><InputControlado /></Card>
      <Card><DoisInputs/></Card>
      <Card> <ObjetoNoEstado /> </Card>
      <Card> <MostrarAoEnviar /> </Card>
    </MAIN>
  );
}
