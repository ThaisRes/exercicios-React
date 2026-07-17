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

type Perfil = {
  id: number;
  emoji: string;
  nome: string;
  cargo: string;
  idade: number;
};

export default function Home() {
  const nome:string = "Ana";
  const nome2:string = "Daniel Guimarães";
  const curso:string = "Técnico em Mecânica"

  const perfil:Perfil[] = [
    { id: 1, emoji: "😄", nome: "Ana", cargo: "RH", idade: 35 },
    { id: 2, emoji: "👨‍💻", nome: "Carlos", cargo: "Desenvolvedor", idade: 28  },
    { id: 3, emoji: "🎨", nome: "Julia", cargo: "Designer", idade: 52  }
  ]

  return (
  <>
    <Header />
    <main className="flex flex-col gap-3 py-6 items-center  bg-emerald-50 h-lvw">     

      {/* <h2 className="text-emerald-950">Olá, {nome}</h2> */}
      <Saudacao nome = {perfil[0]?.nome ?? ""}/>
      <Ola />

      <Status status = {true}/>

      <Titulo />

      <div className="flex gap-3">
        {/* cards aqui */}
        {perfil.map(p=> (
          <CartaoPerfil key={p.id} emoji={p.emoji} nome={p.nome} cargo={p.cargo}/>
        ))}
      </div>

      
      <p className="text-emerald-950">2 + 2 = {2+2}</p>  {/* Dentro de {"{ }"} vai JavaScript, não texto. */}
      <p className="text-emerald-950">8 + 1 = {8+1}</p>
      {/* <p className="text-emerald-950">{`${nome} tem ${idade} anos.`}</p> */}

      <Idade nome={perfil[1].nome} idade={perfil[1].idade} />

      <Caixa>
        <h3>Sou o conteúdo!</h3>
      </Caixa>

      <ul>
        {perfil.map(p => <li key={p.id} >{p.nome}</li>)}
      </ul>

      <div className="flex gap-3">
        {perfil.map(p => <Card key={p.id} nome={p.nome} />)}
      </div>

      <ol>
        {perfil.map((n, i) => <li key={i}>{i+1}. {n.nome}</li>)}
      </ol>

      <div>
        <img className="shadow-xl h-24 w-auto object-contain" src="OIP.jpg" alt="xx" />
      </div>

      <div className=" flex justify-center items-center shadow-lg font-bold bg-emerald-100 w-xl p-3 rounded-xl text-emerald-950">
        {`${nome2} - ${curso}`}
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
