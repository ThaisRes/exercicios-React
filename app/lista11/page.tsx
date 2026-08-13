import Card from "../components/Card";
import MAIN from "../components/MAIN";
import AsyncAwait from "./components/AsyncAwait";
import BuscaAluno from "./components/BuscaAluno";
import CardError from "./components/CardError";
import CardFetch from "./components/CardFetch";
import Filtros from "./components/Filtros";
import Painel from "./components/Painel";
import PrimeiroFetch from "./components/PrimeiroFetch";

export default function Home(){
    return (
        <MAIN>
            <Card> <PrimeiroFetch /> </Card>
            <Card> <AsyncAwait /> </Card>
            <Card> <CardFetch /> </Card>
            <Card> <Filtros /> </Card>
            <Card> <CardError /> </Card>
            <Card> <BuscaAluno /> </Card>
            <Card> <Painel /> </Card>
        </MAIN>
    )
}