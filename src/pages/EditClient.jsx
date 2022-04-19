import { FormClient } from "../components/FormClient"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export const EditClient = () => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getClientAPI = async () => {
      try {
        const url = `http://localhost:4000/clients/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        setClient(result);
      } catch (error) {
        console.log(error);
      }
  
        setLoading(!loading);
    
     
    };
    getClientAPI();
  }, []);


  return (
    <>
    <h1 className="font-black text-4xl text-orange-600">Edit Client</h1>
    <p className="mt-3">Update data</p>
    {client?.name ? (
         <FormClient loading={loading} client={client} />  
    ):
    <p>Id's client is not valid.</p>
    }
 
   </>
  )
}
