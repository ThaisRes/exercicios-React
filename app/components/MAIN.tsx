import { childrenProps } from "../types/childrenProps";

export default function({children}:childrenProps){
  return(
    <div className="flex flex-col flex-1 bg-amber-100 font-sans text-amber-950">  {/*dark:bg-amber-950*/}
      <main className="flex w-full flex-col ml-4 mt-4"> {children} </main>
    </div>
  )
}