
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
        <small className="text-emerald-950">@copywrite</small>
    )
}

function Header(){
    return(
        <header className="flex bg-emerald-950 text-emerald-50 p-3 rounded">
            <b>Mural da Turma</b>
        </header>      
    )
}

export default function Turma() {
    return (
    <>
    <div className=" flex flex-col items-center justify-center bg-emerald-50 ">
        <Header />
        <h1 className="text-3xl font-bold text-emerald-950">Nossa Turma</h1>
        <Contador />
        <SecaoTurma />
        <div className="flex flex-wrap gap-3 shadow-xl w-20 bg-emerald-100 text-emerald-950 ">Aluno</div>
        <div className="flex flex-wrap gap-3 shadow-xl w-20 bg-emerald-100 text-emerald-950">Aluno</div>
        <div className="flex flex-wrap gap-3 shadow-xl w-20 bg-emerald-100 text-emerald-950">Aluno</div>
        <Footer />
    </div>
    </>
    )
}