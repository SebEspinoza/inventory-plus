import React from "react";
import Graph from "../components/Graph";
import { TbCalendar } from "react-icons/tb";

const VistaGeneral = () => {
  return (
    <div>
      <div className="contenido bg-[#f3f4f6ff] flex-grow p-4">
        <div className="parteSuperior flex flex-row items-center justify-between">
          <div className="texto flex flex-row items-center mt-[32px] ml-[36px]">
            <h1 className="font-heading font-bold text-[32px] leading-[48px] text-color-cafe-oscuro">
              Vista General
            </h1>
            <h3 className="font-body ml-[15px] font-normal text-[14px] leading-[22px] opacity-1 text-color-cafe-claro">
              Hoy: Sept 15, 2023
            </h3>
          </div>

          <div className="dropdown items-baseline cursor-pointer">
            <TbCalendar className="absolute  w-[20px] h-[20px] fill-color-crema mt-[9px] ml-[5px]" />
            <select
              name="periodo"
              id="periodo"
              className="w-[179px] h-[36px] pl-[25px] pr-[25px] font-body text-[14px] font-normal leading-[22px] text-color-crema bg-color-cafe-claro
                rounded-[4px] border-0 cursor-pointer"
            >
              <option value="">Mes anterior</option>
              <option value="">Ultimos 3 meses</option>
              <option value="">Ultimos 6 meses</option>
            </select>
          </div>
        </div>
        <Graph />
      </div>
    </div>
  );
};

export default VistaGeneral;
