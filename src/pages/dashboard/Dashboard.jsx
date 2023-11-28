import React from "react";
import PieChart1 from "../../components/PieChart.jsx";
import BarChart from "../../components/BarChart.jsx";
import ColumnChart from "../../components/ColumnChart.jsx";
import { BarChart2 } from "../../components/BarChart.jsx";

const Dashboard = () => {
  const estilo1 = {
    background: "#ffffff",
    borderRadius: "10px",
    //marginTop: "20px",
    boxShadow: "0 0 20px #e5e7eb",
  };
  const classNamePieChart = "md:w-[680px] md:h-[480px] w-[380px] h-[340px] md:mr-1";
  const classNameBarChart = "md:w-[330px] md:h-[480px] w-[380px] h-[340px] md:ml-1";
  const classColumnChart = "md:w-[600px] md:h-[480px] w-[380px] h-[340px] md:ml-1 md:mt-2";
  return (
    <div>
      <p className="text-center mt-4 text-sm text-color-cafe-claro md:mb-4">
        En este apartado podrás visualizar diversos gráficos con información sobre tu negocio, tales como, el stock de tus productos, cantidad de
        productos por categoria, entre otros.
      </p>
      <div className="w-full flex flex-col items-center md:flex-row md:items-baseline md:flex-wrap bg-white rounded-md shadow-lg md:justify-evenly md:p-4">
        <PieChart1 style={estilo1} classN={classNamePieChart} />
        <BarChart style={estilo1} classN={classNameBarChart} />
        <BarChart2 style={estilo1} classN={classNameBarChart} />
        <ColumnChart style={estilo1} classN={classColumnChart} />
      </div>
    </div>
  );
};

export default Dashboard;
