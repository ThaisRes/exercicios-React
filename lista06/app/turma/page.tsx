
function Contador() {
    return (
    <p className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-bold">
        11 alunos matriculados
    </p>
    )
}

function SecaoTurma() {
    return(
    <div className="text-emerald-950">
        <h2>heading</h2>
        <p>paragrafo</p>
    </div>
    )
}

function Footer(){
    return(
        <small className="flex justify-center text-emerald-50 bg-emerald-700 p-3 w-full">@copywrite</small>
    )
}

function Header(){
    return(
        <header className="flex w-full bg-emerald-950 text-emerald-50 p-3 rounded">
            <b>Mural da Turma</b>
        </header>      
    )
}

function Mural(){
    return(
        <>
        <Header />
        <div className=" flex h-lvw flex-col gap-6 items-center  bg-emerald-50 py-6 ">
            
            <h1 className="text-3xl font-bold text-emerald-950">Nossa Turma</h1>
            <Contador />
            <SecaoTurma />
            <div className="flex flex-wrap gap-3 shadow-xl w-20 bg-emerald-100 text-emerald-950 ">Aluno</div>
            <div className="flex flex-wrap gap-3 shadow-xl w-20 bg-emerald-100 text-emerald-950">Aluno</div>
            <div className="flex flex-wrap gap-3 shadow-xl w-20 bg-emerald-100 text-emerald-950">Aluno</div>
            
        </div>
        <Footer />
        </>
    )
}

export default function Turma() {
    return (
    <>
        <Mural />
    </>
    )
}