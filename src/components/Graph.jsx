import React from "react";
import Lineas from "../assets/Lineas.png";
import Circular from "../assets/Circular.png";
import Personal from "../assets/Personal.png";
import Productos from "../assets/Productos.png";

const Graph = () => {
  return (
    <div>
      <div className="graficos flex mt-[32px] ml-[36px] gap-[368px]">
        <img src={Lineas} alt="Not Found" />
        <img src={Circular} alt="Not Found" />
      </div>
      <div className="extras flex mt-[21px] ml-[36px] gap-[309px]">
        <img src={Productos} alt="" />
        <img src={Personal} alt="" />
      </div>
    </div>
  );
};

export default Graph;
