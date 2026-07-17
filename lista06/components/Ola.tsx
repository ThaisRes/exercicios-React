type OlaProps = {
    nome?: string;
  };

export default function Ola({nome = "visitante"}: OlaProps) {
    return <p>Olá, {nome}</p>
}