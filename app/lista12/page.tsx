import Card from "../components/Card";
import MAIN from "../components/MAIN";
import Maiusculos from "./components/Maiusculos";
import Turma from "./components/Turma";

export default function Home() {

    return(
        <MAIN>
            <Card> <Turma /> </Card>
            <Card> <Maiusculos /> </Card>
        </MAIN>  
    )
}