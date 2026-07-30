









/*
Um input com value e onChange ligados ao estado. O que você digita aparece abaixo.
Lembre
Tipe o evento: (e: React.ChangeEvent<HTMLInputElement>) e leia e.target.value.
value={texto}
onChange
e.target.value

const [texto, setTexto] = useState<string>("");

<input
  value={texto}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
    setTexto(e.target.value)}
/>
<p>Você digitou: {texto}</p>
🤪 🤯 💡
*/