type OlaProps = {
    nome?: string;
  };

export default function Ola({nome = "visitante"}: OlaProps) {
    return <p className="text-emerald-600">Olá, {nome}</p>
}