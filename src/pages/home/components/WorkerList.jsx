import { useEffect, useState } from "react";
import WorkerCard from "./workerCard";
import axios from "axios";

//url API
const url = "https://inventoryplus.cyclic.app/users";

const WorkersList = () => {
  const [workers, setWorkers] = useState([]);

  const getWorkers = async () => {
    try {
      const respuesta = await axios.get(url);
      setWorkers(respuesta.data);
    } catch (error) {
      console.error("Error al obtener los trabajadores:", error);
    }
  };

  useEffect(() => {
    getWorkers();
  }, []);

  return (
    <div className="container mx-auto p-6 w-fit ms-0 me-0 bg-white shadow-lg">
      <div className="flex mb-4 justify-between">
        <div className="font-bold text-lg">Personal</div>
        <button className="bg-color-cafe-claro hover:bg-rojizo text-white font-bold py-2 px-4 rounded">Ver todos</button>
      </div>
      <div>
        {workers.map((worker) => (
          <WorkerCard key={worker._id} name={worker.username} description={worker.role == true ? "Administrador" : "Trabajador"} />
        ))}
      </div>
    </div>
  );
};

export default WorkersList;
