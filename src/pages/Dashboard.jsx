import React from "react";
import PieChart1 from "../components/PieChart.jsx";
import BarChart from "../components/BarChart.jsx";

const Dashboard = () => {
  const estilo1 = {
    background: "#21313C",
    borderRadius: "10px",
    marginTop: "20px",
  };
  const classNamePieChart = "md:w-[680px] md:h-[480px] w-[380px] h-[340px] md:mr-1";
  const classNameBarChart = "md:w-[330px] md:h-[480px] w-[380px] h-[340px] md:ml-1";
  return (
    <div>
      <h1 className="text-5xl underline text-center text-color-cafe-claro mt-2">Dashboard</h1>
      <p className="text-center mt-4 text-lg text-color-cafe-claro">
        En este apartado podras visualizar diversos graficos con informacion sobre tu negocio, tales como, el stock de tus productos, cantidad de
        productos por categoria, entre otros
      </p>
      <div className="w-full flex flex-col items-center md:flex-row md:items-baseline md:flex-wrap">
        <PieChart1 style={estilo1} classN={classNamePieChart} />
        <BarChart style={estilo1} classN={classNameBarChart} />
      </div>
    </div>
  );
};

export default Dashboard;
