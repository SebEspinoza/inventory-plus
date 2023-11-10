import React, { useState, useEffect } from "react";
import axios from "axios";
import LogCard from "./LogCard";

const url = "https://inventoryplus.cyclic.app/logProducts";

const LogViewer = () => {
  const [logs, setLogs] = useState([]);
  const [selectedLog, setSelectedLog] = useState(null);
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  useEffect(() => {
    // Realiza la solicitud a la API para obtener los logs usando Axios
    axios
      .get(url)
      .then((response) => setLogs(response.data))
      .catch((error) => console.error("Error fetching logs:", error));
  }, []); // El segundo parámetro [] asegura que useEffect solo se ejecute una vez al montar el componente

  const handleLogClick = (logId) => {
    // Si el log seleccionado es el mismo, cerrarlo. Si es diferente, abrir el nuevo log.
    setSelectedLog((prevLog) => (prevLog && prevLog._id === logId ? null : logs.find((log) => log._id === logId)));
  };

  const handleCloseLog = () => {
    setSelectedLog(null);
  };

  return (
    <div className="bg-white rounded-md">
      <h2 className="text-4xl text-center">Historial de inventarios</h2>
      <ul className="m-2">
        {logs.map((log, i) => (
          <li key={log._id} onClick={() => handleLogClick(log._id)} className="shadow-md hover:bg-color-crema m-2 text-lg pb-2">
            {i + 1}- Historial inventario del dia: {formatDate(log.timestamp)}
          </li>
        ))}
      </ul>
      {selectedLog && (
        <div>
          <div className="grid grid-cols-1 grid-rows-2">
            <h3 className="text-center text-2xl underline">Detalles del Log dia {formatDate(selectedLog.timestamp)}</h3>
            <button onClick={handleCloseLog} className="bg-danger rounded-md text-sm px-2 py-2 w-[8rem] text-center text-white uppercase m-auto">
              Cerrar Log
            </button>
          </div>
          <div className="grid grid-col lg:grid-cols-3 gap-2 m-4">
            {selectedLog.products.map((product) => (
              <LogCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LogViewer;
