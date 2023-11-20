import React, { useState, useEffect } from "react";
import axios from "axios";
import LogCard from "./LogCard";

const url = "https://inventoryplusbackend.onrender.com/";

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
    Promise.all([axios.get(url + "logProductsEvening"), axios.get(url + "logProductsMorning")])
      .then(([eveningResponse, morningResponse]) => {
        const newLogs = [...logs, ...eveningResponse.data, ...morningResponse.data];
        const uniqueLogs = Array.from(new Set(newLogs.map((log) => log._id))).map((id) => newLogs.find((log) => log._id === id));
        setLogs(uniqueLogs);
      })
      .catch((error) => console.error("Error fetching logs:", error));
  }, [logs]);

  // Agrupar logs por día independientemente de la hora
  const groupLogsByDay = () => {
    const groupedLogs = {};

    logs.forEach((log) => {
      const formattedDate = formatDate(log.timestamp).split(" ")[0]; // Extraer solo la fecha sin la hora
      if (!groupedLogs[formattedDate]) {
        groupedLogs[formattedDate] = [];
      }
      groupedLogs[formattedDate].push(log);
    });

    return groupedLogs;
  };
  const handleLogClick = (log) => {
    setSelectedLog((prevLog) => (prevLog && prevLog._id === log._id ? null : log));
  };

  const handleCloseLog = () => {
    setSelectedLog(null);
  };

  return (
    <div className="bg-color-cafe-claro rounded-md">
      <h2 className="text-4xl text-center text-color-crema">Historial de inventarios</h2>
      {Object.entries(groupLogsByDay()).map(([date, logsForDay]) => (
        <div key={date} className="shadow-xl">
          <h3 className="text-center text-2xl underline mt-4 text-color-crema">Logs del día {date}</h3>
          <ul className="flex-1 m-2">
            {logsForDay.map((log, i) => (
              <li
                key={log._id}
                onClick={() => handleLogClick(log)}
                className={`shadow-xl m-2 text-lg pb-2 hover:cursor-pointer rounded-md ${
                  i % 2 === 0 ? "bg-mocha hover:bg-color-crema" : "bg-color-cafe-claro hover:bg-rojizo text-white"
                }`}
              >
                {i + 1}- Historial inventario a las {formatDate(log.timestamp).split(" ")[1] == "20:00" ? "20:00 PM" : "09:00 AM"}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {selectedLog && (
        <div>
          <div className="grid grid-cols-1 grid-rows-2">
            <h3 className="text-center text-2xl underline text-color-crema">Detalles del Log día {formatDate(selectedLog.timestamp)}</h3>
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
