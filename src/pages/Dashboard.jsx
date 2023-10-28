import React from "react";
import Iframe from "react-iframe";

const Dashboard = () => {
  const estilo1 = {
    background: "#21313C",
    borderRadius: "10px",
    marginTop: "20px",
  };
  return (
    <div>
      <h1 className="text-5xl underline text-center text-color-cafe-claro mt-2">Dashboard</h1>
      <p className="text-center mt-4 text-lg text-color-cafe-claro">
        En este apartado podras visualizar diversos graficos con informacion sobre tu negocio, tales como, el stock de tus productos, cantidad de
        productos por categoria, entre otros
      </p>
      <div className="w-full flex flex-col items-center md:flex-row md:items-baseline md:flex-wrap">
        <Iframe
          styles={estilo1}
          className="md:w-[510px] md:h-[480px] w-[380px] h-[340px] md:mr-1 "
          src="https://charts.mongodb.com/charts-project-0-sgcwj/embed/charts?id=653c49ee-410d-4fda-8b40-05e6f3eeabda&maxDataAge=300&theme=dark&autoRefresh=true"
        />
        <Iframe
          styles={estilo1}
          className="md:w-[510px] md:h-[480px] w-[380px] h-[340px]"
          src="https://charts.mongodb.com/charts-project-0-sgcwj/embed/charts?id=653c471c-a3a5-4252-8de9-882a43d093b0&maxDataAge=300&theme=dark&autoRefresh=true"
        />
      </div>
    </div>
  );
};

export default Dashboard;
