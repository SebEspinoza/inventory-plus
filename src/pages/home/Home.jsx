import React from "react";
import Chart from "./components/Chart";

const getCurrentDate = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const currentDate = new Date();
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  return `${month} ${day}, ${year}`;
};

const Home = () => {
  const todayDate = getCurrentDate();

  return (
    <div>
      <div className="flex-grow md:p-4 p-1">
        <div className="parteSuperior flex lg:flex-row flex-col items-center justify-between mt-5">
          <div className="textoSuperior flex lg:flex-row  flex-col items-center">
            <h1 className="font-OpenSans font-bold lg:text-[32px] lg:leading-[48px] text-[32px] leading-[30px] text-center text-color-cafe-oscuro">
              Vista General
            </h1>
            <h3 className="font-Manrope lg:ml-[15px] font-normal lg:text-[14px] lg:leading-[22px] text-sm opacity-1 text-color-cafe-claro">
              Hoy: {todayDate}
            </h3>
          </div>
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default Home;
