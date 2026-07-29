import Titulo from "../components/Titulo"; //ou use @ para sair da raiz do projeto: @/components/Titulo
import Rodape from "../components/Footer";
import CartaoPerfil from "@/components/CartaoPerfil";
import Header from "@/components/Header";
import Saudacao from "@/components/Saudacao";
import Idade from "@/components/Idade";
import Status from "@/components/Status";
import Caixa from "@/components/Caixa";
import Ola from "@/components/Ola";
import Card from "@/components/Card";
import Produtos from "@/components/Produtos";
import Badge from "@/components/Badge";
import Lista from "@/components/Lista";
import Enunciado from "@/components/Enunciado";
import Perfil from "@/components/Perfil";
import CardAluno from "@/components/CardAluno";
import AlunoNome from "@/components/AlunoNome";

type Perfil = {
  id: number;
  emoji: string;
  nome: string;
  cargo: string;
  idade: number;
  vip: boolean;
  ativo: boolean;
};

type Produtos = {
  id:number;
  nome:string;
  preco: number;
}
type Alunos = {
  id:number;
  nome:string;
  nota: number;
  curso: string;
  presente: boolean;
  bolsista:boolean;
}

export default function Home() {
  const nome:string = "Ana";
  const nome2:string = "Daniel Guimarães";
  const curso:string = "Técnico em Mecânica";

  const perfil:Perfil[] = [
    { id: 1, emoji: "😄", nome: "Ana", cargo: "RH", idade: 35, vip: true, ativo: true },
    { id: 2, emoji: "👨‍💻", nome: "Carlos", cargo: "Desenvolvedor", idade: 28, vip: false, ativo:true },
    { id: 3, emoji: "🎨", nome: "Julia", cargo: "Designer", idade: 52, vip: true, ativo: false  },
    { id: 4, emoji: "📊", nome: "Marcos", cargo: "Analista de Dados", idade: 31, vip: false, ativo: true },
    { id: 5, emoji: "🧑‍🏫", nome: "Fernanda", cargo: "Gerente de Projetos", idade: 44, vip: true, ativo: true },
    { id: 6, emoji: "🔧", nome: "Roberto", cargo: "DevOps", idade: 26, vip: false, ativo: false }
  ];

  const produtos:Produtos[] = [
    { id: 1, nome: "Notebook", preco: 4500.00 },
    { id: 2, nome: "Mouse Gamer", preco: 159.90 },
    { id: 3, nome: "Teclado Mecânico", preco: 329.90 },
    { id: 4, nome: 'Monitor 24"', preco: 899.99 },
    { id: 5, nome: "Headset", preco: 249.50 },
    { id: 6, nome: "Webcam Full HD", preco: 189.90 }
  ];

  const alunos: Alunos[] = [
    {"id": 1, "nome": "Ana Silva", "nota": 8.5, "curso": "Ciência da Computação", "presente": true, "bolsista": false},
    {"id": 2, "nome": "Bruno Souza", "nota": 7.2, "curso": "Ciência da Computação", "presente": false, "bolsista": true},
    {"id": 3, "nome": "Carla Oliveira", "nota": 9.0, "curso": "Ciência da Computação", "presente": true, "bolsista": true},
    {"id": 4, "nome": "Diego Santos", "nota": 6.8, "curso": "Ciência da Computação", "presente": false, "bolsista": false},
    {"id": 5, "nome": "Elena Rodrigues", "nota": 9.5, "curso": "Ciência da Computação", "presente": true, "bolsista": true},
    {"id": 6, "nome": "Felipe Costa", "nota": 5.5, "curso": "Ciência da Computação", "presente": false, "bolsista": false}
  ];

  return (
  <>
    <Header />
    <main className="flex flex-col gap-3 p-6 items-start bg-emerald-50 h-vw">   

        <Enunciado>*Exercícios da lista 09</Enunciado>
      <div>
        <Enunciado>01. Tipar uma prop string</Enunciado>
        <Enunciado>02. Duas props tipadas</Enunciado>
        <Enunciado>03. Prop número</Enunciado>
        <Enunciado>04. Prop boolean</Enunciado>
        <div className="flex flex-row gap-3 flex-wrap justify-center">
          {alunos.map((a)=> <CardAluno key={a.id} nome={a.nome} curso={a.curso} presente={a.presente} nota={(a.nota).toFixed(2)} />)}        
        </div>
      </div>

      <div>
        <Enunciado>05.  Tipo inline - nome</Enunciado>
        <Enunciado>06.  Prop opcional - bolsista</Enunciado>
        <div className="flex flex-row gap-3 flex-wrap justify-center">
          {alunos.map(a => <AlunoNome key={a.id} nome={a.nome} bolsista={a.bolsista} />)}
        </div>
      </div>

      <Enunciado>*Exercícios da lista 08</Enunciado>

      <div>
        <Enunciado>1. Primeira prop - lista 08</Enunciado>
        <Saudacao nome = {perfil[0]?.nome ?? ""}/>
      </div>

      <div>
        <Enunciado>02. Prop num parágrafo - lista 08</Enunciado>
        <Perfil cargo="DEV" />
      </div>

        <div>
          <Enunciado>03. Duas props - lista 08</Enunciado>
          <Enunciado>04. Desestruturar props - lista 08</Enunciado>
          <Enunciado>15. filter + map - lista 08</Enunciado>
          <div className="flex gap-3 flex-wrap justify-center">
            {/* cards aqui */}
            {perfil
            .filter(p => p.ativo == true)
            .map(p=> (
              <CartaoPerfil key={p.id} emoji={p.emoji} nome={p.nome} cargo={p.cargo}/>
            ))}
          </div>
        </div>

      <div>
        <Enunciado>05. Prop numérica - lista 08</Enunciado>
        <Idade nome={perfil[1].nome} idade={perfil[1].idade} />
      </div>

      <div>
        <Enunciado>06. Prop boolean - lista 08</Enunciado>
        <Enunciado>14. Ternário no JSX - lista 08</Enunciado>
        <Status status = {true}/>
      </div>

      <div>
        <Enunciado>07. props.children - lista 08</Enunciado>
        <Caixa>
          <h3>Sou o conteúdo!</h3>
        </Caixa>
      </div> 
      
      <div>
        <Enunciado>08. Valor padrão - lista 08</Enunciado>
        {/* <h2 className="text-emerald-950">Olá, {nome}</h2> */}
        <Ola />
      </div>

      <div>
        <Enunciado>09. Lista não ordenada com .map - lista 08</Enunciado>
        <ul>
          {perfil.map(p => <li key={p.id} className="text-emerald-600">{p.nome}</li>)}
        </ul>
      </div>

      <div>
        <Enunciado>10. Array de objetos em cards - lista 08</Enunciado>
        <Enunciado>11. A key correta - lista 08</Enunciado>
        <Enunciado>13. Condicional com && - lista 08</Enunciado>
        <Enunciado>19.Grade de Cards - lista 08</Enunciado>
        <div className="flex flex-wrap justify-center gap-3">
          {perfil.map(p => <Card key={p.id} nome={p.nome} vip={p.vip}/>)}
        </div>
      </div>

      <div>
        <Enunciado>12. Lista ordenada com .map e índice - lista 08</Enunciado>
        <ol>
          {perfil.map((n, i) => <li key={i} className="text-emerald-600">{i+1}. {n.nome}</li>)}
        </ol>
      </div>
      
      <div>
        <Enunciado>16.Lista de produtos com map - lista 08</Enunciado>
        <ul className="text-emerald-600">
          {produtos.map(p => <Produtos key={p.id} nome={p.nome} preco={p.preco}/>)}
        </ul>
      </div>

      <div>
        <Enunciado>17.Badge reutilizável - lista 08</Enunciado>
        <Badge texto ="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
        <Badge texto ="Officia fugit, ea harum odit maxime dicta dolorum consectetur pariatur voluptatibus."/>
        <Badge texto ="Hic culpa aut quasi quisquam assumenda nulla natus nihil aspernatur? Velit."/>
      </div>

      <div>
        <Enunciado>18.Lista Genérica - lista 08</Enunciado>
        <div className="text-emerald-600">
          <Lista itens={["Mouse", "Teclado", "Monitor"]} />
        </div>
      </div>

      <div>
        <Enunciado>20.Tabela via .map - lista 08</Enunciado>
          <table className="w-full border-collapse overflow-hidden text-emerald-900">
            <thead>
              <tr className="border-b">
                <th className="border-r last:border-r-0 px-3 py-1 text-left">Nome</th>
                <th className="px-3 py-1 text-left">Nota</th>
              </tr>
            </thead>
            <tbody>
              {alunos.map(a =>
              <tr key={a.id} className="border-b last:border-b-0"> 
                <td className="border-r px-3 py-1">{a.nome}</td>
                <td className="px-3 py-1">{a.nota}</td>
              </tr>
              )}
            </tbody>
          </table>
      </div>

      <Enunciado>*Outros Exercícios da lista 07</Enunciado>
      <Titulo />
      
      <div>
        <Enunciado>Imagem</Enunciado>
        <img className="shadow-xl h-24 w-auto object-contain" src="OIP.jpg" alt="xx" />
      </div>

      <Enunciado>Literals</Enunciado>
      <div className=" flex justify-center items-center shadow-lg font-bold bg-emerald-100 w-xl p-3 rounded-xl text-emerald-950">
        {`${nome2} - ${curso}`}
      </div>

      {/* precos.filter(p => p > 100); */}
      
      <div>
        <Enunciado>Contas</Enunciado>
        <p className="text-emerald-950">2 + 2 = {2+2}</p>  {/* Dentro de {"{ }"} vai JavaScript, não texto. */}
        <p className="text-emerald-950">8 + 1 = {8+1}</p>
        {/* <p className="text-emerald-950">{`${nome} tem ${idade} anos.`}</p> */}
      </div>
    </main>    
    <Rodape />
  </>
  );
}

/*
<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
*/
