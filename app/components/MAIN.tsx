import { childrenProps } from "../types/childrenProps";

export default function({children}:childrenProps){
  return(
    <div className="bg-gray-300 font-sans text-gray-950 h-screen">  
      <main className="w-full columns-1 sm:columns-1 md:columns-2 lg:columns-3 p-4"> {children} </main>
    </div>
  )
}
//flex flex-col flex-1 flex-wrap bg-gray-300 font-sans text-gray-950  {/*dark:bg-amber-950*/}

//w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 p-4
//flex w-full flex-row flex-wrap gap-3 ml-4 mt-4