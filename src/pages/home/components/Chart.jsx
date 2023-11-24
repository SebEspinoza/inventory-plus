import React from "react";
import Lineas from "../../../assets/Lineas.png";
import { PieChart2 } from "../../../components/PieChart";
import WorkersList from "./WorkerList";
import ProductList from "./productList";
import { BarChart3 } from "../../../components/BarChart";

const Chart = () => {
  const estilo2 = {
    background: "#ffffff",
    borderRadius: "10px",
  };
  const classNamePieChart = "md:w-[550px] md:h-[480px] w-[380px] h-[340px]";
  return (
    <div className="w-full mt-4 ">
      <div className="grid grid-cols-1 gap-2 overflow-hidden place-items-center lg:flex lg:flex-row lg:flex-wrap lg:justify-around lg:place-items-start">
        <BarChart3 style={estilo2} classN={classNamePieChart} />
        <PieChart2 style={estilo2} classN={classNamePieChart} />
        <div className="w-full lg:w-2/4">
          <ProductList />
        </div>
        <div className="w-full lg:w-fit">
          <WorkersList />
        </div>
      </div>
    </div>
  );
};

export default Chart;
