import { FormClient } from "../components/FormClient"


export const NewClient = () => {
  return (
    <>
     <h1 className="font-black text-4xl text-orange-600">New Client</h1>
     <p className="mt-3">Fill out the following form to register a client</p>
     <FormClient />  
    </>
  )
}

