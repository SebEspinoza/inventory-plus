import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";

const WorkerCard = ({ name, description, last_name }) => {
  return (
    <div className="flex items-center p-4 bg-color-crema shadow-lg rounded-lg mb-4 w-[260px]">
      <BiSolidUserCircle size={30} className="fill-color-cafe-oscuro" />
      <div className="ml-10">
        <div className="font-bold">
          {name} {last_name}
        </div>
        <div className="text-black text-md">{description}</div>
      </div>
    </div>
  );
};

export default WorkerCard;
