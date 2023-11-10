import React from "react";

const LogCard = ({ product }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4 w-full">
      <div className="sm:flex sm:items-center px-6 py-4">
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p className="text-xl font-bold mb-2">{product.name}</p>
          <p className="text-gray-700 text-base">
            Stock: {product.quantity}
            <br />
            Se agrego el: {formatDate(product.date_added)}
            <br />
            Caduca el: {formatDate(product.date_of_expiry)}
            <br />
            Precio: ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogCard;
