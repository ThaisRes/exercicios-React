import { ReactNode } from "react"

type EnunciadoProps = {
  texto?: string
  children?: ReactNode
}
export default function Enunciado({ texto, children }:EnunciadoProps) {
  return(
    <h2 className="font-bold text-blue-700">{children ?? texto}</h2>
  )
}