import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col ">
        <a href="/listas">listas 1, 2 e 3</a> 
        {/* aqui vai também o formulario e o currículo componentizados*/}
        <a href="/lista09">lista 4</a>
        <a href="/lista10">lista 5</a>
        <a href="/form-api">form-api</a>
        <a href="/lista11">lista 6</a>
      </main>
    </div>
  );
}
