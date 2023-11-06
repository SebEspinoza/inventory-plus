import React from "react";
import Lineas from "../../../assets/Lineas.png";
import Productos from "../../../assets/Productos.png";
import { PieChart2 } from "../../../components/PieChart";
import WorkersList from "./WorkerList";

const Chart = () => {
  const estilo2 = {
    background: "#ffffff",
    borderRadius: "10px",
  };
  const classNamePieChart = "md:w-[680px] md:h-[480px] w-[380px] h-[340px]";
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center md:flex-row md:items-baseline md:flex-wrap">
        <img src={Lineas} alt="Lineas" />
        <PieChart2 style={estilo2} classN={classNamePieChart} />
        <img src={Productos} alt="Products" />
        <WorkersList />
      </div>
    </div>
  );
};

export default Chart;
