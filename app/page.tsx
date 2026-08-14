import Card from "./components/Card";
import MAIN from "./components/MAIN";

export default function Home() {
  return (
    <MAIN>
        <Card>  
          <div className="flex flex-col w-full gap-2">
            <Card> <a href="/listas"> Listas de exercícios React 1, 2 e 3 </a> </Card>
            <Card> <a href="/listas/turma"> Turma </a> </Card>   
          </div>                
        </Card>
        <Card> <a href="/lista09"> Lista de exercícios React 4 </a>  </Card>
        <Card> <a href="/lista10"> Lista de exercícios React 5 </a> </Card>
        <Card> <a href="/form-api"> Form-API </a> </Card>
        <Card> <a href="/lista11"> Lista de exercícios React 6 </a> </Card>
        <Card> aqui vão também o formulario e o currículo componentizados </Card>
        <Card> <a href="/calculadora"> Calculadora </a> </Card>    
        
    </MAIN>
  );
}
