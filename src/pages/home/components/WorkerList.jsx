import { useEffect, useState } from "react";
import WorkerCard from "./workerCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//url API
const url = "https://inventoryplus.cyclic.app/users";

const WorkersList = () => {
  const [workers, setWorkers] = useState([]);
  const navigate = useNavigate();

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

  const redirect = () => {
    navigate("/trabajadores");
  };

  return (
    <div className="container mx-auto p-6 ms-0 me-0 bg-white shadow-lg rounded-md h-full lg:h-[660px] lg:overflow-y-scroll">
      <div className="flex mb-4 justify-between">
        <div className="font-bold text-lg">Personal</div>
        <button className="bg-color-cafe-claro hover:bg-rojizo text-white font-bold py-2 px-4 rounded" onClick={redirect}>
          Ver todos
        </button>
      </div>
      <div className="grid grid-cols-1 place-items-center">
        {workers.map((worker) => (
          <WorkerCard
            key={worker._id}
            name={worker.first_name}
            last_name={worker.last_name}
            description={worker.role === true ? "Administrador" : "Trabajador"}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkersList;
