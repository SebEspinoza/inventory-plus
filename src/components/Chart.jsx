import React from "react";
import Lineas from "../assets/Lineas.png";
import Circular from "../assets/Circular.png";
import Personal from "../assets/Personal.png";
import Productos from "../assets/Productos.png";

const Chart = () => {
  return (
    <div className="flex flex-col gap-4 justify-around">
      <div className="flex gap-5">
        <div className="lineas">
          <img src={Lineas} alt="Lineas" />
        </div>
        <div className="circular">
          <img src={Circular} alt="Circular" />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="productos">
          <img src={Productos} alt="Productos" />
        </div>
        <div className="personal">
          <img src={Personal} alt="Personal" />
        </div>
      </div>
    </div>
  );
};

export default Chart;
