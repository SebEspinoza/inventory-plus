import React from "react";

const LogCard = ({ product }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4 w-full">
      <div className="sm:flex sm:items-center px-6 py-4">
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p className="text-xl font-bold mb-2">{product.name}</p>
          <p className="text-gray-700 text-base">
            Stock: {product.quantity}
            <br />
            Precio: ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogCard;
