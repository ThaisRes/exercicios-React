import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col ">
        <a href="/listas">listas 7 e 8</a>
        <a href="/lista09">lista 9</a>
        <a href="/lista10">lista 10</a>
        <a href="/form-api">form-api</a>
      </main>
    </div>
  );
}
