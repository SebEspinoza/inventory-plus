import React from "react";
import Chart from "./components/Chart";

const getCurrentDate = () => {
  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

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
            <h3 className="font-Manrope lg:ml-[15px] font-normal lg:text-[14px] lg:leading-[22px] text-sm opacity-1 text-color-cafe-claro">
              Hoy: {todayDate}
            </h3>
          </div>
        </div>
        <p className="text-center mt-4 text-sm lg:text-lg text-color-cafe-claro md:mb-4">
          En este apartado podrás ver información general del sistema. Tales como la cantidad de productos, el personal registrado, etc.
        </p>
        <Chart />
      </div>
    </div>
  );
};

export default Home;
