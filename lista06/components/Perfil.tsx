type PerfilProp = {
  cargo:string
}

export default function Perfil({cargo}:PerfilProp) {
  return (
    <p className="text-emerald-900">Cargo: {cargo}</p>
  )
}
