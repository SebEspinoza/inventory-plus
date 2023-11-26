import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";

const ProductCard = ({ name, description, last_name, img }) => {
  return (
    <div className="flex items-center p-4 bg-color-crema shadow-lg rounded-lg mb-4 w-11/12">
      {img.startsWith("data:image") ? (
        <img src={img} className="h-24 w-24 object-cover rounded-full border border-color-crema" />
      ) : (
        <img src={img} className="h-24 w-24 object-cover rounded-full border border-color-crema" />
      )}
      <div className="ml-10">
        <div className="font-bold">
          {name}
        </div>
        <div className="text-black text-md">{description}</div>
      </div>
    </div>
  );
};

export default ProductCard;
