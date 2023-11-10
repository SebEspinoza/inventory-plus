import React from "react";
import { TbCalendar } from "react-icons/tb";
import Chart from "./components/Chart";

const Home = () => {
  return (
    <div>
      <div className="flex-grow md:p-4 p-1">
        <div className="parteSuperior flex lg:flex-row flex-col items-center justify-between mt-5">
          <div className="textoSuperior flex lg:flex-row  flex-col items-center">
            <h1 className="font-OpenSans font-bold lg:text-[32px] lg:leading-[48px] text-[32px] leading-[30px] text-center text-color-cafe-oscuro">
              Vista General
            </h1>
            <h3 className="font-Manrope lg:ml-[15px] font-normal lg:text-[14px] lg:leading-[22px] text-sm opacity-1 text-color-cafe-claro">
              Hoy: Sept 15, 2023
            </h3>
          </div>

          <div className="dropdown items-center cursor-pointer mt-5 mb-5 lg:mt-0 lg:mb-0 relative z-0">
            <i className="absolute left-[1px]  top-[55%] transform -translate-y-1/2 w-5 h-5  lg:top-1/2 lg:left-2 ">
              <TbCalendar size={18} className="fill-color-crema" />
            </i>
            <select
              name="periodo"
              id="periodo"
              className="w-32  text-[12px] leading-5 lg:w-[179px] lg:h-[36px] lg:px-[25px] font-Manrope lg:text-[14px] font-normal lg:leading-[22px]
               text-color-crema bg-rojizo rounded-sm border-0 cursor-pointer appearance-none text-center lg:text-start lg:ml-1"
            >
              <option value="">Mes anterior </option>
              <option value="">Ultimos 3 meses</option>
              <option value="">Ultimos 6 meses</option>
            </select>
          </div>
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default Home;
