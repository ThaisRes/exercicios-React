type caixaProps = {
    children: React.ReactNode;
  };
  
export default function Caixa({children}:caixaProps){
    return(
        <div>
            {children}
        </div>
    )
}

/*
Por que React.ReactNode?
Porque children pode ser muitas coisas:

texto (string)
número (number)
um elemento JSX (<h1>...</h1>)
vários elementos
null
undefined
etc.

React.ReactNode engloba todos esses casos.
*/