import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const SeeClient = () => {
  const [client, setClient] = useState({});
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
    };
    getClientAPI();
  }, []);
  return (
    <div>
      <h1 className="font-black text-4xl text-orange-600">
        View Client {client.name}
      </h1>
      <p className="mt-3">Info of the client.</p>

      <p className="text-2xl text-gray-600 mt-10">
        <span className="text-gray-800 uppercase font-bold">Client: </span>
        {client.name}
      </p>
      {client.email && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {client.email}
        </p>
      )}

      {client.company && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Company: </span>
          {client.company}
        </p>
      )}
      {client.phone && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Phone: </span>
          {client.phone}
        </p>
      )}

      {client.note && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Notes: </span>
          {client.note}
        </p>
      )}
    </div>
  );
};
